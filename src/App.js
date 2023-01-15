import "./App.css";
import Navbar from "./Components/Navbar";
import VerticalNavbar from "./Components/VerticalNavbar";
import logo from "./Assets/AS_logo.svg";
import EmailInformation from "./Components/EmailInformation";
import config from "./config.js";
import AboutMe from "./Components/AboutMe";

function App() {
  return (
    <div className="app">
      <div class="top-row">
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

export default App;
