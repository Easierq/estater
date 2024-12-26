import "./cardGrid.scss";

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { formatPriceWithCommas } from "../../utils/helpers";
import bookmark from "../../icons/bookmark.svg";
import bookmarkfill from "../../icons/bookmarkfill.svg";

const CardGrid = ({ item }) => {
  const [mark, setMark] = useState(false);
  const inThere = true;

  return (
    <div className="item" key={item.id}>
      <div className="ab12">
        <div className="ab1">
          <span>Featured</span>
        </div>
        <div className="ab2">
          <span>3 Bedroom Flat</span>
        </div>
      </div>
      <div className="ab3">
        {mark && (
          <img
            src={bookmarkfill}
            alt="menu-icon"
            onClick={() => setMark(false)}
          />
        )}
        {!mark && (
          <img src={bookmark} alt="menu-icon" onClick={() => setMark(true)} />
        )}
      </div>
      <Link as={NavLink} to={`/properties/${item.id}`}>
        <div className="pic">
          <img src={item.images[0]} alt={item.title} />
        </div>
        <div className="body">
          <div className="img-con">
            <img className="img" src={item.images[0]} alt={item.title} />
          </div>
          <div className="desc_title">
            <p className="price">${formatPriceWithCommas(item.price)}</p>
            <p className="title">{item.title}</p>
            <p className="desc">{item.desc}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardGrid;
