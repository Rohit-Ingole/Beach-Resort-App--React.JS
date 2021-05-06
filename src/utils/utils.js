export const getUniqueTypes = (AllRooms, value) => {
  return [...new Set(AllRooms.map((room) => room[value]))];
};

export const getMaxPrice = (AllRooms) => {
  return parseInt(
    Math.max.apply(
      null,
      AllRooms.map((room) => room.price)
    ) + 100
  );
};
