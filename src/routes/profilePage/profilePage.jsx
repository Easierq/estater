import "./profilePage.scss";

import { Link, NavLink, useNavigate } from "react-router-dom";
import List from "../../components/list/List";
import { useEffect, useState } from "react";
// import apiRequest from "../../lib/apiRequest";
// import { Await, Link, useLoaderData, useNavigate } from "react-router-dom";
// import { Suspense, useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";

function ProfilePage() {
  const [userData, setUserData] = useState(null);

  // const data = useLoaderData();

  const navigate = useNavigate();

  // const handleLogout = async () => {
  //   try {
  //     await apiRequest.post("/auth/logout");
  //     updateUser(null);
  //     navigate("/");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) setUserData(JSON.parse(user));
  }, []);

  const handleLogout = async () => {
    localStorage.removeItem("user");

    navigate("/");
    window.location.reload();
  };

  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <h1 className="h1">Profile page</h1>
          {/* <div className="title">
            <h1>User Information</h1>
          </div> */}
          <div className="info">
            <div className="info-flex">
              <img
                className="up-img"
                src={userData?.avatar || "/nouser.jpg"}
                alt=""
              />
              <div className="name_email">
                <p className="t">Username</p>
                <p className="b">{userData?.username}</p>
                <p className="t">Email</p>
                <p className="b">{userData?.email}</p>
              </div>
            </div>
            <div className="update-buttons">
              <button onClick={handleLogout}>Logout</button>
              <Link as={NavLink} to="/update-profile">
                <button className="up-btn">Update Profile</button>
              </Link>
            </div>
          </div>
          {/* <div className="mylist">
            <h1>My List</h1>
          </div> */}
          {/* <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) => <List posts={postResponse.data.userPosts} />}
            </Await>
          </Suspense> */}
          {/* <List /> */}
          {/* <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) => <List posts={postResponse.data.savedPosts} />}
            </Await>
          </Suspense> */}
          {/* <List /> */}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
