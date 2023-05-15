import "./Home.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <main className="home-container">
      <div className="home-content">
        <motion.div
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          className="home-text"
        >
          <h1>so, you want to travel to</h1>
          <h2>space</h2>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </motion.div>
        <div className="home-explore">
          <Link to="/destination">
            <motion.div
              whileInView={{ rotate: [180, 0], scale: [0, 1] }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className="circle"
            >
              <h3>explore</h3>
            </motion.div>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
