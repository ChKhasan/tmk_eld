import React from "react";
import PricingCard from "./PricingCard";
import Tilt from "react-parallax-tilt";

const PricingPlan = () => {
  return (
    <div
      className="container-fluid pricing_plan position-relative d-flex justify-content-center"
      id="pricing"
    >
      <div className="background "></div>
      <div className="container z_index">
        <div className="row py-5">
          <div className="col-12 d-flex flex-column justify-content-center align-items-center">
            <h1 className="mt-5 title">Pricing Plan</h1>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-md-6 col-lg-6 col-xl-4">
              <Tilt className="anime-img">
                <PricingCard />
              </Tilt>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
