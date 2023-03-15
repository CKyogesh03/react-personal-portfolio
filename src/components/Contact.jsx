import React from "react";
import { Link } from "react-scroll";
import {  MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const Contact = () => {
  const links= [
      {
      id : 1,
      socialmedia : "LinkedIn",
      href : "http://linkedin.com/in/yogesh-ck",
      },
      {
        id : 2,
        socialmedia : "GitHub",
        href : "https://github.com/CKyogesh03",
      },
      {
          id : 3,
          socialmedia : "Email",
          href : "mailto:yogeshlogan333@gmail.com",
      },
   ];
  return (
    <div
      name="contact"
      className="w-full h-fit bg-gradient-to-b from-white to-blue-200   p-4 text-black"
    >
      <div className="flex flex-col p-2 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <h2 className="py-6"> Let's Work Together - If You Give Me a Chance</h2>
        </div>

        <div className=" flex justify-start items-center">
          
        </div>

         
          
        
        <div  className="flex flex-row gap-5 ">
         {links.map(({id,socialmedia,href})=> (
         
         <div key={id} ><a href= {href} target="_blank" rel="noreferrer" >{socialmedia}</a>
         </div>
        ))}
        </div>
         
        <div className="flex justify-end">
            <Link
              to="home"
              smooth
              duration={500}
              className=" text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Scroll up
              <span className=" ">
                <MdOutlineKeyboardDoubleArrowUp size={25} className="ml-1" />
              </span>
            </Link>
          </div>
      </div>
    </div>
  );
};

export default Contact;
