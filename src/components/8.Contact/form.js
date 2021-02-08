import React from "react";
import "./form.css";

export default class Form extends React.Component {
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
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/mqkgjwpg"
        method="POST"
      >
        <input
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-duration="1000"
          className="input"
          name="name"
          type="text"
          placeholder="Name"
        />
        <input
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-duration="1000"
          className="input"
          name="vorname"
          type="text"
          placeholder="Vorname"
        />
        <input
          data-sal="slide-up"
          data-sal-delay="200"
          data-sal-duration="1000"
          className="input"
          name="unternehmen"
          type="text"
          placeholder="Unternehmen"
        />
        <input
          data-sal="slide-up"
          data-sal-delay="200"
          data-sal-duration="1000"
          className="input"
          name="industrie"
          type="text"
          placeholder="Industrie"
        />
        <input
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-duration="1000"
          className="input"
          name="telefon"
          type="number"
          placeholder="Telefon"
        />
        <input
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-duration="1000"
          className="input"
          name="e-mail"
          type="email"
          placeholder="E-mail"
        />
        {status === "SUCCESS" ? (
          <p>Thanks!</p>
        ) : (
          <button
            data-sal="slide-up"
            data-sal-delay="400"
            data-sal-duration="1000"
            type="submit"
          >
            SEND FORM
          </button>
        )}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
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
