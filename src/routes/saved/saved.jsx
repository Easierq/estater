import { featuredPortfolio } from "../../../data";
import SaveCard from "../../components/saveCard/saveCard";
import "./saved.scss";

import React from "react";

const Saved = () => {
  return (
    <div className="saved">
      <p className="p">Saved Properties</p>
      <p className="p2">My saved properties</p>
      <div className="saved-listing">
        <div className="list-save">
          {featuredPortfolio.map((item) => (
            <SaveCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Saved;
