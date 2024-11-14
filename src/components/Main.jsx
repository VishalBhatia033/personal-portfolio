import React from "react";
import profilePicture from "../assets/profilePicture.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import SkillsContainer from "./SkillsContainer";
import ProjectCard from "./ProjectCard";
import EducationCard from "./EducationCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  bootstrap,
  cpp,
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
  covid,
  resturant,
  weather,
  passwordGenerator,
  todo,
  movieTicketBooking,
  SRS
} from "./images";

function Main() {
  const navigate = useNavigate();
  const data = useSelector((state) => state.myData.userData);
  const projectImg = {
    covid,
    resturant,
    weather,
    passwordGenerator,
    todo,
    movieTicketBooking,
    SRS,
  };
  const img = {
    bootstrap,
    cpp,
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
    movieTicketBooking,
    SRS,
  };
  return (
    <main className="flex flex-col gap-24 items-center mt-20">
      {/* about section  */}
      <section className="mt-16 lg:mt-0 px-5 py-8 flex flex-wrap items-center justify-center bg-mianYellow gap-6 w-[88%] rounded-xl">
        <div className="w-[70%] lg:w-[20%] rounded-full overflow-hidden ">
          <img
            className="w-full h-full hover:scale-110"
            src={profilePicture}
            alt="profile picture"
          />
        </div>
        <div className="w-[98%] lg:w-[70%]">
          <p className="text-black text-[1rem] text-center lg:text-xl lg:text-start mt-3 ">
            {data.about}
          </p>
          <div className=" flex justify-end items-center mt-8 lg:mt-3">
            <button
            onClick={()=>navigate("/about")}
              className="text-mianYellow bg-black py-2 px-6 rounded-md justify-self-end font-semibold"
              href="#"

            >
              More..
            </button>
          </div>
        </div>
      </section>
      {/* skills section  */}
      <section
        style={{
          background:
            "linear-gradient(170deg, #161b22 0%,#161b22 50%,#0d1117 51%,#0d1117 100%)",
        }}
        className="flex flex-col px-6 lg:px-20 lg:pt-14 lg:pb-16 lg:mt-10 w-[100%]"
      >
        <div className="flex flex-col gap-2">
          <h2 className="text-mianYellow font-Humane text-8xl text-center">
            Skills
          </h2>
          <p className="text-center">
            Here are some of my skills on which I have been working on for the
            past 4 years.
          </p>
        </div>
        {/* skills cards  */}
        <div className="flex justify-center lg:gap-[10%] flex-wrap pt-2">
          <SkillsContainer
            img={img}
            title="Frontend"
            skills={data.skills.front_end}
          />
          <SkillsContainer
            img={img}
            title="Backend"
            skills={data.skills.back_end}
          />
          <SkillsContainer img={img} title="Other" skills={data.skills.other} />
        </div>
      </section>
      {/* projects  */}
      <section className="flex flex-col lg:mx-20 mx-6  gap-10">
        <div className="flex items-center  bg-blackBlue p-10 rounded-xl   justify-between">
          <h2 className="font-Humane text-4xl lg:text-7xl">Recent Projects</h2>
          <Link
            className="text-sm lg:text-base font-semibold hover:scale-110 hover:text-mianYellow group"
            to="/projects"
          >
            See All
            <FontAwesomeIcon
              className="group-hover:translate-x-2"
              icon={faArrowRight}
            />{" "}
          </Link>
        </div>
        {/* project cards  */}
        <div className="flex flex-wrap justify-between">
          {data.projects.slice(0, 3).map((data) => {
            return (
              <ProjectCard
                key={data.project_name}
                projectImg={projectImg}
                projetData={data}
              />
            );
          })}
        </div>
      </section>
      {/* education section  */}
      <section
        style={{
          background:
            "linear-gradient(170deg, black 0%,black 50%,#161b22 51%,#161b22 100%)",
        }}
        className="flex flex-col justify-center items-center gap-8 py-20 w-[100%]"
      >
        <h2 className="font-Humane text-8xl text-mianYellow">Education</h2>
        <p className="text-lg w-[90%] lg:w-[50%] text-center">
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </p>
        {/* degree  */}
        {data.education.slice(0, 2).map((eduData,key) => {
          return <EducationCard key={key}  eduData={eduData} />;
        })}
      </section>
      {/* get in touch  */}
      <section className="mt-16 lg:mt-0 px-12 py-8 flex flex-wrap items-center justify-between bg-mianYellow gap-6 w-[88%] rounded-xl">
        <div className="w-[100%] lg:w-[25%]  overflow-hidden ">
          <h2 className="font-Humane text-6xl lg:text-8xl text-black">
            Get in Touch
          </h2>
          <p className="text-black text-[0.6rem] text-center ">
            If you are interested in my work or want to provide feedback about
            this website, I am open to exchanging ideas .
          </p>
        </div>

        <div className="w-[98%] lg:w-[25%] text-black flex justify-between">
          <Link to="https://www.linkedin.com/in/vishal-bhatia-v033/" target="_blank" className="hover:scale-105">
            <FontAwesomeIcon
              className="h-10 w-10 lg:h-20 lg:w-20"
              icon={faLinkedin}
            />
          </Link>
          <Link to="https://www.instagram.com/_vishal_033/profilecard/?igsh=ZXQ3Y3oyN3NpZzE4" target="_blank" className="hover:scale-105">
            <FontAwesomeIcon
              className="h-10 w-10 lg:h-20 lg:w-20"
              icon={faInstagram}
            />
          </Link>
          <Link to="https://github.com/VishalBhatia033" target="_blank" className="hover:scale-105">
            <FontAwesomeIcon
              className="h-10 w-10 lg:h-20 lg:w-20"
              icon={faGithub}
            />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Main;
