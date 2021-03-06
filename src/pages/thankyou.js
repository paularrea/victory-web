import React from "react";
import "../components/8.Contact/form.css";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";
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
          <h1>
            <FormattedMessage id="submission.thankyou.title" />
          </h1>
          <p>
            <FormattedMessage id="submission.thankyou.text" />
          </p>
          <Link to="/">
            <button>
              <FormattedMessage id="submission.button" />
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default injectIntl(Thankyou);
