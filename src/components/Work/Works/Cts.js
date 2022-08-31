import Cognizant from "../../../assests/images/cogni.jpg";
import { motion } from "framer-motion";

export default function CTS(props) {

    return (
        <div className="work-section-container" style={{ borderColor: `${props.lightColor}` }}>
            <div className="work-section-container-image">
                <img src={Cognizant} alt="CognizantLogo" className="logo-size" />
            </div>
            <div className="work-section-container-info">
                <div className="work-section-container-title">
                    <header className="work-section-container-header" >
                        <h4 style={{ color: `${props.darkColor}` }} >Cognizant</h4>

                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            class="bi bi-link"
                            viewBox="0 0 16 16"
                            style={{cursor: "pointer"}}
                            
                            whileHover={{
                                scale: 1.3,
                            }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
                            <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
                        </motion.svg>
                    </header>

                    <p style={{ color: `${props.darkColor}` }}>
                        Job Title: Programmer Analyst Intern, FTE(Upcoming 2022)
                        <br />
                        Date of Working: March 2022 - August 2022
                    </p>
                    <p style={{ color: `${props.darkColor}` }}>
                        Job Description:
                        <br />
                        <ul>
                            <li>Learnt new tools/technologies - C#,.NET,EntityFramework, ASP.NET, AWS, React, WebAPI</li>
                            <li>Followed a systematic way of learning with Assessment at every stage of learning</li>
                            <li>Worked in a team for successful implementation of MFPE project - Policy Administration System</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    );
}