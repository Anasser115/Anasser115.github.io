import { Link } from 'react-scroll';

export default function AboutMe() {
  return (
    <main  id="aboutPage" className="aboutMe">
      <section className="aboutMeContainer">
        <h1 className="aboutMeTitle">About Me
        <div className="aboutMeTitleUnderline">_________</div>
        </h1>
        <article  className="aboutMeText">
        <p>
          An enthusiastic software engineer currently shaping the future of
          software development by designing smooth user-interfaces that promote
          user interaction with information and data. While traveling around the
          world.
        </p>
        <p>
          I've always been passionate about colors, design learning about new
          technologies. Other than sitting in from of my display I enjoy myself
          in hiking and taking photo a long the way. I'm grateful that my job
          allows me to work from anywhere.
        </p>
        <p>
          I specialize in building web applications, leading front-end teams and
          developing visual design systems. I enjoy creating effortless user
          experience and designing delightful digital products. The entire
          process of going from a concept to release and gathering user's
          feedback on either client's or my own products is what makes me wake
          up everyday!
        </p>
        </article>
      <div class="BlackBox learnMore">
        Learn More
        <button className="learnMoreArrow"><Link to='myWorkPage' smooth={true} duration={1500}>&#10136;</Link></button>


      </div>
      </section>
    </main>
  );
}
