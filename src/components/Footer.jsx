import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-3 mt-4">
            <img style={{marginRight: "8px"}} src="Images/Group 42765 (1).png" alt="" />
            <img src="Images/Frame 44370 (1).png" alt="" />
          </div>
          <div className="col-lg-7 d-flex flex-wrap  mt-4 locations  justify-content-between">
            <div className="col-12 col-md-4">
              <img src="Images/Vector (0).png" alt="" />
              <strong>+998 (91) 410-22-20</strong>
            </div>
            <div className="col-12 col-md-4">
              <img src="Images/Vector (1).png" alt="" />
              <strong>example@example.com</strong>
            </div>
            <div className="col-12 col-md-4">
              <img src="Images/Vector (2).png" alt="" />
              <strong>Uzbekistan, Tashkent </strong>
            </div>
          </div>
          <div className="col-lg-2 mt-4 messenges d-flex justify-content-between">
            <div>
              <img src="Images/u_youtube.png" alt="" />
            </div>
            <div>

            <img src="Images/u_instagram-alt.png" alt="" />
            </div>
            <div>

            <img src="Images/u_telegram.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
