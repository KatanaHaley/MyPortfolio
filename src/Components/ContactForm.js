import React from "react";
import "./ContactForm.css";
import linkedin from "./images/linkedin.png";
import GitHubMark from "./images/GitHubMark.png";
import medium from "./images/medium.jpg";

function ContactForm() {
  return (
    <div className="container" id="contact" style={{ width: 800 }}>
              

      <form action="https://formspree.io/f/mwkwqkjg" method="POST" class="form">
        <fieldset>
          <h3>Contact me</h3>
          <p textAlign="left">
            I'm interested in freelance opportunities, ambitious projects. If
            you have any questions, feel free to contact me using the form.
          </p>
          <div class="">
            <label>
              <input name="name" placeholder="Name:"/>
            </label>
            <label>
              <input name="email" input type="text" placeholder="Email:"/>
            </label>
          </div>
          <div class="container">
            <label>
              <input name="subject" input type="text" placeholder="Subject:" />
            </label>
          </div>
          <div class="">
          <label>
            <textarea name="message" placeholder="Message:"></textarea>
          </label>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </fieldset>
      </form>
      <br></br>
      <div>
      <a href="https://github.com/katanahaley" a target="_blank" rel="noreferrer"><img src={GitHubMark} alt="GitHub logo" width="50" height="50"></img></a>
      <a href="https://www.linkedin.com/in/katana-haley/" a target="_blank" rel="noreferrer"><img src={linkedin} alt="LinkedIn logo" width="50" height="50"></img></a>
      <a href="https://medium.com/@haleykatana" a target="_blank" rel="noreferrer"><img src={medium} alt="Medium logo" width="50" height="50"></img></a>
      </div>
    </div>
  );
}

export default ContactForm;
