import "./Navigations.css";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';


export default function App(props) {
    return (
        <>
            <motion.div
                className="navigations"
            >
                <motion.ul className="list">


                    <motion.li
                        className="navigations-list text-white"
                        whileHover={{
                            scale: 1.1,
                            boxShadow: `0px 4px 15px ${props.lightColor}`,
                        }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Link className="link" to="/projects">
                            <button className="button" style={{ backgroundColor: `${props.lightColor}`, color: `${props.darkColor}` }}>
                                Projects
                            </button>
                        </Link>
                    </motion.li>


                    <motion.li
                        className="navigations-list text-white"
                        whileHover={{
                            scale: 1.1,
                            boxShadow: `0px 4px 15px ${props.lightColor}`,
                        }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Link className="link" to="/skills">
                            <button className="button" style={{ backgroundColor: `${props.lightColor}`, color: `${props.darkColor}` }}>
                                Skills
                            </button>
                        </Link>

                    </motion.li>


                    <motion.li
                        className="navigations-list text-white"
                        whileHover={{
                            scale: 1.1,
                            boxShadow: `0px 4px 15px ${props.lightColor}`,
                        }}
                        whileTap={{ scale: 0.8 }}
                    >
                        <Link className="link" to="/">
                            <button className="button" style={{ backgroundColor: `${props.lightColor}`, color: `${props.darkColor}` }}>
                                Home
                            </button>
                            
                        </Link>
                    </motion.li>


                </motion.ul>



            </motion.div>
            <motion.hr
                className="horizontal-line"
                style={{
                    backgroundColor: `${props.lightColor}`
                }}
            />
        </>
    );
}
