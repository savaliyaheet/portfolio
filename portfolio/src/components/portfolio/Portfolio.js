import React, { useState } from "react";
import "./portfolio.css";
import Carousel from "react-bootstrap/Carousel";
import PortfolioCard from "../../sub-components/portfolio-card/PortfolioCard";

function Portfolio() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="portfolio" id="portfolio">
      <div className="container">
        <div className="sub-heading mb-2">
          <span className="dash"></span>
          <span className="sub">my works</span>
        </div>
        <h2 className="mb-4">Featured Portfolios</h2>
        <Carousel variant="dark" interval={null}>
          <Carousel.Item>
            <div className="d-flex justify-content-between">
              <PortfolioCard
                image={require("../../assets/item1.jpg")}
                title="Dashboard Website."
                framework="WordPress"
              />
              <PortfolioCard
                image={require("../../assets/item2.jpg")}
                title="Lamp Elevation."
                framework="PicsArt"
              />
              <PortfolioCard
                image={require("../../assets/item3.jpg")}
                title="Travel Diares."
                framework="Visa"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-between">
              <PortfolioCard
                image={require("../../assets/item4.jpg")}
                title="Agency Website."
                framework="React"
              />
              <PortfolioCard
                image={require("../../assets/item5.jpg")}
                title="Agency Website."
                framework="React"
              />
              <PortfolioCard
                image={require("../../assets/item6.jpg")}
                title="Agency Website."
                framework="React"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-between">
              <PortfolioCard
                image={require("../../assets/item4.jpg")}
                title="Agency Website."
                framework="React"
              />
              <PortfolioCard
                image={require("../../assets/item5.jpg")}
                title="Agency Website."
                framework="React"
              />
              <PortfolioCard
                image={require("../../assets/item6.jpg")}
                title="Agency Website."
                framework="React"
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Portfolio;
