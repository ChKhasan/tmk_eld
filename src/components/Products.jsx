import React from "react";
import ProductCards from "./ProductCards";
import TitleComp from "./TitleComp";

const Products = () => {
  return (
    <div>
      <div id="products">
        <TitleComp
          title={"Our Products & Services"}
          id="products"
          text={
            "We provide a wide range of valuable services to fit your delivery needs."
          }
        />
        <div className="container ">
          <div className="row my-3">
            <div
              className="col-lg-4 mt-3 "
              data-aos="fade-right"
              data-aos-duration="1200"
            data-aos-once="true"
             
            >
              <ProductCards
                title="Dispatch Board"
                text="TMK ELD load board will help you find the best loads, maximize dispatchers ’efficiency and at the end of the day increase your company’s profit!"
                img="Images/Frame 44644.png"
              />
            </div>
            <div className="col-lg-4 mt-3"
              data-aos="fade-up"
              data-aos-duration="1200"
            data-aos-once="true"
              >
              <ProductCards
                title="Asset Tracking"
                text="Powered and non-powered assets (vehicles, trailers, equipment, containers, etc) are tracked in real-time with customizable alerts and notifications."
                img="Images/Frame 44644 (1).png"
              />
            </div>
            <div className="col-lg-4 mt-3"    data-aos="fade-left"
              data-aos-duration="1200"
            data-aos-once="true">
              <ProductCards
                title="ELD Compliance"
                text="TMK ELD is an FMCSA registered and certified ELD solution offering truck drivers and companies of any size simple and reliable hours of service logging"
                img="Images/Frame 44644 (2).png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
