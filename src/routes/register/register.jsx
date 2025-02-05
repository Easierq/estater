import "./register.scss";
import { useState } from "react";

import { Link, NavLink, useNavigate } from "react-router-dom";
import apiRequest from "../../req";

const Register = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      setIsLoading(true);

      await apiRequest.post("/auth/register", {
        username,
        email,
        password,
      });
      console.log("okayyy");
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <form onSubmit={handleSubmit} className="wrapper">
          <div className="header">
            <h1>Register</h1>
            <p>Enter your details to register</p>
          </div>
          <div className="forms">
            <label htmlFor="username">Username</label>
            <input
              className="input-one"
              placeholder="Enter your preferred username"
              type="text"
              name="username"
              id="username"
            />
            <label htmlFor="email">Email</label>
            <input
              className="input-one"
              placeholder="Enter your email"
              type="text"
              name="email"
              id="email"
            />
            <label htmlFor="password">Password</label>
            <input
              className="input-two"
              placeholder="**********"
              type="password"
              name="password"
              id="password"
            />
          </div>
          {error && <span className="err">{error}</span>}
          <button disable={isLoading}>
            {isLoading ? "Loading.." : "Submit"}
          </button>
          <p className="no-account">
            Already registered?{" "}
            <Link as={NavLink} to="/login">
              Login.
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
