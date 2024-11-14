import React from "react";
function SkillsContainer({img,skills,title }) {
  
  return (
    <div
      style={{ boxShadow: "#d5ff3f 0px 2px 5px" }}
      className="mt-12 w-[100%] lg:w-[40%] border border-mianYellow rounded-2xl p-5  "
    >
      <h2 className="text-center font-bold text-3xl">{title}</h2>
      <div className="flex flex-wrap p-6 justify-center gap-3">
        {skills.map((data) => {
          return (
            <div key={data.skill} className="flex items-center justify-center border border-gray-700 py-[6px] px-[12px] gap-2 rounded-xl">
              <img className="h-7 w-7" src={img[`${data.image}`]} alt="" />
              <p className="text-sm m-0 p-0">{data.skill}</p>
            </div>
          );
        })}
      </div>
    </div> 
  );
}

export default SkillsContainer;
