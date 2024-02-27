import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
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
            I'm Yogesh C.K
          </h2>
          <h2 className="text-4xl sm:text-7xl font-bold text-black">
            Fullstack developer Chennai, India
          </h2>
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
       
          </div>
    
        </div>
      </div>
    </div>
    
  );
};

export default Home;
