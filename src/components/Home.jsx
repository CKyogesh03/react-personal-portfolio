import React from "react";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-white via-white to-blue-200"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-black">
            Hello 
          </h2>
          <h2 className="text-4xl sm:text-7xl font-bold text-black">
            I'm Yogesh - curios
          </h2>
          <h2 className="text-4xl sm:text-7xl font-bold text-black">
            developer  based in Chennai, India
          </h2>
          <h1 className="font-bold">Learning Java Full Stack Development</h1>
          <p className="text-gray-500 py-4 max-w-md">
            I have completed 3 months web development internship, I love to learn web applications and new technologies.
          </p>
          <div className="flex flex-row gap-6">
          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
          <div>
              <a
              href="/YOGESH_CK_resume.pdf"
              className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-green-500 to-green-500 cursor-pointer"
              download= "YOGESH_CK_resume.pdf"
            >
              Resume
            </a>
              
            {/* </Link> */}
          </div>
          </div>
          <div>
            <Link
              to="contact"
              smooth
              duration={500}
              className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Scroll down
              <span className="">
                <MdOutlineKeyboardDoubleArrowDown size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Home;