import { useEffect, useState } from "react";
import Title from "./Title";
import styled from "styled-components";

import { getUniqueTypes, getMaxPrice } from "../utils/utils";
import db from "../firebase";

const RoomsFilter = ({ AllRooms }) => {
  const [Types, setTypes] = useState([]);
  const [Capacity, setCapacity] = useState([]);

  const [SelectedType, setSelectedType] = useState("all");
  const [SelectedCapacity, setSelectedCapacity] = useState("1");
  const [SelectedPrice, setSelectedPrice] = useState(100);
  const [SelectedBreakfast, setSelectedBreakfast] = useState(false);
  const [SelectedPets, setSelectedPets] = useState(false);

  useEffect(() => {
    setTypes(getUniqueTypes(AllRooms, "type"));
    setCapacity(
      getUniqueTypes(AllRooms, "capacity").sort(function (a, b) {
        return a - b;
      })
    );
  }, [AllRooms]);

  return (
    <Section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            onChange={(e) => setSelectedType(e.target.value)}
            className="form-control"
            value={SelectedType}
          >
            <option key={5} value="all">
              all
            </option>
            {Types?.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            onChange={(e) => setSelectedCapacity(e.target.value)}
            className="form-control"
            value={SelectedCapacity}
          >
            {Capacity?.map((number, index) => (
              <option key={index} value={number}>
                {number}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="price">room price ${SelectedPrice}</label>
          <input
            type="range"
            name="price"
            min={100}
            max={getMaxPrice(AllRooms)}
            id="price"
            value={SelectedPrice}
            onChange={(e) => setSelectedPrice(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={SelectedBreakfast}
              onChange={() => setSelectedBreakfast(!SelectedBreakfast)}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              checked={SelectedPets}
              onChange={() => setSelectedPets(!SelectedPets)}
            />
            <label htmlFor="breakfast">pets</label>
          </div>
          <button>
            Search
          </button>
        </div>
      </form>
    </Section>
  );
};

export default RoomsFilter;

const Section = styled.section`
  button {
    background-color: #af9a7d;
    width: 100%;
    height: 30px;
    border-radius: 5px;
    color: var(--mainWhite);
    margin-top: 10px;
  }
`;
