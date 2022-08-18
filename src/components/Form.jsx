import React from "react";

const Form = () => {
  return (
    <div className="form">
      <label>E-mail</label>
      <input type="text" placeholder="kaidoe@gmail.com"/>
      <label>Your message</label>
      <textarea placeholder="Drop us a message"/>
      <label htmlFor="">Name</label>
      <div className="row">
        <div className="col-lg-8 ">
          <input type="text" className="name" placeholder="Placeholder"/>
        </div>
        <div className="col-lg-2 d-flex justify-content-center">
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
