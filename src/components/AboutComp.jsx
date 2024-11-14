import React from "react";
import profilePicture from "../assets/profilePicture.png";
import { Link } from "react-router-dom";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  bootstrap,
  css,
  express,
  git,
  github,
  html,
  js,
  mongodb,
  mysql,
  nodejs,
  php,
  postman,
  react,
  redux,
  tailwind,
  vscode,
} from "./logos";

function AboutComp() {
  return (
    <section className="flex flex-col items-center gap-6">
      <div className="rounded-lg flex justify-center items-center uppercase font-Humane text-6xl bg-blackBlue p-5 w-[90%]">
        About
      </div>
      {/* about section  */}
      <div className="w-[90%] flex flex-wrap bg-blackBlue items-center gap-4 justify-center rounded-lg">
        <div className="w-[70%] lg:w-[30%] rounded-full overflow-hidden">
          <img className="w-full h-full" src={profilePicture} alt="" />
        </div>
        <div className="w-[95%] text-center lg:text-start lg:w-[55%] text-lg ">
          I'm a <span className="text-mianYellow">Computer Science</span>{" "}
          student, My passion lies in building user-friendly solutions that
          enhance overall user experiences. I am currently focused on{" "}
          <span className="text-mianYellow"> React , Node and Express </span>{" "}
          and currently working as Web Intern at{" "}
          <span className="text-mianYellow">NIELIT Chandigarh</span>. my
          experties lies in
          <span className="text-mianYellow">
            {" "}
            HTML, CSS, JS, PHP, MYSQL, React and Redux with core programming
            language C++
          </span>
          , leveraging these technologies to create responsive and functional
          applications. I’m always eager to work on impactful projects that
          challenge me to grow while also contributing to meaningful outcomes.
          So, whether{" "}
          <span className="text-mianYellow">
            you're looking for a dedicated developer, a creative designer, or a
            collaborative team member,
          </span>{" "}
          I’m here to help bring ideas to life. Let’s connect and create
          innovative solutions together!
        </div>
      </div>
      {/* skills animation  */}
      <div className="flex flex-wrap w-[90%] justify-between">
        <div className="flex flex-col gap-4 w-[95%] lg:w-[67%] bg-blackBlue rounded-lg p-8">
          <div className="font-semibold text-2xl">Skills</div>
          <div className="overflow-hidden flex ">
            <span className="flex gap-7 animate-slideSkills translate-x-full">
              <img className="h-12 w-16" src={html} alt="" />
              <img className="h-12 w-16" src={bootstrap} alt="" />
              <img className="h-12 w-16" src={nodejs} alt="" />
              <img className="h-12 w-16" src={express} alt="" />
              <img className="h-12 w-16" src={mongodb} alt="" />
              <img className="h-12 w-16" src={mysql} alt="" />
              <img className="h-12 w-16" src={tailwind} alt="" />
              <img className="h-12 w-16" src={php} alt="" />
              <img className="h-12 w-18" src={react} alt="" />
              <img className="h-12 w-16" src={redux} alt="" />
              <img className="h-12 w-12" src={git} alt="" />
              <img className="h-12 w-12" src={github} alt="" />
              <img className="h-12 w-12" src={postman} alt="" />
              <img className="h-12 w-12" src={vscode} alt="" />
              <img className="h-12 w-12" src={css} alt="" />
              <img className="h-12 w-20" src={nodejs} alt="" />
              <img className="h-12 w-12" src={express} alt="" />
              <img className="h-12 w-12" src={mongodb} alt="" />
              <img className="h-12 w-16" src={mysql} alt="" />
              <img className="h-12 w-12" src={tailwind} alt="" />
            </span>
          </div>
        </div>
        <div className="w-[95%] lg:w-[31%] mt-6 lg:mt-0 bg-blackBlue rounded-lg p-8 flex justify-between items-center text-mianYellow">
          <Link to="https://www.linkedin.com/in/vishal-bhatia-v033/" className="hover:scale-105">
            <FontAwesomeIcon
              className="h-10 w-10 lg:h-20 lg:w-20"
              icon={faLinkedin}
            />
          </Link>
          <Link to="https://www.instagram.com/_vishal_033/profilecard/?igsh=ZXQ3Y3oyN3NpZzE4" className="hover:scale-105">
            <FontAwesomeIcon
              className="h-10 w-10 lg:h-20 lg:w-20"
              icon={faInstagram}
            />
          </Link>
          <Link to="https://github.com/VishalBhatia033" className="hover:scale-105">
            <FontAwesomeIcon
              className="h-10 w-10 lg:h-20 lg:w-20"
              icon={faGithub}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutComp;
