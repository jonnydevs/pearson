import mobile from "/src/assets/mobile.png";
import logo from "/src/assets/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} alt="" className="logo-icon" />
          <h1>Pearson</h1>
        </div>
        <div className="nav-items">
          <a href="/">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#shop">Shop</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <div className="banner">
        <div className="text">
          <h2>IT Services Company</h2>
          <h1>
            Pearson <span>Solutions</span>
          </h1>
          <p>
            Pearson is your one stop service provider that provides all IT
            related services. Shop with us today and have your order delivered
            to you asap.
          </p>
          <div className="btns">
            <a href="#about" className="primary-btn">
              Get Started
            </a>
          </div>
        </div>
        <img src={mobile} alt="" />
      </div>
    </header>
  );
};

export default Header;
