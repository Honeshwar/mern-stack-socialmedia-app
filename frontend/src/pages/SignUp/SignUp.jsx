import { Link } from "react-router-dom";
import "./SignUp.scss";

export default function SignUp() {
  return (
    <div className="signUp">
      <div className="card">
        <div className="left">
          <h1>SignUp</h1>
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
              <input type="email" name="" id="" placeholder="Email" required />
            </div>
            <div className="inputItems">
              <input
                type="password"
                name=""
                id=""
                placeholder="Password"
                required
              />
            </div>
            <div className="inputItems">
              <input
                type="password"
                name=""
                id=""
                placeholder="Confirm Password"
                required
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
