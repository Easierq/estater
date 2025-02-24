import "./propertiesPage.scss";

import React from "react";
import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";

import CardGrid from "../../components/cardGrid/CardGrid";
import Filter from "../../components/filter/Filter";
import { CaSkeleton } from "../../components/cardSkeleton/CardSkeleton";

const Sk = () => {
  return (
    <div className="containerk">
      <CaSkeleton />
      <CaSkeleton />
      <CaSkeleton />
      <CaSkeleton />
      <CaSkeleton />
      <CaSkeleton />
      <CaSkeleton />
      <CaSkeleton />
    </div>
  );
};

const PropertiesPage = () => {
  const data = useLoaderData();
  return (
    <div className="xproperties">
      <div className="listContainer">
        <div className="px-wrapper">
          <Filter />
          {/* {true && <p className="error-load">error</p>} */}
          <Suspense fallback={<Sk />}>
            <div className="container">
              <Await
                resolve={data.postResponse}
                errorElement={<p className="error-load"></p>}
              >
                {/* <div className="container"> */}
                {(postResponse) =>
                  postResponse.data.map((post) => (
                    <CardGrid key={post.id} item={post} />
                  ))
                }
              </Await>
            </div>
          </Suspense>
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
