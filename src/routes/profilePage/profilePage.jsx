import { Link, NavLink } from "react-router-dom";
import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import "./profilePage.scss";
// import apiRequest from "../../lib/apiRequest";
// import { Await, Link, useLoaderData, useNavigate } from "react-router-dom";
// import { Suspense, useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";

function ProfilePage() {
  // const data = useLoaderData();

  // const { updateUser, currentUser } = useContext(AuthContext);

  // const navigate = useNavigate();

  // const handleLogout = async () => {
  //   try {
  //     await apiRequest.post("/auth/logout");
  //     updateUser(null);
  //     navigate("/");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
          </div>
          <div className="info">
            <div className="info-flex">
              <img className="up-img" src="/nouser.jpg" alt="" />
              <div className="name_email">
                <span>
                  Username: <b>Isiaq</b>
                </span>
                <span>
                  Email: <b>Isiaq@gmail.com</b>
                </span>
              </div>
            </div>
            <div className="update-buttons">
              <button>Logout</button>
              <Link as={NavLink} to="/update-profile">
                <button className="up-btn">Update Profile</button>
              </Link>
            </div>
          </div>
          <div className="mylist">
            <h1>My List</h1>
          </div>
          {/* <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) => <List posts={postResponse.data.userPosts} />}
            </Await>
          </Suspense> */}
          <List />
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
