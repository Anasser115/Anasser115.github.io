import ToolBar from './toolBar.js';

export default function LandingPage() {
  return (
    <main className='mainContainer'>

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

    </main>
    </main>
  );
}
