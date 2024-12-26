import "./newProperty.scss";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import apiRequest from "../../lib/apiRequest";
import UploadWidget from "../../components/uploadWidget/UploadWidget";
import { useNavigate } from "react-router-dom";

function NewProperty() {
  const [value, setValue] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   const inputs = Object.fromEntries(formData);

  //   try {
  //     const res = await apiRequest.post("/posts", {
  //       postData: {
  //         title: inputs.title,
  //         price: parseInt(inputs.price),
  //         address: inputs.address,
  //         city: inputs.city,
  //         bedroom: parseInt(inputs.bedroom),
  //         bathroom: parseInt(inputs.bathroom),
  //         type: inputs.type,
  //         property: inputs.property,
  //         latitude: inputs.latitude,
  //         longitude: inputs.longitude,
  //         images: images,
  //       },
  //       postDetail: {
  //         desc: value,
  //         utilities: inputs.utilities,
  //         pet: inputs.pet,
  //         income: inputs.income,
  //         size: parseInt(inputs.size),
  //         school: parseInt(inputs.school),
  //         bus: parseInt(inputs.bus),
  //         restaurant: parseInt(inputs.restaurant),
  //       },
  //     });
  //     navigate("/"+res.data.id)
  //   } catch (err) {
  //     console.log(err);
  //     setError(error);
  //   }
  // };

  return (
    <div className="newPostPage">
      <div className="formContainer">
        <h1>Add New Post</h1>
        <div className="wrapper">
          <form onSubmit={() => {}}>
            <div className="item-con">
              <div className="item">
                <label htmlFor="title">Title</label>
                <input
                  placeholder="Title"
                  id="title"
                  name="title"
                  type="text"
                />
              </div>
              <div className="item">
                <label htmlFor="price">Price</label>
                <input
                  placeholder="Price"
                  id="price"
                  name="price"
                  type="number"
                />
              </div>
              <div className="item">
                <label htmlFor="address">Address</label>
                <input
                  placeholder="address"
                  id="address"
                  name="address"
                  type="text"
                />
              </div>
            </div>
            <div className="item-desc description">
              <label htmlFor="desc">Description</label>
              <ReactQuill theme="snow" onChange={setValue} value={value} />
            </div>
            <div className="item-con">
              <div className="item">
                <label htmlFor="city">City</label>
                <input placeholder="City" id="city" name="city" type="text" />
              </div>
              <div className="item">
                <label htmlFor="bedroom">Bedroom</label>
                <input
                  placeholder="No of bedroom"
                  min={1}
                  id="bedroom"
                  name="bedroom"
                  type="number"
                />
              </div>
              <div className="item">
                <label htmlFor="bathroom">Bathroom</label>
                <input
                  placeholder="No of bathroom"
                  min={1}
                  id="bathroom"
                  name="bathroom"
                  type="number"
                />
              </div>
            </div>
            <div className="item-con">
              <div className="item">
                <label htmlFor="latitude">Lat</label>
                <input
                  placeholder="Latitude"
                  id="latitude"
                  name="latitude"
                  type="text"
                />
              </div>
              <div className="item">
                <label htmlFor="longitude">Long</label>
                <input
                  placeholder="Longitude"
                  id="longitude"
                  name="longitude"
                  type="text"
                />
              </div>
              <div className="item">
                <label htmlFor="type">Type</label>
                <select name="type">
                  <option value="rent" defaultChecked>
                    Rent
                  </option>
                  <option value="buy">Buy</option>
                </select>
              </div>
            </div>
            <div className="item-con">
              <div className="item">
                <label htmlFor="type">Property</label>
                <select name="property">
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="condo">Condo</option>
                  <option value="land">Land</option>
                </select>
              </div>

              <div className="item">
                <label htmlFor="utilities">Utilities Policy</label>
                <select name="utilities">
                  <option value="owner">Owner is responsible</option>
                  <option value="tenant">Tenant is responsible</option>
                  <option value="shared">Shared</option>
                </select>
              </div>
              <div className="item">
                <label htmlFor="pet">Pet Policy</label>
                <select name="pet">
                  <option value="allowed">Allowed</option>
                  <option value="not-allowed">Not Allowed</option>
                </select>
              </div>
            </div>
            <div className="item-con">
              <div className="item">
                <label htmlFor="income">Income Pol.</label>
                <input
                  id="income"
                  name="income"
                  type="text"
                  placeholder="Income Policy"
                />
              </div>
              <div className="item">
                <label htmlFor="size">Size (sqft)</label>
                <input
                  placeholder="Size"
                  min={0}
                  id="size"
                  name="size"
                  type="number"
                />
              </div>
              <div className="item">
                <label htmlFor="school">School</label>
                <input
                  placeholder="School"
                  min={0}
                  id="school"
                  name="school"
                  type="number"
                />
              </div>
            </div>
            <div className="imagesContainer">
              <h1>Property Images</h1>
              <div className="image-con">
                <div className="img">
                  <img src="/bg.jpg" alt="" />
                </div>
                <div className="img">
                  <img src="/bg.jpg" alt="" />
                </div>
                <div className="img">
                  <img src="/bg.jpg" alt="" />
                </div>
                <div className="img">
                  <img src="/bg.jpg" alt="" />
                </div>
              </div>

              {/* {images.map((image, index) => (
          <img src={image} key={index} alt="" />
        ))} */}
              {/* <UploadWidget
          uwConfig={{
            multiple: true,
            cloudName: "lamadev",
            uploadPreset: "estate",
            folder: "posts",
          }}
          setState={setImages}
        /> */}
            </div>
            {/* <div className="item-con">
              <div className="item">
                <label htmlFor="bus">Bus</label>
                <input
                  placeholder="bus"
                  min={0}
                  id="bus"
                  name="bus"
                  type="number"
                />
              </div>
              <div className="item">
                <label htmlFor="restaurant">Restaurant</label>
                <input
                  placeholder="restaurant"
                  min={0}
                  id="restaurant"
                  name="restaurant"
                  type="number"
                />
              </div>
              <div className="item"></div>
            </div> */}
            {/* {error && <span>error</span>} */}
          </form>
          <button className="sendButton">Add Property</button>
        </div>
      </div>
      <div className="sideContainer">
        <h1>Property Images</h1>
        <div className="image-con">
          <div className="img">
            <img src="/bg.jpg" alt="" />
          </div>
          <div className="img">
            <img src="/bg.jpg" alt="" />
          </div>
          <div className="img">
            <img src="/bg.jpg" alt="" />
          </div>
          <div className="img">
            <img src="/bg.jpg" alt="" />
          </div>
        </div>

        {/* {images.map((image, index) => (
          <img src={image} key={index} alt="" />
        ))} */}
        {/* <UploadWidget
          uwConfig={{
            multiple: true,
            cloudName: "lamadev",
            uploadPreset: "estate",
            folder: "posts",
          }}
          setState={setImages}
        /> */}
      </div>
    </div>
  );
}

export default NewProperty;
