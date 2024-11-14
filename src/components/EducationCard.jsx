import React from "react";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function EducationCard({eduData}) {
  return (
    <div
      style={{ boxShadow: "#d5ff3f 0px 4px 10px" }}
      className="relative hover:-translate-y-2 border border-zinc-100 w-[75%] lg:w-[50%] rounded-lg p-5 text-start"
    >
      <div className="absolute top-0 -right-8 border-2 border-mianYellow rounded-full h-3 w-3"></div>
      <div className="absolute top-5 -right-7  bg-mianYellow h-[100%] w-[0.1rem]"></div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-3 items-center">
          <div>
            <FontAwesomeIcon
              className="text-4xl text-mianYellow"
              icon={faGraduationCap}
            />
          </div>
          <div>
            <h3 className="font-bold text-lg lg:text-xl">
              {eduData.institution_name}
            </h3>
            <p className="text-[0.7rem] lg:text-sm text-gray-400 font-bold">
              {eduData.type}
            </p>
            <p className="text-[0.6rem] lg:text-[0.7rem] text-gray-400">
              {eduData.year}
            </p>
          </div>
        </div>
        <p className="text-[0.7rem] lg:text-[0.8rem] font-bold text-gray-400">
          CGPA:{eduData.grade}
        </p>
        <p className="text-[0.8rem] lg:text-[0.9rem] text-gray-400">
          {eduData.about}
        </p>
      </div>
    </div>
  );
}

export default EducationCard;
