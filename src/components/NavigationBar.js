 import netflix from "../logo/netflixlogo.svg";
import search from "../icons/searchIcon.svg";
import notification from "../icons/notificationIcon.svg";
import AccountMenu from "./AccountMenu";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";



const NavigationBar = ({ searchText, setSearchText }) => {
    const navigate = useNavigate()
    useEffect(() => {
        if (searchText.length >= 1) {
            navigate("/search")
        } else {
            navigate("/home")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchText])
    const clearButton = (e) => {
        const value = "";
        setSearchText(value);
    }
    const updateSearchText = (e) => {
        setSearchText(e.target.value)
    }
    return (
        <div className="navbar-container">
            <div className="navigation-bar">
                <img src={netflix} alt="Netflix-Home" />
                {/* <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="primary-navigation-bar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/home" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/tvshows">TV shows</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/movies">Movies</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/new&popular">News & Popular</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/mylist">My List</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/browsebylanguage">Browse by Languages</Link>
                        </li>
                    </ul>
                </div>
                <div className='secondary-navigation-bar'>
                    <div className='search-menu-container'>
                        <button >
                            <img src={search} alt="" />
                        </button>
                        <div>
                            <input type="text"
                                name="searchInput"
                                placeholder="Title,Peoples,Genres"
                                maxLength="80"
                                value={searchText}
                                onChange={updateSearchText}
                                className="searchInput"
                            />
                        </div>
                        <div className='clear-button' onClick={clearButton}></div>
                    </div>
                    <div>
                        <h5 className="navigation-child">Children</h5>
                    </div>
                    <div>
                        <button>
                            <img src={notification} alt="" />
                        </button>
                    </div>
                    <div>
                        <AccountMenu />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavigationBar;