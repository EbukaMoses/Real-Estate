import React from "react";
import './Contact.css'
import Back from "../Common/Back/Back";
import img from "/images/pricing.jpg";

const Contact = () => {
  return (
    <>
      <div className="contact mb">
        <Back
          name="Contact Us"
          title="Get Helps & Friendly Support"
          cover={img}
        />
        <div className="container">
            <form action="" className="shadow">
                <h4>Fillup The Form</h4> 
                <div>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                </div>   
                <input type="text" placeholder="Subject" />
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Submit Request</button>
            </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
