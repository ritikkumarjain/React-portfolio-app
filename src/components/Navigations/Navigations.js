import "./Navigations.css";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';


export default function App() {
    return (
        <>
            <motion.div
                className="navigations"
                initial={{ y: -500 }}
                animate={{ y: 0 }}
                transition={{ duration: 2.4 }}
            >
                <motion.ul className="list">


                    <motion.li
                        className="navigations-list text-white"
                        whileHover={{
                            scale: 1.1,
                            boxShadow: "0px 4px 15px rgb(252,246,246)",
                        }}
                        whileTap={{ scale: 0.9 }}
                    >

                        <Link className="link" to="/projects">
                            <button className="button">
                                Projects
                            </button>
                        </Link>


                    </motion.li>


                    <motion.li
                        className="navigations-list text-white"
                        whileHover={{
                            scale: 1.1,
                            boxShadow: "0px 4px 15px rgb(252,246,246)",
                        }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Link className="link" to="/skills">
                            <button className="button">
                                Skills
                            </button>
                        </Link>

                    </motion.li>


                    <motion.li
                        className="navigations-list text-white"
                        whileHover={{
                            scale: 1.1,
                            boxShadow: "0px 4px 15px rgb(252,246,246)",
                        }}
                        whileTap={{ scale: 0.8 }}
                    >
                        <Link className="link" to="/work-experience">
                            <button className="button">
                                Work Experience
                            </button>
                        </Link>
                    </motion.li>

                </motion.ul>

                <motion.hr
                    className="horizontal-line"
                    initial={{ y: -1000 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.8 }}
                />

            </motion.div>
        </>
    );
}
