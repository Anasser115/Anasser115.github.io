import ToolBar from './toolBar.js';
import personalPhoto from '../../style/personalPhoto.png';

export default function LandingPage() {
  return (
    <main className='mainContainer' id='landingPage'>

      <ToolBar />

    <main className="landingBody">
      <section className="welcomeMessage">
        <h1 className="largeHeader">
          <a className="coloredText">Let's design</a>
          <a className="headerLineTwo">something special and </a>
          <a className="headerLineThree">have fun along the way.</a>
        </h1>
       <section className='gradientShadow'><button>Book a Call</button></section>
      </section>
      <section className='imageContainer'>
        <img className='imageFrame' src={personalPhoto} />
      </section>
      <h2 className='arabicName'> عبد الرحمن</h2>
    </main>
    </main>
  );
}
