import React from "react";
import IconGitHub from "../Icons/github.js";
import InstagramIcon from "../Icons/instagram";
import LInkedInIcon from "../Icons/linkedin";
import TwitterIcon from "../Icons/twitter";

export default function VerticalNavbar() {
  return (
    <div className="verticalNavbar">
      <div>
        <div className="icon-vertical-navbar">
          <IconGitHub className="icon-vertical-navbar" />
        </div>
        <div className="icon-vertical-navbar">
          <InstagramIcon />
        </div>
        <div className="icon-vertical-navbar">
          <LInkedInIcon />
        </div>
        <div className="icon-vertical-navbar">
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
