import "./featured.scss";

import React, { useEffect, useState } from "react";

import CardGrid from "../cardGrid/CardGrid";
// import { featuredPortfolio } from "../../../data";
import CardSkeleton, { CaSkeleton } from "../cardSkeleton/CardSkeleton";
import axios from "axios";
import apiRequest, { BASE_URL } from "../../req";

const Featured = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchSingleData = async () => {
      setLoading(true);
      try {
        console.log("startinggg");

        const res = await axios.get(`${BASE_URL}/posts`);
        setPosts(res.data);
      } catch (error) {
        console.log("Failed to load data");
      }
      setLoading(false);
    };
    fetchSingleData();
  }, []);

  if (loading)
    return (
      <div className="featured-container">
        <div className="featured">
          <h2>Featured properties</h2>

          <div className="containersk">
            {/* <CardSkeleton /> */}
            <CaSkeleton />
            <CaSkeleton />
            <CaSkeleton />
            <CaSkeleton />
            <CaSkeleton />
            <CaSkeleton />
            <CaSkeleton />
            <CaSkeleton />
          </div>
        </div>
      </div>
    );

  return (
    <>
      {posts && (
        <div className="featured-container">
          <div className="featured">
            <h2>Featured properties</h2>
            <div className="container">
              {posts.map((item) => (
                <CardGrid item={item} key={item.id} />
              ))}
            </div>
            {/* <CardSkeleton /> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Featured;
