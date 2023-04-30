import React from "react";
import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import useMediaQuery from "../hooks/useMediaQuery";

const Contact = () => {
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section id="contact" className=" py-48">
      {/* Headings */}
      <motion.div
        className="flex justify-end w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            FEEL FREE TO <span className="text-yellow">CONTACT ME</span>
          </p>
          <div className=" flex md:justify-end my-5">
            {isAboveMediumScreen?(
                <LineGradient width="w-2/4" />
            ): (<LineGradient width="w-full" />)}
            
          </div>
        </div>
      </motion.div>
      {/* Form and Image */}
      <div className="md:flex md:justify-between gap-16 mt-5">
        {/* Image Div */}
        <motion.div
          className="basis-1/2 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {isAboveMediumScreen ? (
            <div className=" bottom-20 relative z-0 ml-[56px] before:absolute before:-top-10 before:-right-10 before:w-full before:max-w-[1000px] before:h-full before:border-2 before:border-blue before:z-[-1]">
              <div className=" absolute bottom-5 right-[-20px] h-full border-2 min-w-full border-red"></div>
              <img
                className=" max-w-[600px] max-h-[600px] z-50 relative"
                src="./contactme.jpg"
                alt="contactme"
              />
            </div>
          ) : (
            <img
              className=" max-w-[600px] max-h-[600px] z-50 relative"
              src="./contactme.jpg"
              alt="contactme"
            />
          )}
        </motion.div>
        <motion.div
          className="basis-1/2 mt-10 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <form
            action="https://formsubmit.co/hewzhongxuan6f@gmail.com"
            target="_blank"
            onSubmit={onSubmit}
            method="POST"
          >
            <input
              className=" w-full bg-blue font-semibold placeholder-opaque-black p-3"
              type="text"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: {
                  value: 100,
                  message: "Name must be less than 100 characters",
                },
              })}
            />
            {errors.name && (
              <p className="text-red-500 mt-1 text-sm">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" &&
                  "Max length is 100 characters"}
              </p>
            )}
            <input
              className=" w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
              type="email"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 mt-1 text-sm">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address"}
              </p>
            )}
            <textarea
              className=" w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder="MESSAGE"
              rows="4"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: {
                  value: 2000,
                  message: "Message must be less than 2000 characters",
                },
              })}
            />
            {errors.message && (
              <p className="text-red-500 mt-1 text-sm">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 characters"}
              </p>
            )}
            <button
              type="submit"
              className="p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500"
            >
              SEND ME A MESSAGE
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
