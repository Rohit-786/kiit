import React from "react";
import { Divider } from "semantic-ui-react";
import "./Header.scss";

const Header = () => {
  const logo = "/asset/images/Home/HeaderNFooter/logo.svg";
  const socialIcons = [
    "/asset/images/Home/HeaderNFooter/facebook.png",
    "/asset/images/Home/HeaderNFooter/twitter.png",
    "/asset/images/Home/HeaderNFooter/linkedin.png",
    "/asset/images/Home/HeaderNFooter/youtube.png",
    "/asset/images/Home/HeaderNFooter/instagram.png",
  ];
  return (
    <div className="header">
      <div className="left-flex">
        <div className="brand-logo">
          <a href="/">
            <img src={logo} alt={"logo"} className="brand-img" />
          </a>
        </div>
        <div className="brand">
          <div className="brand-name">Alumni Portal, KIIT University</div>
          <Divider fitted={true} className="brand-divider" />
          <div className="brand-name">Building Relations</div>
        </div>
      </div>

      <div className="right-flex">
        <div className="social">
          <a href="/">
            <img src={socialIcons[0]} alt="facebook" className="social-icon" />
          </a>
          <a href="/">
            <img src={socialIcons[1]} alt="twitter" className="social-icon" />
          </a>
          <a href="/">
            <img src={socialIcons[2]} alt="linkedin" className="social-icon" />
          </a>
          <a href="/">
            <img src={socialIcons[3]} alt="youtube" className="social-icon" />
          </a>
          <a href="/">
            <img src={socialIcons[4]} alt="instagram" className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
