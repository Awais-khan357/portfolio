import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-scroll";
import img from "./images/mine.jpg";
const Content = () => {
  const shouldReduceMotion = useReducedMotion();
  const imageVariants = {
    hidden: { x: -80, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const textVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };
  return (
    <section
      id="home"
      className="bg-zinc-900 text-white pt-6 md:mt-[83px] border-t-2 border-zinc-600 md:h-[520px] flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-8"
    >
      <motion.div
        className="flex justify-around md:block mt-8 md:mt-0 md:flex-none w-[64] md:mr-14"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
        transition={{
          duration: 1.0,
          delay: 0.4,
          type: shouldReduceMotion ? "tween" : "spring",
          damping: shouldReduceMotion ? 10 : 20,
        }}
      >
        <div className="relative">
          <img
            src={img}
            className="w-80 rounded-full border-[18px] border-zinc-800"
            alt="picture"
          />
        </div>
      </motion.div>
      <motion.div
        className="md:flex-1 md:mt-0 mb-14 mt-9"
        initial="hidden"
        animate="visible"
        variants={textVariants}
        transition={{
          duration: 1.0,
          delay: 0.2,
          type: shouldReduceMotion ? "tween" : "spring",
          damping: shouldReduceMotion ? 10 : 20,
        }}
      >
        <span className="text-gray-300 font-serif text-base">
          Web Developer
        </span>
        <h1 className="text-4xl mb-4 font-mono text-custom-light font-semibold">
          Muhammad Owais
        </h1>
        <p className="font-medium text-justify text-gray-300 mb-7">
          Innovative software developer Specializing in building and
          (occasionally designing) exceptional digital experiences. Currently i
          am focused in Specializing responsive design and full-stack
          development. I deliver high-performance websites that drive engagement
          and exceed client expectations.
        </p>
        <div className="font-montserrat">
          <a href="/Owais-resume.pdf" download="Owais-resume.pdf">
            <button className="px-8 py-2 rounded-full border-2 hover:border-blue-700 border-white border-solid text-white mr-2 mb-2">
              Download CV
            </button>
          </a>
          <Link to="contact" spy="true" smooth="true" offset={0} duration={500}>
            <button className="px-8 py-2 rounded-full border-2  hover:border-blue-700 border-white border-solid text-white mr-2 mb-2">
              Contact
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Content;
