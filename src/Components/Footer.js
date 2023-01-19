import React from "react";
import config from "../config";

export default function Footer() {
  return (
    <div className="footer">
      <a href={config.repo_link} target="_blank" rel="noopener noreferrer" className="footer_container">
        Build by {config.name}
      </a>
    </div>
  );
}
