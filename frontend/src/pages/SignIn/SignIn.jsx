import { Link } from "react-router-dom";
import "./SignIn.scss";

export default function SignIn() {
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
          <h1>SignIn</h1>
          <form action="" method="post" className="loginForm">
            <div className="inputItems">
              <input
                type="text"
                name=""
                id=""
                placeholder="Username"
                required
              />
            </div>
            <div className="inputItems">
              <input
                type="password"
                name=""
                id=""
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
