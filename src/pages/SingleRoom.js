import { useEffect, useState } from "react";
import { useParams } from "react-router";
import db from "../firebase";
import styled from "styled-components";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const SingleRoom = () => {
  const [SelectedRoom, setSelectedRoom] = useState([]);
  const id = parseInt(useParams().id);
  const {
    breakfast,
    capacity,
    description,
    extras,
    img1,
    img2,
    img3,
    img4,
    name,
    pets,
    price,
    size,
  } = SelectedRoom;

  useEffect(() => {
    db.collection("data")
      .where("id", "==", id)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setSelectedRoom(doc.data());
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, []);

  console.log(extras);

  return (
    <>
      <StyledHero img={img1 || defaultBcg}>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          <img src={img2} alt={name} />
          <img src={img3} alt={name} />
          <img src={img4} alt={name} />
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price : ${price}</h6>
            <h6>size : {size} SQFT</h6>
            <h6>
              max capacity :
              {size > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
            <h6>{breakfast && "free breakfast included"}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>extras </h6>
        <ul className="extras">
          {extras && extras.map((item, index) => <li key={index}>- {item}</li>)}
        </ul>
      </section>
    </>
  );
};

export default SingleRoom;

const StyledHero = styled.header`
  min-height: 60vh;
  /* background: url(${defaultBcg}); */
  background: url(${(props) => (props.img ? props.img : defaultBcg)});
  display: flex;
  align-items: center;
  justify-content: center;
`;
