import './style/App.css';

import LandingPage from './components/landingPage/landingPage.js';
import AboutMe from './components/aboutMePage.js';
import MyWork from './components/myWorkpage.js';
import ContactMe from './components/contactMePage.js';

import useScrollSnap from 'react-use-scroll-snap';
import { useRef } from "react";


function App() {

  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 100});

  return (
    <div className="Apps"   ref={scrollRef}>
      <LandingPage/>
      <AboutMe/>
      <MyWork/>
      <ContactMe/>
    </div>
  );
}

export default App;
