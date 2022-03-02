import { Link } from "react-scroll";

export default function ContactMe() {
  return (
    <main className="contactContainer" id="contactMePage">
      <div className="project">Project 1</div>
      <div className="project">Project 2</div>
      <div className="project">Project 3</div>
      <div className="project">Project 4</div>
      <div className="gradientShadow">
        <button >
          <Link className="buttonPadding" to="landingPage" smooth={true} duration={1500}>
            up
          </Link>
        </button>
      </div>
    </main>
  );
}
