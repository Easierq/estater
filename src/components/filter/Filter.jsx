import "./filter.scss";

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import FilterModal from "../filterModal/FilterModal";
import filter from "../../icons/filter.svg";

function Filter() {
  const [open, setOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState({
    type: searchParams.get("type") || "",
    city: searchParams.get("city") || "",
    property: searchParams.get("property") || "",
    minPrice: searchParams.get("minPrice") || "",
    maxPrice: searchParams.get("maxPrice") || "",
    bedroom: searchParams.get("bedroom") || "",
  });

  // useEffect(() => {
  //   setQuery({
  //     type: searchParams.get("type") || "",
  //     city: searchParams.get("city") || "",
  //     property: searchParams.get("property") || "",
  //     minPrice: searchParams.get("minPrice") || "",
  //     maxPrice: searchParams.get("maxPrice") || "",
  //     bedroom: searchParams.get("bedroom") || "",
  //   });
  // }, [searchParams]);

  const handleChange = (e) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value,
    });
  };

  const handleFilter = () => {
    setSearchParams(query);
  };

  return (
    <>
      {open && (
        <FilterModal
          setOpen={setOpen}
          open={open}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          query={query}
          setQuery={setQuery}
        />
      )}
      <div className="filter">
        <div className="top">
          <div className="item">
            {/* <label htmlFor="city">Location</label> */}
            <input
              className="search-input"
              type="text"
              id="city"
              name="city"
              placeholder="Search places, city, neighbourhood and more ...."
              onChange={handleChange}
              value={query.city}
            />
          </div>
        </div>
        <div className="filter-submit">
          <button className="submit-button" onClick={() => setOpen(!open)}>
            Search
          </button>
          <div className="filter-button" onClick={() => setOpen(!open)}>
            <img className="filter" src={filter} alt="filter-icon" />
            <p>Filter</p>
          </div>
        </div>
        <div className="bottom">
          <div className="item">
            <label htmlFor="type">Type</label>
            <select
              name="type"
              id="type"
              onChange={handleChange}
              value={query.type}
            >
              <option value="">any</option>
              <option value="buy">Buy</option>
              <option value="rent">Rent</option>
            </select>
          </div>
          <div className="item">
            <label htmlFor="property">Property</label>
            <select
              name="property"
              id="property"
              onChange={handleChange}
              value={query.property}
            >
              <option value="">any</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="condo">Condo</option>
              <option value="land">Land</option>
            </select>
          </div>
          <div className="item">
            <label htmlFor="minPrice">Min Price</label>
            <input
              type="number"
              id="minPrice"
              name="minPrice"
              placeholder="min-price"
              onChange={handleChange}
              value={query.minPrice}
            />
          </div>
          <div className="item">
            <label htmlFor="maxPrice">Max Price</label>
            <input
              type="number"
              id="maxPrice"
              name="maxPrice"
              placeholder="max-price"
              onChange={handleChange}
              value={query.maxPrice}
            />
          </div>
          <button onClick={handleFilter}>Search</button>
        </div>
        {!query.city && <p>All properties</p>}
        {query.city && (
          <p>
            Search results for <b>{query.city}</b>
          </p>
        )}
      </div>
    </>
  );
}

export default Filter;
