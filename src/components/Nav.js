import LoginButton from "./LoginButton";
import { Link } from "react-router-dom";

const Nav = ({ user, setUser }) => {
  // this return takes some state from App.js and passes user status to display
  // the correct Login/Logout button
  return (
    <nav>
      <ul>
        <li>
          <LoginButton user={user} setUser={setUser} />
        </li>
        <li>
          <Link to="/publish/">
            <button className="publish-button">Publish</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
