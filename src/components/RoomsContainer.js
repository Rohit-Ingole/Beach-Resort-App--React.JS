import { useEffect, useState } from "react";
import db from "../firebase";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";

const RoomsContainer = () => {
  const [AllRooms, setAllRooms] = useState([]);

  useEffect(() => {
    db.collection("data")
      .orderBy("price", "asc")
      .onSnapshot((snapshot) =>
        setAllRooms(snapshot.docs.map((item) => item.data()))
      );
  }, []);

  return (
    <>
      <RoomsFilter AllRooms={AllRooms} />
      <RoomsList rooms={AllRooms} />
    </>
  );
};

export default RoomsContainer;
