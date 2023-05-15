import "./Destination.scss";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import data from "../../data.json";

const Destination = () => {
  const [activeplanet, setActivePlanet] = useState(0);
  const [isSelected, setIsSelected] = useState(data.destinations[0]);

  const dataDestination = data.destinations[activeplanet];

  return (
    <div className="destination-container">
      <div className="destination-title">
        <span>01</span>
        <h1>pick your destination</h1>
      </div>

      <div className="planets-info">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.8 }}
          className="planet-img"
        >
          <motion.img
            whileInView={{ rotate: [0, 360] }}
            transition={{ ease: "linear", duration: 10, repeat: Infinity }}
            src={dataDestination.images.webp}
            alt={dataDestination.name}
          />
        </motion.div>

        <motion.div
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.8 }}
          className="planets-detail"
        >
          <div className="tabs-menu">
            {data.destinations.map((destination, index) => (
              <button
                className={activeplanet === index ? "active" : ""}
                key={destination.name}
                onClick={() => {
                  setActivePlanet(index);
                  setIsSelected(destination);
                }}
              >
                {destination.name}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isSelected.name}
              variants={tabAnimation}
              initial="hidden"
              animate={
                isSelected.name === dataDestination.name ? "show" : "hidden"
              }
              exit="hidden"
              className="planet-facts"
            >
              <h1>{dataDestination.name}</h1>
              <p>{dataDestination.description}</p>
              <hr />
              <div className="planet-stats">
                <div className="stat">
                  <h2>avg. distance</h2>
                  <h3>{dataDestination.distance}</h3>
                </div>
                <div className="stat">
                  <h2>avg. travel time</h2>
                  <h3>{dataDestination.travel}</h3>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

const tabAnimation = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

export default Destination;
