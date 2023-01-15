import "./App.css";
import Navbar from "./Components/Navbar";
import VerticalNavbar from "./Components/VerticalNavbar";
import logo from "./Assets/AS_logo.svg";
import EmailInformation from "./Components/EmailInformation";
import config from "./config.js";
import { useState, useEffect } from "react";
import AboutMe from "./Components/AboutMe";

function App() {
  const scrollDirection = useScrollDirection();
  return (
    <div className="app">
      <div class={`top-row ${ scrollDirection === "down" ? "hide" : "show"}`}>
        <div class="logo_main">
          <img src={logo} alt="logo" />
        </div>
        <div class="navbar_resume">
          <div className="">
            <Navbar />
          </div>
          <div>
            <button className="resume-button">Resume</button>
          </div>
        </div>
      </div>
      <div class="verticalNavbar">
        <VerticalNavbar />
      </div>
      <div className="EmailInformationMain">
        <EmailInformation />
      </div>
      <div className="main">
        <div className="intro">
          Hi, my name is
          <div className="name_main">{config.name}</div>
          <div className="task_main">{config.intro_one_liner}</div>
          <div className="about_main">{config.short_main_intro}</div>
          <div>
            <button className="action_button_main">Check out my work!</button>
          </div>
        </div>
      </div>

      <AboutMe />
    </div>
  );
}
function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    }
  }, [scrollDirection]);

  return scrollDirection;
};
export default App;
