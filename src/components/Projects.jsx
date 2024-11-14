import React from "react";
import ProjectCard from "./ProjectCard";
import { useSelector } from "react-redux";
import { covid, resturant,weather,passwordGenerator,todo,movieTicketBooking,SRS } from "./images";
function Projects() {
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
  return (
    <section className="flex flex-col items-center">
      <div className="rounded-lg flex justify-center items-center uppercase font-Humane text-6xl bg-blackBlue p-5 w-[90%]">
        Projects
      </div>
      <section className="flex flex-col lg:mx-20 mx-6  gap-10">
        {/* project cards  */}
        <div className="flex flex-wrap justify-between">
          {/* card 1  */}
          {data.projects.map((data) => {
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
    </section>
  );
}

export { Projects };
