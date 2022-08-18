import React from "react";

const PricingCard = () => {
  return (
    <div className="pricing_card position-relative"   data-aos="fade-up"
    data-aos-duration="1200"
  data-aos-once="true">
        <div className="pricing_card_abs"></div>
      <h6>PRO</h6>
      <p>Price per month, billed annually</p>
      <h1>$100</h1>
      <ul>
        <li>
          <img src="Images/Vector.png" alt="" />
          Daily Driver logs
        </li>
        <li>
          <img src="Images/Vector.png" alt="" />
          GPS tracking
        </li>
        <li>
          <img src="Images/Vector.png" alt="" />
          IFTA Reporting
        </li>
        <li>
          <img src="Images/Vector.png" alt="" />
          DVIR feature
        </li>
        <li>
          <img src="Images/Vector.png" alt="" />
          HOS Violation alerts
        </li>
        <li>
          <img src="Images/Vector.png" alt="" />
          HOS Violation alerts
        </li>
        <li>
          <img src="Images/Vector.png" alt="" />
          Geo-Fencing
        </li>
      </ul>
      <button>Get Started</button>
    </div>
  );
};

export default PricingCard;
