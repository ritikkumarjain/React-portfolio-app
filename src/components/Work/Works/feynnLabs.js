import Feynn from "../../../assests/images/feynn.jpg";
import { motion } from "framer-motion";
import Envelope from "../../../assests/images/envelope.svg";
export default function FeynnLabs(props) {

    return (
        <div className="work-section-container" style={{ borderColor: `${props.lightColor}` }}>
            <div className="work-section-container-image">
                <img src={Feynn} alt="FeynnLabsLogo" className="logo-size" />
            </div>
            <div className="work-section-container-info">
                <div className="work-section-container-title">
                    <header className="work-section-container-header">
                        <h4 style={{ color: `${props.darkColor}` }}>Feynn Labs</h4>
                        <div className="two-icons">
                            <a href="https://drive.google.com/file/d/1SIAANN4Sw-mTYCIbD-cIgdAA_VFCtv6m/view?usp=sharing" target="_blank" rel="noopener noreferrer" title="FeynnLabs LOR">
                                {/* <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                                    style={{ cursor: "pointer" }}

                                    whileHover={{
                                        scale: 1.3,
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L478.9 160.8C412.3 167.2 356.5 210.8 332.6 270.6L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM294.4 339.2L320.8 319.4C320.3 324.9 320 330.4 320 336C320 378.5 335.1 417.6 360.2 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2zM640 336C640 415.5 575.5 480 496 480C416.5 480 352 415.5 352 336C352 256.5 416.5 192 496 192C575.5 192 640 256.5 640 336zM540.7 292.7L480 353.4L451.3 324.7C445.1 318.4 434.9 318.4 428.7 324.7C422.4 330.9 422.4 341.1 428.7 347.3L468.7 387.3C474.9 393.6 485.1 393.6 491.3 387.3L563.3 315.3C569.6 309.1 569.6 298.9 563.3 292.7C557.1 286.4 546.9 286.4 540.7 292.7H540.7z" />
                                </motion.svg> */}
                                <motion.img src={Envelope} alt="LOR" title="LOR"
                                 whileHover={{
                                    scale: 1.3,
                                }}
                                    whileTap={{ scale: 0.9 }} 
                                    />
                            </a>

                            <a href="https://drive.google.com/file/d/1yGg7eAjEsc9FaVn5hzTBaqoQNOGqfpnm/view?usp=sharing" target="_blank" rel="noopener noreferrer" title="FeynnLabs">
                                <motion.svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    class="bi bi-link"
                                    viewBox="0 0 16 16"
                                    style={{ cursor: "pointer" }}

                                    whileHover={{
                                        scale: 1.3,
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
                                    <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
                                </motion.svg>
                            </a>
                        </div>
                    </header>
                    <p style={{ color: `${props.darkColor}` }}>
                        Job Title: Machine Learning Intern
                        <br />
                        Date of Working: July 2021 -September 2021
                    </p>
                    <p style={{ color: `${props.darkColor}` }}>
                        Job Description:
                        <br />
                        <ul>
                            <li>Collecting data(manually) and analyzing variables and segments</li>
                            <li>Defining criteria’s for segmentation before hand and segmenting and
                                evaluating the features based on chosen criteria’s</li>
                            <li>Worked in a team and created project report for market segmentation task</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    );
}