import pic from "../images/pic.jpg";
import gif from "../images/gif.webp";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useReducedMotion } from "framer-motion";

const AboutMe = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start("visible");
    }
  }, [isVisible, controls]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: shouldReduceMotion ? "tween" : "spring",
        damping: shouldReduceMotion ? 10 : 20,
      },
    },
  };

  return (
    <div
      id="aboutMe"
      className="bg-zinc-900 w-full mx-auto flex flex-col items-center p-4"
    >
      <motion.div
        ref={sectionRef}
        className="text-center mb-12"
        initial="hidden"
        animate={controls}
        variants={sectionVariants}
      >
        <h2 className="text-zinc-400 font-mono font-bold text-3xl md:text-4xl">
          About Me
        </h2>
        <div className="w-20 h-1 border-b-4 border-yellow-400 mt-2 rounded mx-auto"></div>
        <div className="flex mt-10 flex-col md:flex-row w-full max-w-6xl gap-8">
          <motion.div
            className="bg-zinc-800 flex justify-center items-center rounded-lg w-full md:w-1/3 p-4"
            variants={itemVariants}
          >
            <img
              className="rounded-full w-42 h-44"
              src={pic}
              alt="Muhammad Owais"
            />
          </motion.div>

          <motion.div
            className="bg-zinc-800 p-8 rounded-lg w-full md:w-2/3"
            variants={itemVariants}
          >
            <div className="flex flex-row gap-1 items-center mb-4">
              <h1 className="text-2xl text-green-400 font-medium">Hi</h1>
              <img src={gif} className="h-8" alt="waving hand" />
              <h1 className="md:text-2xl text-lg text-green-400 font-medium">
                I am <span className="text-white">Muhammad Owais</span>
              </h1>
            </div>
            <p className="text-custom-green text-start font-serif text-lg mb-3">
              A web developer with a knack for turning problems and
              opportunities into user-driven strategic solutions.
            </p>
            <p className="text-custom-green text-start font-serif text-lg">
              As a web developer, I specialize in creating unique, functional
              websites and applications. I believe that a great project starts
              with common values, open communication, and respect for your
              users.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
