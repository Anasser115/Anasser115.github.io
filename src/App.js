import './style/App.css';
import './style/fonts/PlusJakartaSans-Bold.ttf';
import './style/fonts/PlusJakartaSans-Medium.ttf';
import LandingPage from './components/landingPage/landingPage.js';
import AboutMe from './components/aboutMePage.js';
import { Routes , Link, Route } from "react-router-dom";

function App() {
  return (
    <div className="Apps">
      <LandingPage/>
      <AboutMe/>
    </div>
  );
}

export default App;
