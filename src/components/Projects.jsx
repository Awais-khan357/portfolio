import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";
import { HiOutlineCalendar } from "react-icons/hi";
import { HiArrowUpRight } from "react-icons/hi2";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useReducedMotion } from "framer-motion";

function Projects() {
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
        threshold: 0.3,
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        type: shouldReduceMotion ? "tween" : "spring",
        damping: shouldReduceMotion ? 7 : 10,
        stiffness: 50,
      },
    },
  };

  return (
    <div
      id="projects"
      className="bg-zinc-900 text-white h-auto w-100 flex flex-wrap flex-col items-center text-center p-10"
    >
      <motion.div
        ref={sectionRef}
        className="h-auto w-full flex flex-wrap flex-col md:items-center text-center"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <p className="text-zinc-400 font-bold font-mono text-3xl md:text-4xl">
          Projects
        </p>
        <div className="w-20 h-1 md:ml-0 ml-28 border-b-4 border-yellow-400 mt-2 rounded mb-12"></div>
        <motion.div className="w-[85%] h-auto flex flex-wrap gap-3">
          <motion.div variants={itemVariants}>
            <ProComp
              img={project1}
              label="organization"
              description="Student card and library information system."
              date="June 17, 2024"
              demo="https://libraryuop.netlify.app/"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <ProComp
              img={project2}
              label="Entertainment"
              description="PopCorn is entertainment Project using React"
              date="August 05, 2024"
              demo="https://usepopcorn.netlify.app/"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <ProComp
              img={project3}
              label="Productivity"
              description="Essential todolist for small tasks productivity"
              date="April 8, 2024"
              demo="https://66e43935d75d2d00983c44ba--listbyme.netlify.app/"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Projects;

function ProComp({ img, label, description, date, demo }) {
  return (
    <div className="w-80 rounded-xl p-4 flex flex-col bg-zinc-800 h-auto text-left items-start mb-12">
      <img className="w-72 h-56 rounded-lg" src={img} alt="project1" />
      <button className="border-gray text-gray-400 border px-3 py-1 rounded mt-3 hover:bg-white hover:text-black">
        {label}
      </button>
      <p className="text-white mt-3 text-2xl text-justify">{description}</p>
      <div className="mt-2 text-gray-400 text-lg font-base flex flex-row">
        <HiOutlineCalendar className="mt-1 mr-3 font-medium text-xl" />
        <span>{date}</span>
        <a
          className="ml-12 font-medium underline flex"
          target="_blank"
          href={demo.startsWith("http") ? demo : `https://${demo}`}
          rel="noopener noreferrer"
        >
          Demo <HiArrowUpRight className="ml-1 mt-1" />
        </a>
      </div>
    </div>
  );
}
