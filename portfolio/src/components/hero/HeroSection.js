import React from "react";
import "./heroSection.css";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { TfiTwitter } from "react-icons/tfi";
import { SlSocialLinkedin } from "react-icons/sl";
function HeroSection() {
  return (
    <div className="hero" >
      <div className="container d-flex align-items-center justify-content-between">
        <div className="hero-left">
          <div className="sub-heading mb-3">
            <span className="dash"></span>
            <span className="sub">My name is</span>
          </div>
          <h2 className="mb-4">
            Heet <span>Savaliya.</span>
          </h2>
          <p>
            Creative front-end developer with more than +2 years of experience
            in enterprise companies and startups. Proficient in Html, Tailwind
            Css, Javascript and React. Passionate about UI/UX
          </p>
          <div className="social-links mt-4">
            <a href="https://www.instagram.com/ll_heetu_ll/" target="_blank">
              <BsInstagram className="icon me-4" />
            </a>
            <a href="https://github.com/savaliyaheet" target="_blank">
              <BsGithub className="icon me-4" />
            </a>
            <a href="">
              <TfiTwitter className="icon me-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/heet-savaliya-106895210/
"
              target="_blank"
            >
              <SlSocialLinkedin className="icon me-4" />
            </a>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-image">
            <img src={require("../../assets/hero.png")} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
