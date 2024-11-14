import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
function ProjectCard({ projectImg, projetData }) {
  return (
    <div className="z-20 mt-10 relative overflow-hidden p-[1px] rounded-2xl w-[100%] h-[100%] lg:w-[47%] hover:-translate-y-3  border-2 border-gray-900">
      <div class="-z-20 animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#d5ff3f_20deg,transparent_120deg)]"></div>

      <div className="flex flex-wrap z-20 bg-black rounded-2xl p-3  flex-col gap-4 w-[100%]">
        <div className="overflow-hidden rounded-xl ">
          <img
            className="w-full h-full"
            src={projectImg[`${projetData.project_image}`]}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <div className="flex flex-wrap gap-3 text-[0.7rem]">
            {projetData.technologies_used.map((skill) => {
              return (
                <div
                  key={skill}
                  className="bg-blackBlue px-3 py-1 rounded-lg text-mianYellow"
                >
                  {skill}
                </div>
              );
            })}
          </div>
          <h3 className="text-start font-extrabold text-2xl flex justify-between items-center">
            <span>{projetData.project_name}</span>
            <span>
              <Link to={projetData.project_url} target="_blank" >
                <FontAwesomeIcon icon={faGithub} />
              </Link>
            </span>
          </h3>
          <p className="text-mianYellow text-sm text-start">Wev Application</p>
          <p className="text-start text-[0.7rem] ">
            {projetData.project_description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
