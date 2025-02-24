import "./login.scss";

import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import apiRequest from "../../req";
// import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // const { updateUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    setError("");
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const res = await apiRequest.post("/auth/login", {
        username,
        password,
      });
      setIsLoading(true);

      // updateUser(res.data);
      // console.log("okay login");
      localStorage.setItem("user", JSON.stringify(res?.data?.user));
      localStorage.setItem("token", JSON.stringify(res?.data?.token));
      navigate("/");
      window.location.reload();
    } catch (err) {
      console.log(err);

      setError(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="login">
      <div className="login-container">
        <div className="wrapper">
          <div className="header">
            <h1>Login</h1>
            <p>Enter your email below to login to your account</p>
          </div>
          <form className="forms" onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
              className="input-one"
              placeholder="Enter your username"
              type="text"
              name="username"
              id="username"
              required
              minLength={3}
              maxLength={20}
            />
            {/* <Link to="/">
              <p>Forgot password?</p>
            </Link> */}
            <label htmlFor="password">Password</label>
            <input
              className="input-two"
              placeholder="**********"
              name="password"
              type="password"
              id="password"
              required
            />
            {error && <span className="err">{error}</span>}
            <button disabled={isLoading}>
              {isLoading ? "Logging in.." : "Submit"}
            </button>
          </form>
          {/* <Link to="/">
            <p>Forgot password?</p>
          </Link> */}
          <p className="no-account">
            Don &apos;t have an account?{" "}
            <Link as={NavLink} to="/register">
              Register.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
