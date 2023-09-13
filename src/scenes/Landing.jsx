import React from "react";
import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ProfilePic from "../assets/ProfilePic.jpg";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
    >
      {/* Image Area */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveMediumScreen ? (
          <div className="relative z-0 ml-[48px] before:absolute before:-top-20 before:-left-20 before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-blue before:z-[-1]">
            {/* <img
                className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[400px]"
                src={ProfilePic}
                alt="profile"
              /> */}
            <div className=" absolute bottom-10 w-[400px] h-full border-2 border-red"></div>
            <img
              className=" relative ml-20 w-full max-w-[400px] md:max-w-[400px] h-full hover:filter hover:saturate-200 transition duration-500 z-10 "
              src={ProfilePic}
              alt="profile"
            />
          </div>
        ) : (
          <img
            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[400px]"
            src={ProfilePic}
            alt="profile"
          />
        )}
      </div>
      {/* Main Section */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* Headings */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-index text-center md:text-start">
            Hew {""}
            <span className=" whitespace-nowrap overflow-hidden font-playfair xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-testp before:absolute xs:before:-left-[35px] md:before:-left-[5px] before:-top-[195px] before:w-[400px] before:z-[-1]">
              ZhongXuan
            </span>
          </p>
          <p className="mt-12 mb-7 text-sm text-center md:text-start">
            Looking forward to a Digital Lifestyle. A place where i can showcase
            my work. Follow me to have a look at my journey!
          </p>
        </motion.div>
        {/* calls to action */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Find me here!
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center font-playfair px-10">
              Let&apos;s talk.
            </div>
          </AnchorLink>
        </motion.div>
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
