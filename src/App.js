import './style/App.css';
import './style/fonts/PlusJakartaSans-Bold.ttf';
import './style/fonts/PlusJakartaSans-Medium.ttf';
import LandingPage from './components/landingPage/landingPage.js';
import ToolBar from './components/landingPage/toolBar.js';
import { Routes , Link, Route } from "react-router-dom";

function App() {
  return (
    <div className="Apps">
    <Routes>
       <Route path='' element={<LandingPage/>} />

    </Routes>
    </div>
  );
}

export default App;
