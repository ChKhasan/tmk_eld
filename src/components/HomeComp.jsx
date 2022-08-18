import React from "react";

const HomeComp = () => {
  return (
    <div className="container home_comp position-relative my-5"   id="home">
      <div className="row" style={{marginTop: "100px"}}>
        <div className="col-xl-6 h100vh home_comp_resp r"   data-aos="fade-right"
              data-aos-duration="1200"
            data-aos-once="true">
          <h1>Smart Fleet </h1>
          <h1 >Managament Solutions</h1>
          <p className="mt-4">The easiest way to use ELD device and </p>
          <p>applications</p>
          <div>

          <button className="mt-3">Get Started</button>
          </div>
        </div>
        <div className="col-6 d-none d-xl-flex justify-content-center align-items-center"   data-aos="fade-left"
              data-aos-duration="1200"
            data-aos-once="true">
            <img className="back_img" src="Images/Group 42765.png" alt="" />
            <img className="comps_img" src="Images/Frame 44465.png" alt="" />
        </div>
        
      </div>
    </div>
  );
};

export default HomeComp;
