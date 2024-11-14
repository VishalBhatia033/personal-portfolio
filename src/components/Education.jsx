import React from "react";
import EducationCard from "./EducationCard";
import { useSelector } from "react-redux";

function Education() {
  const data = useSelector((state) => state.myData.userData);
  console.log(data.education)
  return (
    <section
      style={{
        background:
          "linear-gradient(170deg, black 0%,black 50%,#161b22 51%,#161b22 100%)",
      }}
      className="flex flex-col justify-center items-center gap-8 py-20 pt-10"
    >
      <h2 className="font-Humane text-8xl text-mianYellow">Education</h2>
      <p className="text-lg w-[90%] lg:w-[50%] text-center">
        My education has been a journey of self-discovery and growth. My
        educational details are as follows.
      </p>
      {/* degree 1 */}
      {data.education.map((eduData, key) => {
        return <EducationCard key={key} eduData={eduData} />;
      })}
    </section>
  );
}

export { Education };
