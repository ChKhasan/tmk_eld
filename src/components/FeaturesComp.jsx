import React from "react";
import TitleComp from "./TitleComp";
import Tilt from "react-parallax-tilt";
import Title from "react-parallax-tilt";

const FeaturesComp = ({ bool, title, text, img }) => {
  return (
    <div id="features">
      <TitleComp
        title={"Our  Features"}
        id="features"
        text={
          "These very extraordinary features can make trucking more efficient"
        }
      />
      <div className="container features_comp" id="features">
        {bool ? (
          <div className="row" style={{ marginTop: "100px" }}>
            <div
              className="col-lg-7"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <Title>
                <img className="w-100" src={img} alt="" />
              </Title>
            </div>
            <div
              className="col-lg-5 d-flex features_comp_in flex-column "
              data-aos="fade-left"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="features_comp_in">
                <h6>{title}</h6>
                <p>{text}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="row" style={{ marginTop: "100px" }}>
            <div
              className="col-lg-5 d-flex flex-column features_comp_in"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="features_comp_in">
                <h6>{title}</h6>
                <p>{text}</p>
              </div>
            </div>
            <div
              className="col-lg-7"
              data-aos="fade-left"
              data-aos-duration="1200"
              data-aos-once="true"
            >
               <Title>
                <img className="w-100" src={img} alt="" />
              </Title>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturesComp;
