import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import request_API from "../../api/customFetchAPI";
import "./SignUp.scss";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [newUser, setNewUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    //set loading
    if (newUser) {
      console.log(newUser);
      const registerUser = async () => {
        const userData = await request_API.auth.register(newUser);
        console.log("new user created", userData);
        if (userData.success) navigate("/signin");
      };
      registerUser();
      //remove loading
    }
  }, [newUser]);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(username, email, password, confirmPassword);
    setNewUser({ username, email, password });
  };
  return (
    <div className="signUp">
      <div className="card">
        <div className="left">
          <h1>SignUp</h1>
          <form onSubmit={submitHandler} className="loginForm">
            <div className="inputItems">
              <input
                type="text"
                placeholder="Username"
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="inputItems">
              <input
                type="email"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="inputItems">
              <input
                type="password"
                placeholder="Password or min Length 6"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="inputItems">
              <input
                type="password"
                placeholder="Confirm Password or min Length 6"
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="btn">
              <button type="submit">SignUp</button>
            </div>
          </form>
        </div>
        <div className="right">
          <h1>Social Hub.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ea
            ipsam sed debitis excepturi iste. voluptatibus porro! Libero, ut
            earum. Illo, quos ut.
          </p>
          <p>Do you have an account ?</p>
          <Link to="/signin">SignIn</Link>
        </div>
      </div>
    </div>
  );
}
