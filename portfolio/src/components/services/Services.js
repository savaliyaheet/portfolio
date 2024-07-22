import React from "react";
import ServiceCard from "../../sub-components/service-card/ServiceCard";
import "./services.css";
import { BiCrown, BiGlobe } from "react-icons/bi";
import { IoIosApps } from "react-icons/io";

function Services() {
  return (
    <div className="services" id="services" style={{ padding: "100px 0" }}>
      <div className="container">
        <div className=" w-auto d-flex flex-column align-items-center mx-auto">
          <div className="sub-heading mb-2">
            <span className="dash"></span>
            <span className="sub">services</span>
          </div>
          <h2 className="mb-4">Specialized in</h2>
        </div>
        <div className="service-cards d-flex align-items-center gap-5 mt-3">
          <ServiceCard
            Icon={<BiCrown />}
            title="UI/UX Design"
            description="Turn what you have in mind of a digital product into reality. For any
        platform you consider."
          />
          <ServiceCard
            Icon={<IoIosApps />}
            title="Application Development"
            description="Standard designing, building, and implementing your applications with documentation.
"
          />
          <ServiceCard
            Icon={<BiGlobe />}
            title="Web Development"
            description="Create and maintain your websites and also take care of its performance and traffic capacity."
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
