import React from "react";
const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white ">
            Hi, I'm Abhinav Guddu.
            <br className="hidden lg:inline-block " />I build projects to learn
            how code works.
          </h1>
          <p className="mb-8 leading-relaxed">
            Front-end developer with primary focus on Software Development, Web
            Applications and API's.<br></br>Want to further enhance my skills in
            Progressive Web Applications and making accessibility enabled
            tools/apps.<br></br>While I am not coding, I enjoy reading comics book,
            solving puzzles, and making videos for the youtube.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:full w-full">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./displaypicss.png"
          />
        </div>
      </div>
    </section>
  );
};

export default About;