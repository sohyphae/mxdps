import './App.css'
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import logo from './assets/dipslogo-grn.png'
import gaba from './assets/gaba-sqr.jpeg'
import soph1 from './assets/soph1.jpg'
import mark from './assets/mark-sqr.jpg'
import tom from './assets/tom-sqr.jpeg'

function App() {
  return (
    <>
      <div className="background"></div>
      <img src={logo} className="logo" alt="" />

      <div className="image-container">
        <img className="gaba-ghanoush" src={gaba} alt="" />
        <img className="guaca-sophie" src={soph1} alt="" />
        <img className="pickle-lilley" src={mark} alt="" />
        <img className="tom-ato-salsa" src={tom} alt="" />
      </div>

      <section>
        
        <p className="bio">
          Rave classics reimagined with a live band in this tour de force through the tunes that shaped the 90s.
        </p> 
        <p className="bio">
           A joyous collaboration between rave queen drag DJ Gaba Ghanoush, discotheque trumpeteer Tom Levick, the ethereally voiced synth and loops wizard Sophie Hyphae, with sharp beats from Mark Lilley of Svalbard on drums.
        </p> 
        <p className="bio">
          The Mixed Dips serve up a selection of ecstatic singalongs, brassed up D’n’B bangers, and gritty energetic flavours to get you double-dipping your dancefloor crudités.
        </p>  

        <iframe className="video" src="https://www.youtube.com/embed/UWLBz0IQYCw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe className="video" src="https://www.youtube.com/embed/HB_CS9BKSRM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        
        <div className="live-container">
          <h2 className="section-header">Live Dates</h2>
          <h2 className="">Upcoming</h2>
          <p className="">18th December 2025: The Canteen, Bristol</p>
          <h2 className="">Past</h2>
          <p className="">22nd August 2025: Shambala Festival</p>
          <p className="">11th April 2025: Zoophoria, The Exchange, Bristol</p>
        </div>  

        <div className="contact-links-container">
          <h2>Get in touch</h2>
          <p>
            Why not send us an "E-mail"?!
            <a className="padding-l-10px" href="mailto:info@themixeddips.com"><FaEnvelope /></a>
          </p>
          <p>
            Our Youtube
            <a className="padding-l-10px"href="https://www.youtube.com/@sohyphae" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
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
