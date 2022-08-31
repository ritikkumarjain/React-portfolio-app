import { motion } from "framer-motion";
import "../../components/Introduction/Introduction.css";

export default function About() {
  return (
    <>
      <motion.div className="section-1">
        <motion.div
          className="upper-box text-white"
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <motion.p
            className="lead para1 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 2 }}
          >
            Hi, I am
          </motion.p>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 2 }}
          >
            Ritik
          </motion.h1>
          <motion.p
            className="lead para2 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 2 }}
          >
            Kumar Jain
          </motion.p>
        </motion.div>
        <motion.div
          className="lower-box text-dark"
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <motion.p
            className="lead paragraph"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 2 }}
          >
            A description about me
          </motion.p>
        </motion.div>
      </motion.div>
    </>
  );
}
