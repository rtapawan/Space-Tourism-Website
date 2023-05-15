import "./Technology.scss";
import { motion, AnimatePresence } from "framer-motion";
import data from "../../data.json";
import { useState } from "react";

const Technology = () => {
  const [technology, setTechnology] = useState(0);
  const [isSelected, setIsSelected] = useState(data.technology[0]);

  const techData = data.technology[technology];

  return (
    <div className="technology-container">
      <div className="technology-title">
        <span>03</span>
        <h1>space launch 101</h1>
      </div>

      <div className="tech-info">
        <div className="tech-detail">
          <div className="tech-tabs">
            {data.technology.map((tech, index) => (
              <button
                key={tech.name}
                onClick={() => {
                  setTechnology(index);
                  setIsSelected(tech);
                }}
                className={technology === index ? "active" : ""}
              >
                {index === 0 ? "1" : index === 1 ? "2" : index === 2 ? "3" : ""}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={isSelected.name}
              variants={InfoAnimation}
              initial="hidden"
              animate={isSelected.name === techData.name ? "show" : "hidden"}
              exit="hidden"
              className="tech-bio"
            >
              <span>The Terminology...</span>
              <h1>{techData.name}</h1>
              <p>{techData.description}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="tech-img">
          <picture>
            <source
              media="(max-width: 430px)"
              srcSet={techData.images.landscape}
            />
            <source
              media="(min-width: 768px) and (max-width: 1180px)"
              srcSet={techData.images.landscape}
            />
            <AnimatePresence mode="wait">
              <motion.img
                key={isSelected.name}
                variants={ImgAnim}
                initial="hidden"
                animate={isSelected.name === techData.name ? "show" : "hidden"}
                exit="hidden"
                src={techData.images.portrait}
                alt={techData.name}
              />
            </AnimatePresence>
          </picture>
        </div>
      </div>
    </div>
  );
};

const InfoAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const ImgAnim = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default Technology;
