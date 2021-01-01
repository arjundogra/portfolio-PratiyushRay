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
        <a href="tel:9991234846">
          <PhoneIcon />
        </a>
        <a href="mailto:pkray0021@gmail.com">
          <EmailIcon />
        </a>
        <a href="https://github.com/pratiyushray" target="_blank">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/pratiyushray/" target="_blank">
          <LinkedInIcon />
        </a>
        <a href="https://instagram.com/pratiyush_ray" target="_blank">
          <InstagramIcon />
        </a>
        <a href="https://twitter.com/RayPratiyush" target="_blank">
          <TwitterIcon />
        </a>
      </div>
    </div>
  );
}

export default ContactUs;
