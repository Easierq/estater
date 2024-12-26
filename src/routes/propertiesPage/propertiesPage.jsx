import "./propertiesPage.scss";

import React from "react";
// import { Await, useLoaderData } from "react-router-dom";
// import { Suspense } from "react";

import { featuredPortfolio } from "../../../data";
// import FilterModal from "../../components/filterModal/FilterModal";
import CardGrid from "../../components/cardGrid/CardGrid";
import Filter from "../../components/filter/Filter";
import CardSkeleton from "../../components/cardSkeleton/CardSkeleton";

const PropertiesPage = () => {
  return (
    <div className="properties">
      <div className="listContainer">
        <div className="p-wrapper">
          <Filter />

          <div className="container">
            {featuredPortfolio.map((item) => (
              <CardGrid item={item} key={item.id} />
            ))}
          </div>
          <CardSkeleton />
          {/* <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) =>
                postResponse.data.map((post) => (
                  <Card key={post.id} item={post} />
                ))
              }
            </Await>
          </Suspense> */}
        </div>
      </div>
    </div>
  );
};

export default PropertiesPage;
