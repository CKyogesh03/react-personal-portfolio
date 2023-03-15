import React from "react";
import employeeManagement from "../images/employeeManagement.jpg";
import personalPortfolio from "../images/personalPortfolio.jpg";
import libraryapp from "../images/libraryapp.jpg";


const Project = () => {
  const projects = [
    {
      id: 1,
      src: employeeManagement,
      project: "Employee crud",
      // view: "code",
    },
    {
      id: 2,
      src: personalPortfolio,
      project: "Portfolio",
      // view:"demo",
    },
    {
      id: 3,
      src: libraryapp,
      project: "Library app",
      // view:"Development inprogress",
    },
    
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b  from-blue-200 to-white w-full text-black md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src,project}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                
                <button className="w-fit px-6 py-3 m-4 duration-200 hover:scale-105">
                  {project}
                </button>
                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  {view}
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
