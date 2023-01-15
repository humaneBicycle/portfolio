import "./App.css";
import Navbar from "./Components/Navbar";
import VerticalNavbar from "./Components/VerticalNavbar";
import logo from "./Assets/AS_logo.svg";
import EmailInformation from "./Components/EmailInformation";

function App() {
  return (
    <div>
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

        <EmailInformation/>
      </div>
      <div className="main">
        <div className="intro">
        Hi, my name is
        <div className="name_main">Abhay Sood.</div>
        <div className="task_main">I am an android and web developer.</div>
        <div className="about_main">Welcome to my portfolio website! I am an android and web developer, dedicated to honing my skills and continuously seeking new opportunities to improve. My work, showcased on this website, browse my portfolio to see the solutions I can offer for your business or organization</div>
        
        </div>
      </div>
    </div>
  );
}

export default App;
