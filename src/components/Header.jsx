import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/pokedex">
        <figure className="header_box_img">
          <img src="../../assets/logo.png" alt="Logo" />
        </figure>
      </Link>    
      
      <div className="header_footer">
        <div className="header_circle_one">
          <div className="header_circle_two">
            <div className="header_circle_three"></div>
          </div>
        </div>
      </div>
      
    </header>
  );
};

export default Header;
