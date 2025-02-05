import "./profileUpdatePage.scss";

import React from "react";
import { useState, useEffect } from "react";
import apiRequest from "../../req";
import { useNavigate } from "react-router-dom";
import UploadWidget from "../../components/uploadWidget/UploadWidget";
// import { Link } from "react-router-dom";

const ProfileUpdatePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [token, setToken] = useState("");

  const [avatar, setAvatar] = useState([]);
  const [userData, setUserData] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) setUserData(JSON.parse(user));
  }, []);
  useEffect(() => {
    const tok = localStorage.getItem("token");
    if (tok) setToken(JSON.parse(tok));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target);

    const { username, email, password } = Object.fromEntries(formData);

    try {
      const res = await apiRequest.put(
        `/users/${userData.id}`,
        {
          username,
          email,
          password,
          avatar: avatar[0],
        },
        {
          headers: {
            "Content-Type": "application/json",
            token: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data.user);
      localStorage.setItem("user", JSON.stringify(res?.data));
      setIsLoading(false);
      navigate("/profile");
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    }
  };
  return (
    <div className="pu-page">
      <div className="pu-container">
        <div className="wrapper">
          <div className="header">
            <h1>Update Profile</h1>
            <p>Make changes to your profile.</p>
          </div>
          <div className="img-con">
            <img src={avatar[0] || userData?.avatar || "/nouser.jpg"} alt="" />
            {/* <button>Change</button> */}
            <UploadWidget
              uwConfig={{
                cloudName: "isiaqofficial",
                uploadPreset: "newestate",
                multiple: false,
                maxImageFileSize: 2000000,
                folder: "avatars",
              }}
              setState={setAvatar}
            />
          </div>
          <form onSubmit={handleSubmit} className="forms">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              className="input-one"
              placeholder="Enter your email"
              type="text"
              defaultValue={userData?.username}
            />
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              className="input-one"
              placeholder="Enter your email"
              type="text"
              defaultValue={userData?.email}
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              className="input-two"
              placeholder="**********"
              type="password"
            />
            <button disabled={isLoading}>
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdatePage;
