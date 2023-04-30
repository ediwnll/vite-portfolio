import React from "react";
import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import skills from "../assets/skills-image.png";

const MySkills = () => {
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");
  return (
    <section id="about" className="pt-10 pb-32">
      {/* Header and Image Section */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
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
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-2/5" />
          <p className="mt-10 mb-7">
            I'm a prospective web developer with a background in Information
            Technology and a passion for building websites and applications.
          </p>
        </motion.div>
        <div className=" mt-8 md:mt-0">
          {isAboveMediumScreen ? (
            <div className="relative z-0 ml-[48px] before:absolute before:-top-10 before:-left-10 before:w-full before:max-w-[1000px] before:h-full before:border-2 before:border-blue before:z-[-1]">
              <div className=" absolute bottom-5 left-[-20px] h-full border-2 min-w-full border-red"></div>
              <img
                className="relative min-w-full z-50"
                src={skills}
                alt="skills"
              />
            </div>
          ) : (
            <img className="z-10 " src={skills} alt="profile" />
          )}
        </div>
        {/* Skills Section */}
      </div>
      <div className="flex flex-col md:flex-row md:justify-between mt-16 gap-32 mb-16">
          {/* Experience */}
          <motion.div
            className=" md:w-1/3 mt-10"
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
                y: 50,
              },
            }}
          >
            <div className=" relative h-32">
                <div className="z-10">
                    <p className=" font-playfair font-semibold text-5xl">01</p>
                    <p className="font-playfair font-semibold text-3xl mt-3">Experience</p>
                </div>
                <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]">
                </div>
                <p className=" mt-10">
                    Consist of experiences from school and personal projects that i have done during my time in the past. Other than Frontend Development, I have also touched on database management and some form of data analytics.
                </p>
            </div>
          </motion.div>
          {/* Fast Learner */}
          <motion.div
            className="md:w-1/3 mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay:0.2, duration: 0.5 }}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
              },
              hidden: {
                opacity: 0,
                y: 50,
              },
            }}
          >
            <div className="flex flex-col relative h-32">
                <div className="z-10">
                    <p className=" font-playfair font-semibold text-5xl">02</p>
                    <p className="font-playfair font-semibold text-3xl mt-3">Fast Learner</p>
                </div>
                <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]">
                </div>
                <p className=" mt-10">
                    I've picked up multiple languages such as HTML, CSS, Javascript, React and Python and touched on many frameworks. I take this chance to broaden my knowledge and find somethign that is for me.
                </p>
            </div>
          </motion.div>
          {/* Experience */}
          <motion.div
            className="md:w-1/3 mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay:0.4, duration: 0.5 }}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
              },
              hidden: {
                opacity: 0,
                y: 50,
              },
            }}
          >
            <div className="flex flex-col relative h-32">
                <div className="z-10">
                    <p className=" font-playfair font-semibold text-5xl">03</p>
                    <p className="font-playfair font-semibold text-3xl mt-3">Team Player</p>
                </div>
                <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]">
                </div>
                <p className=" mt-10">
                    Working in a team has allowed me to understand that every teammate is crucial for success. This had taught me to be emphathetic to people around me and to work efficiently as a team
                </p>
            </div>
          </motion.div>
        </div>
    </section>
  );
};

export default MySkills;
