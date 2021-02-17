import React from "react";

export default class AboutForm extends React.Component {
  state = {
    name: "",
    vorname: "",
    unternehmen: "",
    industrie: "",
    telefon: "",
    email: "",
  };
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };
  encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({ "form-name": "contactForm", ...this.state }),
    };

    fetch("/", options)
      .then(function (response) {
        window.location.assign("/contact-thanks/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  render() {
    <form
      action="/thankyou"
      name="contact-about-form"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      id="form-about"
      onSubmit={this.handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact-about-form" />
      <input
        data-sal="slide-up"
        data-sal-delay="100"
        data-sal-duration="1000"
        className="input_about"
        name="name"
        type="text"
        value={this.state.name}
        onChange={this.handleInputChange}
        placeholder="Name"
      />
      <input
        data-sal="slide-up"
        data-sal-delay="100"
        data-sal-duration="1000"
        className="input_about"
        name="vorname"
        type="text"
        value={this.state.name}
        onChange={this.handleInputChange}
        placeholder="Vorname"
      />
      <input
        data-sal="slide-up"
        data-sal-delay="200"
        data-sal-duration="1000"
        className="input_about"
        name="unternehmen"
        type="text"
        value={this.state.name}
        onChange={this.handleInputChange}
        placeholder="Unternehmen"
      />
      <input
        data-sal="slide-up"
        data-sal-delay="200"
        data-sal-duration="1000"
        className="input_about"
        name="industrie"
        type="text"
        value={this.state.name}
        onChange={this.handleInputChange}
        placeholder="Industrie"
      />
      <input
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-duration="1000"
        className="input_about"
        name="telefon"
        type="number"
        value={this.state.name}
        onChange={this.handleInputChange}
        placeholder="Telefon"
      />
      <input
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-duration="1000"
        className="input_about"
        name="email"
        type="email"
        value={this.state.name}
        onChange={this.handleInputChange}
        placeholder="E-mail"
      />
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
          // type='button'
          // onClick={onClickCallMe}
          className="about_contact_btn"
        >
          WIR RUFEN SIE
        </button>
      </div>
    </form>;
  }
}
