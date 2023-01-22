import React from "react";
import IconGitHub from "../Icons/github.js";
import InstagramIcon from "../Icons/instagram";
import LInkedInIcon from "../Icons/linkedin";
import TwitterIcon from "../Icons/twitter";
import config from "../config.js";

export default function VerticalNavbar() {
  return (
    <div className="verticalNavbar">
      <div>
        <div className="icon-vertical-navbar" onClick={()=> window.open(config.github, "_blank")}>
          <IconGitHub />
        </div>
        <div className="icon-vertical-navbar" onClick={()=> window.open(config.instagram, "_blank")}>
          <InstagramIcon />
        </div>
        <div className="icon-vertical-navbar" onClick={()=> window.open(config.linkedin, "_blank")}>
          <LInkedInIcon />
        </div>
        <div className="icon-vertical-navbar" onClick={()=> window.open(config.twitter, "_blank")}>
          <TwitterIcon />
        </div>
        <div
          style={{
            width: "1px",
            height: "100px",
            backgroundColor: "#BAC5DD",
            marginLeft: "10px",
          }}
        />
      </div>
    </div>
  );
}
