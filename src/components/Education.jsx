import React from "react";

const Education = () => {
  return (
    <div
      name="education"
      className="w-full h-fit bg-gradient-to-b from-blue-200 to-white text-black"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Education
          </p>
        </div>
       
        <p className="text-xl mt-20">
          <b>Master Of Computer Applications </b> | Guru Nanak College, Chennai, Tamil Nadu, India <br/>
          Nov 2020 - Jul 2022 <br/>
          Percentage: 84%
        </p>

        <br />

        <p className="text-xl">
          <b>B.Sc Computer Science </b> | Guru Nanak College, Chennai, Tamil Nadu, India <br/>
          Jun 2017 - Mar 2020  <br/>
          Percentage: 75%
        </p>

        <br/>
        <p className="text-xl">
        <b> XII </b> | Shveta Padmasani Matric Hr.Sec School, Gingee,Tamil Nadu, India <br/>
          Jun 2015 - Mar 2017  <br/>
          Percentage: 68%

        </p>

        <br/>
        <p className="text-xl">
        <b> X </b> | Shveta Padmasani Matric Hr.Sec School, Gingee,Tamil Nadu, India <br/>
          Jun 2013 - Mar 2015  <br/>
          Percentage: 91%

        </p>

      </div>
    </div>
  );
};

export default Education;
