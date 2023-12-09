import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import request_API from "../../api/customFetchAPI";
import "./SignIn.scss";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loginUser, setLoginUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (loginUser) {
      const findUser = async () => {
        const data = await request_API.auth.signin(loginUser);
        console.log("signin data: ", data);
        if (!data.success) {
          setError(data.error);
          return;
        }
        setTimeout(() => {
          navigate("/");
        }, 2000);
      };
      findUser();
    }
  }, [loginUser, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
    const user = { email, password };
    setLoginUser(user);
  };
  return (
    <div className="signIn">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ea
            ipsam sed debitis excepturi iste. voluptatibus porro! Libero, ut
            earum. Illo, quos ut.
          </p>
          <p>Do you have an account ?</p>
          <Link to="/signup">Register</Link>
        </div>
        <div className="right">
          {error && <p className="error">{error.message}</p>}
          <h1>SignIn</h1>
          <form
            action=""
            method="post"
            className="loginForm"
            onSubmit={submitHandler}
          >
            <div className="inputItems">
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
            </div>
            <div className="inputItems">
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                required
              />
            </div>
            <div className="btn">
              <button type="submit">SignIn</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
