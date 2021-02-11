import React from "react";
import "../components/8.Contact/form.css";
import Layout from "../components/layout/layout";
import { Link } from "gatsby";

const Thankyou = () => {
  return (
    <Layout>
      <div id="thankyou" className="bg-container">
        <div
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-duration="1000"
          className="message-container"
        >
          <h1>Contact</h1>
          <p>Thank you for your submission!</p>
          <Link to="/">
            <button>BACK TO SITE</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Thankyou;
