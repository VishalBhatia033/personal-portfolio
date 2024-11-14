import React, { useRef, useState } from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


function Nav() {
  const [icon, setIcon] = useState(faBars);
  const [toggle, setToggle] = useState(true);

  const tl = useRef();
  const container = useRef();
  gsap.registerPlugin(useGSAP);
  const { contextSafe } = useGSAP(() => {
    tl.current = gsap.timeline()
      .to("#nav_links", {
        x: "100%",
        ease:"power1.out",
      })
  }, { scope: container });

  const toggleNav = contextSafe(() => {
    tl.current.reversed(!tl.current.reversed())
    if (toggle) {
      setIcon(faX);
      setToggle(!toggle);
    } else {
      setIcon(faBars);
      setToggle(!toggle);
    }
  });
  const closeNav=contextSafe(() => {
    tl.current.reversed(!tl.current.reversed())
    if (toggle) {
      setIcon(faX);
      setToggle(!toggle);
    } else {
      setIcon(faBars);
      setToggle(!toggle);
    }
  });
  return (
    <nav className='z-40 sticky top-0 ' ref={container} >
      <ul className=' flex lg:px-16 px-6 py-6 text-3xl font-medium items-center justify-between  lg:py-2 bg-bodyBlack h-[10vh] lg:h-[12vh]'>
        <li className='py-3  flex justify-center font-semibold '>
          <Link to="/"onClick={closeNav}>Portfolio</Link>
        </li>
        <li>
          <FontAwesomeIcon icon={icon} className='text-[#d5ff3f] transition-all duration-100 lg:text-2xl cursor-pointer' onClick={toggleNav} />
        </li>
      </ul>
      <ul id='nav_links' className='absolute w-[100%] top-[10vh] lg:top-[12vh] lg:font-semibold flex-col  gap-4 py-4 text-sm font-medium items-center justify-start flex bg-bodyBlack h-[90vh] lg:h-[88vh]'>
        <li className='py-5 bg-[#161b22] w-[90%] flex justify-center rounded-lg hover:text-[#d5ff3f]'>
          <Link to="/" onClick={closeNav}>Home</Link>
        </li>
        <li className='py-5 bg-[#161b22] w-[90%] flex justify-center rounded-lg hover:text-[#d5ff3f] transition-all '>
          <Link to="/about" onClick={closeNav}>About</Link>
        </li>
        <li className='py-5 bg-[#161b22] w-[90%] flex justify-center rounded-lg hover:text-[#d5ff3f] transition-all '>
          <Link to="/projects" onClick={closeNav}>Projects</Link>
        </li>
        <li className='py-5 bg-[#161b22] w-[90%] flex justify-center rounded-lg hover:text-[#d5ff3f] transition-all'>
          <Link to="/education" onClick={closeNav}>Education</Link>
        </li>
        

      </ul>
    </nav>
  )
}

export default Nav