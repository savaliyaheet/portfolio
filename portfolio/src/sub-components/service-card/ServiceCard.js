import React from "react";
import "./serviceCard.css";
import { BiCrown } from "react-icons/bi";

function ServiceCard({ Icon, title, description }) {
  return (
    <div className="service-card">
      <div className="icon-wrapper mt-2">{Icon}</div>
      <h5 className="mt-3">{title}</h5>
      <p className="text-center mt-2">{description}</p>
    </div>
  );
}

export default ServiceCard;
