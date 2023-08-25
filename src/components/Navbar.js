import search from "../icons/searchIcon.svg";
import notification from "../icons/notificationIcon.svg";
import { Link } from "react-router-dom";

const NavigationBar = ({ searchText, setSearchText }) => {
  return (
    <div className="navbar-container">
      <div className="navigation-bar">
        <h1>My Flix</h1>
        <div className="primary-navigation-bar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tvshows">
                TV shows
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/movies">
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/new&popular">
                News & Popular
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/mylist">
                My List
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/browsebylanguage">
                Browse by Languages
              </Link>
            </li>
          </ul>
        </div>
        <div className="secondary-navigation-bar">
          <div className="search-menu-container">
            <button>
              <img src={search} alt="" />
            </button>
            <div>
              <input
                type="text"
                name="searchInput"
                placeholder="Title,Peoples,Genres"
                maxLength="80"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="searchInput"
              />
            </div>
            <div
              className="clear-button"
              onClick={() => setSearchText("")}
            ></div>
          </div>
          <div>
            <h5 className="navigation-child">Children</h5>
          </div>
          <div>
            <button>
              <img src={notification} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
