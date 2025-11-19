import './App.css'
import { FaInstagram } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa"
import logo from './assets/dipslogo-grn.png'
import the from './assets/the.png'
import mixed from './assets/mixed.png'
import dips from './assets/dips.png'
import gaba from './assets/gaba-sqr.jpeg'
import soph1 from './assets/soph1.jpg'
import mark from './assets/mark-sqr.jpg'
import tom from './assets/tom-sqr.jpeg'

function App() {
  return (
    <>
      <div className="background"></div>      
      <div className="logo-container">
        <img src={the} className="logo" alt="" />
        <img src={mixed} className="logo" alt="" />
        <img src={dips} className="logo logo-dips" alt="" />
      </div>

      <div className="dips-container-container">
        <div className="dips-container">
            <img className="gaba-ghanoush" src={gaba} alt="" />
            <img className="guaca-sophie" src={soph1} alt="" />
            <img className="pickle-lilley" src={mark} alt="" />
            <img className="tom-ato-salsa" src={tom} alt="" />
          </div>
      </div>      

      <section className="info">
        
        <div className="bio">
          <h2>Bristol-based rave classics live band</h2>
          <p>
            Rave classics reimagined with a live band in this tour de force through the tunes that shaped the 90s.
          </p> 
          <p>
            A joyous collaboration between rave queen drag DJ Gaba Ghanoush, discotheque trumpeteer Tom Levick, the ethereally voiced synth and loops wizard Sophie Hyphae, with sharp beats from Mark Lilley of Svalbard on drums.
          </p> 
          <p>
            The Mixed Dips serve up a selection of ecstatic singalongs, brassed up D’n’B bangers, and gritty energetic flavours to get you double-dipping your dancefloor crudités.
          </p>
        </div>  

        <iframe className="video" src="https://www.youtube.com/embed/UWLBz0IQYCw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe className="video" src="https://www.youtube.com/embed/HB_CS9BKSRM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        
        <div className="live-container">
          <h2 className="section-header">Live Dates</h2>
          <h3 className="">Upcoming</h3>
          <p className="">18th December 2025: The Canteen, Bristol</p>
          <h3 className="">Past</h3>
          <p className="">22nd August 2025: Shambala Festival</p>
          <p className="">11th April 2025: Zoophoria, The Exchange, Bristol</p>
        </div>  

        <div className="contact-links-container">
          <h2>Get in touch</h2>
          <p>
            Why not send us an "E-mail"?!
            <a ><FaEnvelope /></a>
          </p>
          <p>
            Our Youtube
            <a href="https://www.youtube.com/@sohyphae" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </p>
          <p>
            Gaba Ghanoush's Insta
            <a  href="https://www.instagram.com/gaba_ghanoush" target="_blank" rel="noopener noreferrer"><FaInstagram /></a> 
          </p>
          <p>
            Sophie Hyphae's Insta
            <a  href="https://www.instagram.com/sophiehyphae" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </p>
        </div>
      </section>
      <img src={logo} className="logo-sm" alt="" />
    </>
  )
}

export default App
