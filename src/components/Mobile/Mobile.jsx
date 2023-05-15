import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./Mobile.scss";

const Mobile = ({ toggle }) => {
  const { pathname } = useLocation();

  return (
    <motion.nav
      variants={NavAnimation}
      initial="hidden"
      animate={toggle ? "show" : "hidden"}
      exit="hidden"
      className="mobile-nav-container"
    >
      <ul>
        <li>
          <Link
            to="/Space-Tourism-Website/"
            className={pathname === "/Space-Tourism-Website/" ? "active" : ""}
          >
            <span>00</span> Home
          </Link>
        </li>
        <li>
          <Link
            to="/Space-Tourism-Website/destination"
            className={
              pathname === "/Space-Tourism-Website/destination" ? "active" : ""
            }
          >
            <span>01</span> Destination
          </Link>
        </li>
        <li>
          <Link
            to="/Space-Tourism-Website/crew"
            className={
              pathname === "/Space-Tourism-Website/crew" ? "active" : ""
            }
          >
            <span>02</span> Crew
          </Link>
        </li>
        <li>
          <Link
            to="/Space-Tourism-Website/technology"
            className={
              pathname === "/Space-Tourism-Website/technology" ? "active" : ""
            }
          >
            <span>03</span> Technology
          </Link>
        </li>
      </ul>
    </motion.nav>
  );
};

const NavAnimation = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
  transition: {
    duration: 0.75,
    ease: "easeInOut",
  },
};

export default Mobile;
