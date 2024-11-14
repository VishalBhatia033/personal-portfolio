import React from 'react'
import '../css/hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { fa,fa-linkedin } from '@fortawesome/free-solid-svg-icons'
function Hero() {
  return (
    <div id="hero-page" >
      <FontAwesomeIcon icon="fab fa-linkedin" />
      <div className="heroitems">
        <div className="infinitescroll">
          <div className="container">
            <div className="infinitehorizonscroll">
              <div className="infinitehorizon1">
                <span className='font-Organetto'
                >UI Designer UI Designer UI Designer UI Designer UI
                  Designer</span
                ><span className='font-Organetto'
                >UI Designer UI Designer UI Designer UI Designer UI
                  Designer</span
                >
              </div>
              <div className="infinitehorizon2">
                <span className='font-Organetto'
                >Frontend Developer Frontend Developer Frontend Developer
                  Frontend Developer</span
                ><span className='font-Organetto'
                >Frontend Developer Frontend Developer Frontend Developer
                  Frontend Developer</span
                >
              </div>
            </div>
          </div>
        </div>
        <div className="desc">
          <p className="line1 font-AmulyaMedium">Hey There I'm</p>
          <h1 className="name font-Humane">VISHAL</h1>
          <p className="line2 font-AmulyaMedium text-center">
            Computer Science and Engineering Student
          </p>
          
        </div>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="angles-down"
          className="svg-inline--fa fa-angles-down fa-bounce arrow-Down"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"
          ></path>
        </svg>
      </div>
    </div >
  )
}

export default Hero