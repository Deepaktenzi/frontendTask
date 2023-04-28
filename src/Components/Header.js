import { Link } from 'react-router-dom';
import logo from '../Images/logo.png';
const Header = () => {
  return (
    <>
      <nav className="navbar bg-blue">
        <div className="container banner">
          <div className="navbar-nav flex-row gap-2 text-white">
            <span>
              <i class="fa-regular fa-clock"></i> We Are open 24/7
            </span>
            |
            <span>
              <i class="fa-regular fa-comment-dots"></i> mail@gmail.com
            </span>
          </div>
          <ul className="navbar-nav flex-row gap-3">
            <li className="nav-item">
              <Link class="nav-link" to="#">
                <i class="fab fa-facebook-f text-white"></i>
              </Link>
            </li>

            <li className="nav-item">
              <Link class="nav-link" to="#">
                <i class="fab fa-instagram text-white"></i>
              </Link>
            </li>

            <li className="nav-item">
              <Link class="nav-link" to="#">
                <i class="fab fa-linkedin text-white"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link class="nav-link" to="#">
                <i class="fab fa-twitter text-white"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          <Link to="#" className="navbar-brand">
            <img src={logo} alt="Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end "
            id="navbarNav"
          >
            <ul className="navbar-nav menu-navbar-nav">
              <li className="nav-item ">
                <Link className="nav-link active-nav" to="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
