import React, { useEffect } from "react";
import config from "../config";

export default function Footer() {
  let [visitors, setVisitors] = React.useState(undefined);
  useEffect(() => {
    getVisitors();
  }, []);
  let getVisitors = async () => {
    let res = await fetch("https://api.countapi.xyz/hit/abhayasood.xyz/visits");
    let data = await res.json();
    setVisitors(data.value);
    console.log(data);
  };
  return (
    <>
      <div className="footer">
        <div className="total_visitors">
          Total visitors:
          {visitors !== undefined ? visitors : <></>}
        </div>
        <div className="build_link">
          <a
            href={config.repo_link}
            target="_blank"
            rel="noopener noreferrer"
            className="footer_container"
          >
            Build by {config.name}
          </a>
        </div>
      </div>
    </>
  );
}
