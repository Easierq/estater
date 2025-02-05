import "./singleData.scss";
import Slider from "../../components/slider/Slider";
import { formatPriceWithCommas } from "../../utils/helpers";
import Map from "../../components/map/Map";
// import DOMPurify from "dompurify";
import bathroom from "../../icons/bathroom.svg";
import bed from "../../icons/bed.svg";
import sqfoot from "../../icons/sqfoot.svg";
import location from "../../icons/locationfill.svg";

export const SingleData = ({ post }) => {
  return (
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
                  $ {formatPriceWithCommas(post.price)}
                </div>
              </div>
              <div className="user">
                <img src={post.user.avatar} alt="" />
                <span>{post.user.username}</span>
              </div>
            </div>
            <p className="desc">{post.desc}</p>
            {/* <p className="title">General guide</p>
                    <div className="disclaimer-con">
                      <p className="disclaimer-text">
                        {name} is a platform that connects users with real
                        estate properties and professionals. We do not guarantee
                        the accuracy, completeness, or suitability of the
                        information provided in the properties. Users are
                        responsible for verifying the details of the properties
                        and individuals involved. The information above is
                        provided and maintained by{" "}
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
                    </div> */}
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">Features</p>
          <div className="sizes">
            <div className="size">
              <img src={sqfoot} alt="" />
              <span>{post.postDetail.size} sqft</span>
            </div>
            <div className="size">
              <img src={bed} alt="" />
              <span>{post.bedroom} bedrooms</span>
            </div>
            <div className="size">
              <img src={bathroom} alt="" />
              <span>{post.bathroom} bathroom</span>
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
          <div className="mapContainer">
            <Map items={[post]} />
          </div>
          <p className="title">General guide</p>
          <div className="disclaimer-con">
            <p className="disclaimer-text">
              {name} is a platform that connects users with real estate
              properties and professionals. We do not guarantee the accuracy,
              completeness, or suitability of the information provided in the
              properties. Users are responsible for verifying the details of the
              properties and individuals involved. The information above is
              provided and maintained by{" "}
              <span style={{ fontWeight: 600, textTransform: "capitalize" }}>
                Wale
              </span>
              . We shall not in any way be held responsible for the actions of
              any agent and/or property owner/landlord on or off the website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
