import Title from "./Title";
import Room from "./Room";
import db from "../firebase";
import { useEffect, useState } from "react";
import Loading from "./Loading";

const FeaturedRooms = () => {
  const [FeatureRooms, setFeatureRooms] = useState([]);

  useEffect(() => {
    db.collection("data")
      .where("featured", "==", true)
      .onSnapshot((snapshot) =>
        setFeatureRooms(snapshot.docs.map((item) => item.data()))
      );
  }, []);

  if (FeatureRooms === []) {
    return <Loading />;
  } else {
    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {FeatureRooms?.map((room) => (
            <Room key={room.id} room={room} />
          ))}
        </div>
      </section>
    );
  }
};

export default FeaturedRooms;
