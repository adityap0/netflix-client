import { useState, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import "./register.scss";
import { register } from "../../authContext/apiCalls";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const history = useHistory();
  const { dispatch } = useContext(AuthContext);

  const handleFinish = async (e) => {
    e.preventDefault();
    await register({ email, username, password }, dispatch);
    history.push("/login");
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <form className="input">
          <input
            type="text"
            name="email"
            placeholder="email address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="username"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            name="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="registerButton" onClick={handleFinish}>
            Start
          </button>
        </form>
        <span>OR</span>
        <Link to="/login">
          <button className="loginButton">Log In</button>
        </Link>
      </div>
    </div>
  );
}
