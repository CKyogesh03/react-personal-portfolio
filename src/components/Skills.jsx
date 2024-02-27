import React from "react";

import { FaGithub, FaJava, FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import {SiHibernate, SiMysql, SiSpringboot} from "react-icons/si"
import {IoLogoJavascript} from "react-icons/io"
const Skills = () => {
   

  return (
    <div
      name="skills"
      className="bg-gradient-to-b  from-white to-blue-200 w-full h-fit"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-black">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I know</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            
           
            <div
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-orange-500`}
            >
              <>
              <FaHtml5 size={30} />
              </>
              <p className="mt-4">HTML</p>
            </div>

            
            <div
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-500`}
            >
              <>
              <FaCss3 size={30} />
              </>
              <p className="mt-4">CSS</p>
            </div>

            
            <div
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-yellow-500`}
            >
              <>
              <IoLogoJavascript size={30} />
              </>
              <p className="mt-4">Java Script</p>
            </div>

            <div
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-500`}
            >
              <>
              <FaReact size={30} />
              </>
              <p className="mt-4">React JS</p>
            </div>

            <div
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-yellow-500`}
            >
              <>
              <FaJava size={30} />
              </>
              <p className="mt-4">Java</p>
            </div>

            <div
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-green-500`}
            >
              <p className="mt-4">Spring</p>
     
            </div>

            <div
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-red-500`}
            >
              <>
              <SiSpringboot size={30} />
              </>
              <p className="mt-4">Spring Boot</p>
              
            </div>

            <div
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-yellow-700`}
            >
              <>
              <SiHibernate size={30} />
              </>
              <p className="mt-4">Hibernate</p>
            </div>

            <div
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-800`}
            >
              <>
              <SiMysql size={30} />
              </>
              <p className="mt-4">MySql</p>
            </div>

            <div
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-gray-500`}
            >
              <>
              <FaGithub size={30} />
              </>
              <p className="mt-4">GitHub</p>
            </div>
        
        </div>
      </div>
    </div>
  );
};

export default Skills;
