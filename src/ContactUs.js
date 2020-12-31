import React from "react";
import PhoneIcon from "@material-ui/icons/Phone";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";

function ContactUs() {
  return (
    <div className="contactUs">
      <a
        href="Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="resumeButton"
      >
        RESUME
      </a>
      <div className="icons">
        <a href="https://instagram.com" target="_blank">
          <PhoneIcon />
        </a>
        <a href="https://instagram.com" target="_blank">
          <EmailIcon />
        </a>
        <a href="https://instagram.com" target="_blank">
          <GitHubIcon />
        </a>
        <a href="https://instagram.com" target="_blank">
          <LinkedInIcon />
        </a>
        <a href="https://instagram.com" target="_blank">
          <InstagramIcon />
        </a>
        <a href="https://instagram.com" target="_blank">
          <TwitterIcon />
        </a>
      </div>
    </div>
  );
}

export default ContactUs;
