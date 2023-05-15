import "./Crew.scss";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import data from "../../data.json";

const Crew = () => {
  const [activeCrew, setActiveCrew] = useState(0);
  const [isSelected, setIsSelected] = useState(data.crew[0]);

  const dataCrew = data.crew[activeCrew];

  return (
    <div className="crew-container">
      <div className="crew-title">
        <span>02</span>
        <h1>meet your crew</h1>
      </div>

      <div className="crew-info">
        <div className="crew-detail">
          <AnimatePresence mode="wait">
            <motion.div
              key={isSelected.name}
              variants={InfoAnimation}
              initial="hidden"
              animate={isSelected.name === dataCrew.name ? "show" : "hidden"}
              exit="hidden"
              className="crew-bio"
            >
              <h1>{dataCrew.role}</h1>
              <h2>{dataCrew.name}</h2>
              <p>{dataCrew.bio}</p>
            </motion.div>
          </AnimatePresence>

          <div className="tabs">
            {data.crew.map((crewPerson, index) => (
              <button
                key={crewPerson.name}
                onClick={() => {
                  setActiveCrew(index);
                  setIsSelected(crewPerson);
                }}
                className={activeCrew === index ? "active" : ""}
              ></button>
            ))}
          </div>
        </div>
        <div className="crew-avatar">
          <AnimatePresence mode="wait">
            <motion.img
              key={isSelected.name}
              variants={ImgAnim}
              initial="hidden"
              animate={isSelected.name === dataCrew.name ? "show" : "hidden"}
              exit="hidden"
              src={process.env.PUBLIC_URL + dataCrew.images.webp}
              alt={dataCrew.name}
            />
          </AnimatePresence>
          <hr />
        </div>
      </div>
    </div>
  );
};

const InfoAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
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

export default Crew;
