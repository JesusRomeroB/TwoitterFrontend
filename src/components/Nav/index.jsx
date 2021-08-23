import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <button>
            <Link to="/">Default page</Link>
          </button>
        </li>
        <li>
          <button>
            <Link to="/home">Home</Link>
          </button>
        </li>
        <li>
          <button>
            <Link to="/login">Login</Link>
          </button>
        </li>
        <li>
          <button>
            <Link to="/signup">Sign Up</Link>
          </button>
        </li>
        <li>
          <button>
            <Link to="/profile">Profile</Link>
          </button>
        </li>
        <li>
          <button>
            <Link to="/tweets">Tweets</Link>
          </button>
        </li>
        <li>
          <button>
            <Link to="/trending">Trending</Link>
          </button>
        </li>
        <li>
          <button>
            <Link to="/search">Search</Link>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
