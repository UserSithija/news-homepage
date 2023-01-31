import React from "react";
import Header from "../Header/Header";

import "../Hero/Hero.css";
import heroDesktop from "../../assets/images/image-web-3-desktop.jpg";
import heroMobile from "../../assets/images/image-web-3-mobile.jpg";
import Button from "react-bootstrap/Button";
import Sidebardata from "./Sidebardata";
const Hero = () => {
  const sidebardata = Sidebardata.map((item) => {
    return (
      <div className="hero-side-contaner">
        <h5 className="sidebar-header">{item.title}</h5>
        <p className="sidebar-p">{item.content} </p>
      </div>
    );
  });

  return (
    <div>
      <Header />
      <div className="hero">
        <div className="hero-left">
          <img
            className=" d-md-none img-fluid w-100"
            src={heroMobile}
            alt="hero-img"
            srcset=""
          />
          <img
            className="d-none d-md-block w-100 d-lg-block d-xl-block"
            src={heroDesktop}
            alt="hero-img"
          />
          <section className="hero-main">
            <div className="left-main">
              <h1 className="hero-heading">The Bright Future of Web 3.0</h1>
            </div>
            <div className="right-main">
              <p>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <Button variant="light">READ MORE</Button>
            </div>
          </section>
        </div>

        <div className="hero-right">
          <section className="hero-sidebar">
            <h2 className="side-header-main">New</h2>
            {
              //  sidevbat data
            }
            {sidebardata}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Hero;
