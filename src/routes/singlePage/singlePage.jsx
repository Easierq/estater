import "./singlePage.scss";

import React from "react";
import Slider from "../../components/slider/Slider";
import { formatPriceWithCommas } from "../../utils/helpers";
import Map from "../../components/map/Map";

import bathroom from "../../icons/bathroom.svg";
import bed from "../../icons/bed.svg";
import sqfoot from "../../icons/sqfoot.svg";
import location from "../../icons/locationfill.svg";
import left from "../../icons/chevron_left.svg";
import PropSkeleton from "../../components/propSkeleton/PropSkeleton";

const post = {
  id: 2,
  title: "Social Media App one",
  images: ["/bg.jpg", "/bg.jpg", "/bg.jpg", "/bg.jpg"],
  bedroom: 3,
  bathroom: 3,
  price: 34000,
  user: { id: 1, username: "John Doe", avatar: "/bg.jpg" },
  address: "No 19, avenue one",
  desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, est culpa! Repellendus reiciendis aperiam cumque officia nulla, dolores odio. Excepturi, quos. Animi placeat, molestias omnis laboriosam ipsam doloremque necessitatibus nam exercitationem ea repellat voluptatem, dolorem quae, fuga incidunt! Nesciunt nihil iure accusamus aperiam, ipsam dignissimos voluptatibus molestiae illo perferendis necessitatibus",
};

const name = "Real";

const SinglePage = () => {
  return (
    <>
      <div className="title-wrap">
        <div className="top-title">
          <h3>{post.title}</h3>
        </div>
      </div>
      <div className="single">
        <div className="single-container">
          <div className="details">
            <div className="wrapper">
              <Slider images={post.images} />
              <p>Click on any picture to view in fullscreen</p>
              <div className="info">
                <div className="top">
                  <div className="post">
                    <h3>{post.title}</h3>
                    <div className="address">
                      <img src={location} alt="" />
                      <span>{post.address}</span>
                    </div>
                    <div className="price">
                      ${formatPriceWithCommas(post.price)}
                    </div>
                  </div>
                  <div className="user">
                    <img src={post.user.avatar} alt="" />
                    <span>{post.user.username}</span>
                  </div>
                </div>
                <p className="desc">{post.desc}</p>
                {/* <div
                  className="bottom"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(post.postDetail.desc),
                  }}
                ></div> */}
              </div>
            </div>
          </div>
          <div className="features">
            <div className="wrapper">
              <p className="title">Features</p>
              <div className="sizes">
                <div className="size">
                  <img src={sqfoot} alt="" />
                  <span>4 sqft</span>
                </div>
                <div className="size">
                  <img src={bed} alt="" />
                  <span>2 beds</span>
                </div>
                <div className="size">
                  <img src={bathroom} alt="" />
                  <span>33 bathroom</span>
                </div>
              </div>
              <div className="user">
                <img src={post.user.avatar} alt="" />
                <span>{post.user.username}</span>
              </div>
              <div className="buttons">
                <button>
                  <a href="https://api.whatsapp.com/send?phone=2347065866656">
                    Send Message
                  </a>
                </button>
                <button>Save</button>
              </div>
              {/* <Map items={[52.4797, -1.90269]} /> */}
              <div className="mapContainer">
                <Map items={[52.4797, -1.90269]} />
              </div>
              <p className="title">General guide</p>
              <div className="disclaimer-con">
                <p className="disclaimer-text">
                  {name} is a platform that connects users with real estate
                  properties and professionals. We do not guarantee the
                  accuracy, completeness, or suitability of the information
                  provided in the properties. Users are responsible for
                  verifying the details of the properties and individuals
                  involved. The information above is provided and maintained by{" "}
                  <span
                    style={{ fontWeight: 600, textTransform: "capitalize" }}
                  >
                    Wale
                  </span>
                  . We shall not in any way be held responsible for the actions
                  of any agent and/or property owner/landlord on or off the
                  website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PropSkeleton />
    </>
  );
};

export default SinglePage;
