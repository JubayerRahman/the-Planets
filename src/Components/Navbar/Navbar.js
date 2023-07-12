import React from 'react'
import "./Navbar.css"
import { useState } from 'react'

const Navbar = (props) => {
  const [mobileNevClass, setMobileNevClass] = useState("mobileNavbtn")
  const responsivemenuFunction =()=>{
    if(mobileNevClass==="mobileNavbtn"){
      setMobileNevClass("mobileNavbtnShow")
    }
    if(mobileNevClass==="mobileNavbtnShow"){
      setMobileNevClass("mobileNavbtn")
    }
  }
  const mobMenuclick=()=>{
    setMobileNevClass("mobileNavbtn")
  }
  const venusFunction=()=>{
    props.getData("Venus")
  }
  const EarthFunction=()=>{
    props.getData("Earth")
  }
  const MarsFunction=()=>{
    props.getData("Mars")
  }
  const mercuryFunction=()=>{
    props.getData("Mercury")
  }
  const jupiterFunction=()=>{
    props.getData("Jupiter")
  }
  const saturnFunction=()=>{
    props.getData("Saturn")
  }
  const uranusFunction=()=>{
    props.getData("Uranus")
  }
  const neptuneFunction=()=>{
    props.getData("Neptune")
  }
  return (
    <>
    <div className='navbar'>
      <h2>The Planets</h2>
      <div className='navBtns'>
        <div className='mercuryBtn'>
          <div className='mercuryHover'></div>
          <button onClick={mercuryFunction}>MERCURY</button>
        </div>
        <div className='venusBtn'>
        <div className='venusHover'></div>
          <button onClick={venusFunction}>VENUS</button>
        </div>
        <div className='earthBtn'>
        <div className='earthHover'></div>
          <button onClick={EarthFunction}>EARTH</button>
        </div>
        <div className='marsBtn'>
        <div className='marsHover'></div>
          <button onClick={MarsFunction}>MARS</button>
        </div>
        <div className='jupiterBtn'>
        <div className='jupiterHover'></div>
          <button onClick={jupiterFunction}>Jupiter</button>
        </div>
        <div className='saturnBtn'>
        <div className='saturnHover'></div>
          <button onClick={saturnFunction}>SATURN</button>
        </div>
        <div className='uranusBtn'>
        <div className='uranusHover'></div>
          <button onClick={uranusFunction}>URANUS</button>
        </div>
        <div className='neptuneBtn'>
        <div className='neptuneHover'></div>
          <button onClick={neptuneFunction}>NEPTUNE</button>
        </div>
      </div>
      <button className='burger' onClick={responsivemenuFunction}><i className="fa-solid fa-bars"></i></button>
    </div>
    <div className={mobileNevClass} onClick={mobMenuclick}>
        <div className='mercuryBtn'>
          <div className='mercuryHover'></div>
          <button onClick={mercuryFunction}>MERCURY</button>
        </div>
        <div className='venusBtn'>
        <div className='venusHover'></div>
          <button onClick={venusFunction}>VENUS</button>
        </div>
        <div className='earthBtn'>
        <div className='earthHover'></div>
          <button onClick={EarthFunction}>EARTH</button>
        </div>
        <div className='marsBtn'>
        <div className='marsHover'></div>
          <button onClick={MarsFunction}>MARS</button>
        </div>
        <div className='jupiterBtn'>
        <div className='jupiterHover'></div>
          <button onClick={jupiterFunction}>Jupiter</button>
        </div>
        <div className='saturnBtn'>
        <div className='saturnHover'></div>
          <button onClick={saturnFunction}>SATURN</button>
        </div>
        <div className='uranusBtn'>
        <div className='uranusHover'></div>
          <button onClick={uranusFunction}>URANUS</button>
        </div>
        <div className='neptuneBtn'>
        <div className='neptuneHover'></div>
          <button onClick={neptuneFunction}>NEPTUNE</button>
        </div>
        <h3 className='dev'>
          <a href='https://sidemenuportfolio.netlify.app/' rel="noreferrer" target='_blank'>&copy;Jobayer Rahman <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
        </h3>
      </div>
    </>
  )
}

export default Navbar
