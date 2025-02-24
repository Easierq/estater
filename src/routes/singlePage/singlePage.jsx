import "./singlePage.scss";

import React, { Suspense, useEffect } from "react";
import Slider from "../../components/slider/Slider";
import { formatPriceWithCommas } from "../../utils/helpers";
import Map from "../../components/map/Map";
// import DOMPurify from "dompurify";
import { useState } from "react";
import { useNavigate, useLoaderData, Await, useParams } from "react-router-dom";

import bathroom from "../../icons/bathroom.svg";
import bed from "../../icons/bed.svg";
import sqfoot from "../../icons/sqfoot.svg";
import location from "../../icons/locationfill.svg";
import PropSkeleton from "../../components/propSkeleton/PropSkeleton";
import apiRequest, { BASE_URL } from "../../req";
import axios from "axios";

const name = "Real";

const SinglePage = () => {
  // const { post } = useLoaderData();
  // const [saved, setSaved] = useState(post.isSaved);
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState(null);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) setUserData(JSON.parse(user));
  }, []);

  useEffect(() => {
    const fetchSingleData = async () => {
      setLoading(true);
      try {
        console.log("startinggg");

        const res = await axios.get(`${BASE_URL}/posts/${id}`);
        setPost(res.data);
      } catch (error) {
        // setError("true");
        console.log("endtinggg");
      }
      setLoading(false);
    };
    fetchSingleData();
  }, [id]);

  console.log(post);

  // const handleSave = async () => {
  //   if (!userData) {
  //     navigate("/login");
  //   }
  //   // AFTER REACT 19 UPDATE TO USEOPTIMISTIK HOOK
  //   setSaved((prev) => !prev);
  //   try {
  //     await apiRequest.post("/users/save", { postId: post.id });
  //   } catch (err) {
  //     console.log(err);
  //     setSaved((prev) => !prev);
  //   }
  // };

  if (loading) {
    return (
      <div className="single-sk">
        <PropSkeleton />
      </div>
    );
  }

  return (
    <div>
      {post && (
        <>
          <div className="title-wrap">
            <div className="top-title">
              <h3>{post?.title}</h3>
            </div>
          </div>
          <div className="single">
            <Suspense fallback={<p>Loading...</p>}>
              <Await
                resolve={post}
                errorElement={<p className="err-post">Error loading posts!</p>}
              >
                <div className="single-container">
                  <div className="details">
                    <div className="wrapper">
                      {post?.images && <Slider images={post?.images} />}
                      <p>Click on any picture to view in fullscreen</p>
                      <div className="info">
                        <div className="top">
                          <div className="post">
                            <h3>{post?.title}</h3>
                            <div className="address">
                              <img src={location} alt="" />
                              <span>{post?.address}</span>
                            </div>
                            <div className="desc">
                              <span>{post?.postDetail?.desc}</span>
                            </div>

                            <div className="price">
                              $ {formatPriceWithCommas(post.price)}
                            </div>
                          </div>
                          <div className="user">
                            <img src={post?.user?.avatar} alt="" />
                            <span>{post?.user?.username}</span>
                          </div>
                        </div>
                        <p className="desc">{post?.desc}</p>
                      </div>
                    </div>
                  </div>
                  <div className="features">
                    <div className="wrapper">
                      <p className="title">Features</p>
                      <div className="sizes">
                        <div className="size">
                          <img src={sqfoot} alt="" />
                          <span>{post?.postDetail?.size} sqft</span>
                        </div>
                        <div className="size">
                          <img src={bed} alt="" />
                          <span>{post?.bedroom} bedrooms</span>
                        </div>
                        <div className="size">
                          <img src={bathroom} alt="" />
                          <span>{post?.bathroom} bathroom</span>
                        </div>
                      </div>
                      <div className="user">
                        <img src={post?.user?.avatar} alt="" />
                        <span>
                          Posted by {""}
                          {post?.user?.username}
                        </span>
                      </div>
                      <div className="buttons">
                        <button>
                          <a href="https://api.whatsapp.com/send?phone=2347065866656">
                            Send Message
                          </a>
                        </button>
                        <button>Save</button>
                      </div>
                      <div className="mapContainer">
                        <Map items={[post]} />
                      </div>
                      <p className="title">General guide</p>
                      <div className="disclaimer-con">
                        <p className="disclaimer-text">
                          {name} is a platform that connects users with real
                          estate properties and professionals. We do not
                          guarantee the accuracy, completeness, or suitability
                          of the information provided in the properties. Users
                          are responsible for verifying the details of the
                          properties and individuals involved. The information
                          above is provided and maintained by{" "}
                          <span
                            style={{
                              fontWeight: 600,
                              textTransform: "capitalize",
                            }}
                          >
                            Wale
                          </span>
                          . We shall not in any way be held responsible for the
                          actions of any agent and/or property owner/landlord on
                          or off the website.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Await>
            </Suspense>
          </div>
        </>
      )}
    </div>
  );
};

export default SinglePage;
