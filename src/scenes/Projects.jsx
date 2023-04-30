import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container={
  hidden:{},
  visible:{
    transition:{staggerChildren: 0.1}
  }
}

const projectVariant = {
  hidden:{opacity: 0, scale:0.8},
  visible:{
    opacity: 1,
    scale: 1,
  }
}
// create a list of projects


const convert = "project-1"
const Project = ({title,subtitle})=>{
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`
  const projectTitle = title.toLowerCase();

  return(
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{subtitle}</p>
      </div>
      <img className="" src={`./${projectTitle}.png`} alt={projectTitle} />
    </motion.div>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* Headings */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
          },
          hidden: {
            opacity: 0,
            y: -50,
          },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3"/>
          </div>
        </div>
        <p className="mt-10 mb-7">
          Projects that I have done and learn from. Keeps track of my journey and helps me improve myself.
        </p>
      </motion.div>
      {/* Projects */}
      <div className="flex justify-center">
      <motion.div
        className="sm:grid sm:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
      >
        <div className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">Exciting User Interfaces</div>
        <Project title="Donut" subtitle="My first react webpage that i've created"/>
        <Project title="BBDC Booking Bot" subtitle="A bot written in python to book appointments under BBDC (Changing it to a telegram bot)"/>
        {/* Row 2 */}
        <Project title="Tracking List" subtitle="A HTML,CSS and Javascript project that works like a to do list with slightly more functions"/>
        <Project title="Weather App" subtitle="A weather app that uses OpenWeatherAPI (Re-designing the UI)"/>
        <Project title="Paint" subtitle="A mini project I created that consist features of Paint"/>
        {/* Row 3 */}
        <Project title="Ai Blog Content" subtitle="This application is still being developed"/>
        <Project title="Cat" subtitle="This is a placeholder for an upcoming project"/>
        <div className="flex justify-center text-center items-center p-10 bg-blue max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">Exciting User Interfaces</div>
      </motion.div>
      </div>
    </section>
  );
};

export default Projects;
