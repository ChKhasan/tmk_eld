import React from "react";

const Header = () => {
  return (
    <div className="container">
      <div className="row header">
        <div className="col-6 padding_tb_30">
          <img src="Images/Group 427651.png" style={{height: "28px",marginRight: "12px"}} alt="" />
          <img src="Images/Frame 44370.png" alt="" />
        </div>
        <div className="col-6 d-none  padding_tb_30 d-lg-flex justify-content-center">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
          </ul>
        </div>
        <div className="col-6 d-flex d-lg-none justify-content-end align-items-center" >menu</div>
      </div>
    </div>
  );
};

export default Header;
