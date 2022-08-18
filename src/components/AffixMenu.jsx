import { Affix, Button, Drawer } from "antd";
import React, { useEffect, useState } from "react";
// import { Affix } from "antd";
import { dataAffixId } from "./dataAffixId";
const AffixMenu = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const TOP = 0.1;
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollAffix);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const scrollAffix = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    dataAffixId.forEach((item) => {
      let comps = document.getElementById(item.idComps);
      let elementId = document.querySelector(item.idA);

      if (
        comps.offsetTop <= winScroll &&
        comps.offsetTop + comps.offsetHeight >= winScroll
      ) {
        elementId.classList.add("actions");
      } else {
        elementId.classList.remove("actions");
      }
    });
  };

  const listenToScroll = () => {
    let comps = document.getElementById("home");

    let heightToHideFrom = comps.offsetHeight;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      isVisible && setIsVisible(false);
      document.querySelector(".ant-affix").style.background = "white";
      dataAffixId.map(
        (item) => (document.querySelector(item.idA).style.color = "#000")
      );
      document.querySelector(".actions").style.color = "#000";
    } else {
      setIsVisible(true);
      document.querySelector(".ant-affix").style.background = "transparent";
      dataAffixId.map(
        (item) => (document.querySelector(item.idA).style.color = "#000")
      );
    }
  };

  return (
    // <div className="d-none d-lg-block  " style={{}}>
      <div className="container-fluid position-relative d-flex justify-content-center">
        <Drawer title="Basic Drawer" placement="right" onClose={onClose} visible={visible}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
        <Affix
          data-spy="nav-color"
          data-offset-top="0"
          className="container-fluid"
          style={{
            position: "fixed",
            zIndex: "3",
            display: "flex",
            background: "white",
            height: "80px"
          }}
          offsetTop={TOP}
        >
     
          <div className=" container">
            <div className="row header">

            <div className="col-6 padding_tb_30">
              <img
                src="Images/Group 427651.png"
                style={{ height: "28px", marginRight: "12px" }}
                alt=""
              />
              <img src="Images/Frame 44370.png" alt="" />
            </div>
            <div className="col-6 d-none  padding_tb_30 d-lg-flex justify-content-center">
              <ul className="d-flex">
                <li>
                  <a
                    className="nav-link scrollto2 home"
                    role="group"
                    href="#home"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link scrollto2 products"
                    role="group"
                    href="#products"
                  >
                    Products
                  </a>
                </li>

                <li>
                  <a
                    className="nav-link scrollto2 features"
                    role="group"
                    href="#features"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link scrollto2 pricing"
                    role="group"
                    href="#pricing"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link scrollto2 about"
                    role="group"
                    href="#about"
                  >
                    About us
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 d-flex d-lg-none justify-content-end align-items-center" >  <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      </div>
            </div>
          </div>
        </Affix>
    </div>
  );
};

export default AffixMenu;
