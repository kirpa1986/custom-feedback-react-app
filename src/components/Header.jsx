// _rfce
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AboutLink from "./AboutLink";

function Header({ text, bgColor, color, home, about, feedbackLength }) {
  return (
    <div>
      <header style={{ background: bgColor, color: color }}>
        <div className="container">
          <div className="header-box">
            {home && (
              <Link 
              className='home-link' 
              // to="/"

              // Using object in Link.to
              to={{
                pathname: `/`,
                search: '?sort=name',
                hash: '#hello'
              }}
              >
                {/* Navlink can be used to specify  */}
                <i class="fa-sharp fa-solid fa-house"></i>
              </Link>
            )}
            <h2>{text}</h2>
            {about && <AboutLink />}
          </div>
        </div>
      </header>
    </div>
  );
}

Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0,0,0,0.4)",
  color: "#ff6a95",
  home: false,
  about: false,
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
  home: PropTypes.bool,
};

export default Header;
