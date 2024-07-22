import React from "react";
import "./portfolioCard.css";
import { FiLink2 } from "react-icons/fi";

function PortfolioCard({ image, title, framework }) {
  return (
    <div className="portfolio-card">
      <img className="d-block w-100" src={image} alt="First slide" />
      {title && (
        <div className="card-content">
          <p className="mb-2">{title}</p>
          <span className="framework">{framework}</span>
          <span className="projectLink">
            <FiLink2 />
          </span>
        </div>
      )}
    </div>
  );
}

export default PortfolioCard;
