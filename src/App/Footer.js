import React from "react";
import LeanJSLogo from "./Layout/LeanJSLogo";
// import Link from "./Link";

const Footer = () => (
  <div className="footer">
    <ul>
      <li>
        <a target="_blank" to="https://reactjs.academy">
          ReactJS Academy
        </a>
      </li>
      <li>by</li>
      <li>
        <a target="_blank" to="https://leanjs.com">
          <LeanJSLogo width={25} />
        </a>
      </li>
    </ul>
  </div>
);

export default Footer;
