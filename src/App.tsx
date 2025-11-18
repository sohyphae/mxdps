import './App.css'
import { FaInstagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import logo from './assets/dipslogo1.png'
import gaba from './assets/gaba-sqr.jpeg'
import soph1 from './assets/soph1.jpg'
import mark from './assets/mark-sqr.jpg'

function App() {
  return (
    <>
      <div className="background"></div>
      <img src={logo} className="logo" alt="" />
      <section>
        <div className="image-container">
          <img src={gaba} alt="" />
          <img src={soph1} alt="" />
          <img src={mark} alt="" />
          <img src={gaba} alt="" />
        </div>
        <p>
          Rave classics reimagined with a live band in this tour de force through the tunes that shaped the 90s. A joyous collaboration between rave queen drag DJ Gaba Ghanoush, discotheque trumpeteer Tom Levick, the ethereally voiced synth and loops wizard Sophie Hyphae, with sharp beats from Mark Lilley of Svalbard on drums. Expect a selection of ecstatic singalongs, brassed up D’n’B bangers, and gritty energetic flavours to get you double-dipping your dancefloor crudités.
        </p>
        
        <div className="contact-links-container">
          <h2>Get in touch</h2>
          <p>
            Send us an "E-mail"!
            <a className="padding-l-10px" href="mailto:info@themixeddips.com"><FaEnvelope /></a>
          </p>
          <p>
            Gaba Ghanoush's Insta
            <a className="padding-l-10px" href="https://www.instagram.com/gaba_ghanoush" target="_blank" rel="noopener noreferrer"><FaInstagram /></a> 
          </p>
          <p>
            Sophie Hyphae's Insta
            <a className="padding-l-10px" href="https://www.instagram.com/sophiehyphae" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </p>
        </div>
      </section>
    </>
  )
}

export default App
