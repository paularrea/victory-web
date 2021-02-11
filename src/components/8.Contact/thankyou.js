import React from "react";
import "./form.css";
import {Link} from 'gatsby'

const Thankyou = () => {
  return (
    <div className="bg-container">
    <div className="message-container">
        <h1>Contact</h1>
        <p>Thank you for your submission!</p>
        <Link to='/'><button>BACK TO SITE</button></Link>
      </div>
    </div>
  );
};

export default Thankyou;
