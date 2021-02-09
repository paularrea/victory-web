import React from "react";
import "./formAbout.css";
import FormAboutImg from "./formAboutImg";

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;

    return (
      <div className="contact_container">
        <div className="flex_form">
          <div className="img_container">
            <FormAboutImg />
          </div>
          <div>
            <form
              onSubmit={this.submitForm}
              action="https://formspree.io/f/mqkgjwpg"
              method="POST"
            >
              <input
                data-sal="slide-up"
                data-sal-delay="100"
                data-sal-duration="1000"
                className="input_about"
                name="name"
                type="text"
                placeholder="Name"
              />
              <input
                data-sal="slide-up"
                data-sal-delay="100"
                data-sal-duration="1000"
                className="input_about"
                name="vorname"
                type="text"
                placeholder="Vorname"
              />
              <input
                data-sal="slide-up"
                data-sal-delay="200"
                data-sal-duration="1000"
                className="input_about"
                name="unternehmen"
                type="text"
                placeholder="Unternehmen"
              />
              <input
                data-sal="slide-up"
                data-sal-delay="200"
                data-sal-duration="1000"
                className="input_about"
                name="industrie"
                type="text"
                placeholder="Industrie"
              />
              <input
                data-sal="slide-up"
                data-sal-delay="300"
                data-sal-duration="1000"
                className="input_about"
                name="telefon"
                type="number"
                placeholder="Telefon"
              />
              <input
                data-sal="slide-up"
                data-sal-delay="300"
                data-sal-duration="1000"
                className="input_about"
                name="e-mail"
                type="email"
                placeholder="E-mail"
              />
              {status === "SUCCESS" ? (
                <p>Thanks!</p>
              ) : (
                <div
                  data-sal="slide-up"
                  data-sal-delay="250"
                  data-sal-duration="1000"
                  className="btn_container"
                >
                  <button
                    data-sal="slide-up"
                    data-sal-delay="400"
                    data-sal-duration="1000"
                    type="submit"
                    className="about_contact_btn"
                  >
                    ABSENDEN
                  </button>
                  <button
                    data-sal="slide-up"
                    data-sal-delay="400"
                    data-sal-duration="1000"
                    type="submit"
                    className="about_contact_btn"
                  >
                    WIR RUFEN SIE
                  </button>
                </div>
              )}

              {status === "ERROR" && <p>Ooops! There was an error.</p>}
            </form>
          </div>
        </div>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
