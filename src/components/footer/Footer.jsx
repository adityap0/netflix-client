import React, { Component } from "react";
import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
  render() {
    return (
      <div class="footer">
        <nav>
          <ul>
            <li>
              <FontAwesomeIcon icon={faFacebook} />
            </li>
            <li>
              {" "}
              <FontAwesomeIcon icon={faInstagram} />
            </li>
            <li>
              {" "}
              <FontAwesomeIcon icon={faTwitter} />
            </li>
            <li>
              {" "}
              <FontAwesomeIcon icon={faYoutube} />
            </li>
          </ul>
        </nav>
        <div class="links">
          <ul>
            <li>Audio and Subs</li>
            <li>Media Centre</li>
            <li>Privacy</li>
            <li>Contact Us</li>
            <li>Audio Description</li>
            <li>Investor Relations</li>
            <li>Legal Notices</li>
            <li>Help Centre</li>
            <li>Jobs</li>
            <li>Cookie Prefrences</li>
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
          </ul>
        </div>
        <div class="service-code-div">Service Code</div>
        <span>© 1997 - 2021 Netflix, Inc.</span>
      </div>
    );
  }
}

export default Footer;
