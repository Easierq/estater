import "./filterModal.scss";

import React from "react";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import close from "../../icons/close-black.svg";

const FilterModal = ({
  open,
  setOpen,
  searchParams,
  setSearchParams,
  query,
  setQuery,
}) => {
  // const navigate = useNavigate();
  // const [searchParams, setSearchParams] = useSearchParams();
  // const [query, setQuery] = useState({
  //   type: searchParams.get("type") || "",
  //   city: searchParams.get("city") || "",
  //   property: searchParams.get("property") || "",
  //   minPrice: searchParams.get("minPrice") || "",
  //   maxPrice: searchParams.get("maxPrice") || "",
  //   bedroom: searchParams.get("bedroom") || "",
  // });

  const handleChanger = (e) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value,
    });
  };

  const handleFilterr = () => {
    setSearchParams(query);
    setOpen(!open);
  };
  return (
    <div className="filter-modal">
      <div className="top">
        <span className="logo">Estater</span>
        {/* <span onClick={() => setOpen(!open)}>x</span> */}
        <div className="close-wrap" onClick={() => setOpen(!open)}>
          <img className="close" src={close} alt="menu-icon" />
        </div>
      </div>
      <div className="body">
        <div className="search">
          <label htmlFor="city">Location</label>
          <input
            className="search-input"
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
            onChange={handleChanger}
            defaultValue={query.city}
          />
        </div>
        <div className="price">
          <div className="item-input">
            <label htmlFor="type">Min Price</label>
            <input
              className="search-input"
              type="number"
              id="minPrice"
              name="min-price"
              placeholder="min-price"
              onChange={handleChanger}
              defaultValue={query.minPrice}
            />
          </div>
          <div className="dash" />
          <div className="item-input">
            <label htmlFor="type">Max Price</label>
            <input
              type="number"
              id="max-price"
              name="maxPrice"
              placeholder="max-price"
              onChange={handleChanger}
              defaultValue={query.maxPrice}
            />
          </div>
        </div>
        <div className="filter-box">
          <div className="item-input">
            <label htmlFor="type">Type</label>
            <select
              name="type"
              id="type"
              onChange={handleChanger}
              defaultValue={query.type}
            >
              <option value="">any</option>
              <option value="buy">Buy</option>
              <option value="rent">Rent</option>
            </select>
          </div>
          {/* <div className="dash" /> */}
          <div className="item-input">
            <label htmlFor="type">Property</label>
            <select
              name="property"
              id="property"
              onChange={handleChanger}
              defaultValue={query.property}
            >
              <option value="">any</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="condo">Condo</option>
              <option value="land">Land</option>
            </select>
          </div>
        </div>
        <button className="submit" onClick={handleFilterr}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default FilterModal;
