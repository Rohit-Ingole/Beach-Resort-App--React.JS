import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";

const Room = ({ room: { name, slug, img1, price, id } }) => {
  return (
    <article className="room">
      <div className="img-container">
        <img src={img1 || defaultImg} alt="single room" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${id}`} className="btn-primary room-link">
          features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
};

export default Room;
