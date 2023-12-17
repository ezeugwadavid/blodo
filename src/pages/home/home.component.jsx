import React from "react";
import { HomeContainer } from "./home.styles";
import Hero from "../../components/hero/hero.component";
import Services from "../../components/services/services.component";
import Connect from "../../components/connect/connect.component";
import Enterprise from "../../components/enterprise/enterprise.component";
import ConnectCustomer from "../../components/connect-customer/connect-customer.component";
import Blog from "../../components/blog/blog.component";
import Contact from "../../components/contact/contact.component";
import Footer from "../../components/footer/footer.component";

const Home = () => {
  return (
    <HomeContainer>
      <div className="hero-comp">
        <Hero />
      </div>

      <div className="service-comp">
        <Services />
      </div>

      <div className="connect-comp">
        <Connect />
      </div>

      <div className="enterprise-comp">
        <Enterprise />
      </div>

      <div className="connect-cus-comp">
        <ConnectCustomer />
      </div>

      <div className="blog-comp">
        <Blog />
      </div>

      <div className="contact-comp">
        <Contact />
      </div>

      <div className="footer-comp">
        <Footer />
      </div>
    </HomeContainer>
  );
};

export default Home;
