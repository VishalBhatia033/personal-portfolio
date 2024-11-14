import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <footer className="bg-blackBlue mb-4 mt-10 mx-6 lg:mx-16 rounded-lg flex flex-wrap items-center justify-between p-6 lg:px-14 lg:py-6">
      <div className="text-mianYellow">
        <FontAwesomeIcon icon={faCode} className="w-20 h-20 lg:w-56 lg:h-56"/>
      </div>
      <div className="w-[50%] lg:w-[35%] text-left">
        <h2 className="capitalize font-Humane text-4xl lg:text-8xl text-greyText text-end">
          
          <span className="text-mianYellow font-Humane">&nbsp;build&nbsp;</span>
          on
          <span className="text-mianYellow font-Humane">&nbsp; 0's&nbsp;</span>
          and
          <span className="text-mianYellow font-Humane">&nbsp;1's&nbsp;</span>
        </h2>
      </div>
      <p className="text-greyText text-[0.8rem] lg:text-[1rem] w-full text-end">Portfolio v1.0 © 2024 Vishal Bhatia</p>
    </footer>
  );
}

export default Footer;
