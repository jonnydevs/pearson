import About from "./components/about/About";
import Header from "./components/headerFiles/Header";
import Services from "./components/services/Services";
import Shop from "./components/shop/Shop";
import ReviewComponent from "./components/reviews/ReviewComponent";
import Contact from "./components/contact/Contact";
import FooterComponent from "./components/footer/FooterComponent";

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Services />
      <Shop />
      <ReviewComponent />
      <Contact />
      <FooterComponent />
    </div>
  );
};

export default Home;
