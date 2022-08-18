import React from "react";
import ContactTitle from "./ContactTitle";
import Form from "./Form";
import AnyReactComponent from "./AnyReactComponent"

const Contact = () => {
  return (
    <div className="container my-5" id="about">
      <div className="row d-flex justify-content-between">
        <div className="col-lg-5"   data-aos="fade-right"
              data-aos-duration="1200"
            data-aos-once="true">
          <ContactTitle title="Get in Touch" text="We appreciate each company and we are proud that 60% of clients come back to work with us again."/>
          <div className="for_contact">
            <img src="Images/Vector (0).png" alt="" />
            <strong>+998 (91) 410-22-20</strong>
          </div>
          <div className="for_contact">
            <img src="Images/Vector (1).png" alt="" />

            <strong>example@example.com</strong>
          </div>
          <div className="br"></div>
          <div className="map_title">
            <h6 className="mt-4">Find Us on Map</h6>
            <p className="mt-3">Georgia 12473 United States</p>
          </div>
          <div className="map">
            
           <img className="w-100" src="Images/Mask.png" alt="" />
          </div>
        </div>
        <div className="col-lg-5"   data-aos="fade-left"
              data-aos-duration="1200"
            data-aos-once="true">
          <ContactTitle title="You Can Mail Us" text="We are always looking for a next great project."/>
          <Form />

        </div>
      </div>
    </div>
  );
};

export default Contact;
