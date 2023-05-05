import mobile from "/src/assets/mobile.png";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <h1>{"<Pearson />"}</h1>
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
            Pearson <span>Computer</span> Solutions
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus culpa numquam similique at molestias placeat assumenda
            sed atque earum illo.
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