import React from "react";

const TitleComp = ({ title, text, id }) => {
  return (
    <div className="container title_comp "   data-aos="fade-up"
    data-aos-duration="1200"
  data-aos-once="true">
      <div className="row py-5" id={id}>
        <div className="col-12 mt-5 d-flex flex-column align-items-center justify-content-center">
          <h4>{title}</h4>
          <p className="mt-2">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default TitleComp;
