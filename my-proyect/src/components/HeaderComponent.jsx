import { Link } from "react-router-dom";
import "./HeaderComponent.css";

function HeaderComponent() {
  return (
    <header className="header">
      <h1 className="title">
        <i className="fas fa-globe" style={{ color: "#ffd700", marginRight: "10px" }}></i>
        Welcome
      </h1>
      <nav>
        <ul className="link-list">
          <li>
            <Link className="link" to="/">
              <i className="fas fa-home"></i> Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/blog">
              <i className="fas fa-blog"></i> Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderComponent;
