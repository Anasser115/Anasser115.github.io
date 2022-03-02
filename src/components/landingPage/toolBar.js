import { Link } from 'react-scroll';



export default function ToolBar() {


  return (

    <main className="toolBarContainer">
        <h1 className="myName">ABDELRAHMAN HUSSEIN<a className="flickeringDot">.</a></h1>
      <section className="toolBar">
         <button  className="toolBarButtons"><Link className="buttonPadding" to='aboutPage' smooth={true} duration={1500}>About</Link></button>
         <button  className="toolBarButtons"><Link className="buttonPadding"  to='myWorkPage' smooth={true} duration={1500}>Work</Link></button>
         <button  className="toolBarButtons"><Link className="buttonPadding"  to='contactMePage' smooth={true} duration={1500}>Contact</Link></button>
      </section>
    </main>

  );
}
