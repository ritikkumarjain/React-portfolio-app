import ProjectsNav from "../Navigations/ProjectNavigations";
import EmotionDetection from "./IndividualProjects/EmotionDetection";
import PolicySystem from "./IndividualProjects/Policy";
import TodoApp from "./IndividualProjects/TodoApp";
import TopicModelling from "./IndividualProjects/TopicModelling";
import Tourism from "./IndividualProjects/TourismMarket";
import "./Projects.css";
import React, { useState, useEffect } from 'react';
import Light from "../../assests/images/lightMode.svg"
import Dark from "../../assests/images/darkMode.svg"
import Fake from "./IndividualProjects/FakeNews";


export default function Projects() {


    const [boolean, setBoolean] = useState(true);
    const [lightColor, setLightColor] = useState("#fcf6f6");
    const [darkColor, setDarkColor] = useState("#36454F")
    const localTheme = window.localStorage.getItem('light-mode');

    useEffect(() => {
        if (localTheme) {
            setLightColor("#36454F");
            setDarkColor("#fcf6f6");
        }
    }, [localTheme]);


    const SetMode = () => {
        setBoolean(!boolean);
        if (boolean === true) {
            setLightColor("#36454F");
            setDarkColor("#fcf6f6");
            window.localStorage.setItem("light-mode", "enabled");

        }
        else {
            setLightColor("#fcf6f6");
            setDarkColor("#36454F");
            window.localStorage.clear();


        }
    };

    return (
        <>
            <div class="background-container" style={{ backgroundColor: `${darkColor}`, color: `${lightColor}` }}>
                <ProjectsNav
                    lightColor={lightColor}
                    darkColor={darkColor}
                />
                <div className="mode">
                    <button onClick={() => SetMode()}>
                        {!localTheme ? (
                            <img src={Dark} alt="DarkMode" className="mode-icons" style={{ backgroundColor: `${lightColor}` }} />
                        ) : (
                            <img src={Light} alt="LightMode" className="mode-icons" style={{ backgroundColor: `${darkColor}` }} />

                        )}
                    </button>
                </div>
                <div className="projects-container">
                    <div className="projects-container-name" style={{ backgroundColor: `${darkColor}`, color: `${lightColor}` }}>
                        <h2>Projects</h2>
                        <hr />
                    </div>

                    <div className="projects-section-1" style={{ backgroundColor: `${darkColor}`, color: `${lightColor}` }}>
                        <h5>Projects built in Teams</h5>
                        <hr />
                    </div>

                    <div>
                        <ul className="project-list-ul">
                            <li className="project-list-li" style={{ color: `${lightColor}`, borderColor: `${lightColor}`, backgroundColor: `${darkColor}` }}>
                                <TopicModelling
                                    lightColor={lightColor}
                                />
                            </li>
                            <li className="project-list-li" style={{ color: `${lightColor}`, borderColor: `${lightColor}`, backgroundColor: `${darkColor}` }}>
                                <PolicySystem lightColor={lightColor} />

                            </li>
                        </ul>
                    </div>

                    <div className="projects-section-2" style={{ backgroundColor: `${darkColor}`, color: `${lightColor}` }}>
                        <h5>Other Noteworthy projects</h5>
                        <hr />
                    </div>

                    <div>
                        <ul className="project-list-ul">
                            <li className="project-list-li" style={{ color: `${lightColor}`, borderColor: `${lightColor}`, backgroundColor: `${darkColor}` }}>
                                <EmotionDetection lightColor={lightColor} />
                            </li>
                            <li className="project-list-li" style={{ color: `${lightColor}`, borderColor: `${lightColor}`, backgroundColor: `${darkColor}` }}>
                                <TodoApp lightColor={lightColor} />
                            </li>
                        </ul>
                    </div>


                    <div>
                        <ul className="project-list-ul">
                            <li className="project-list-li" style={{ color: `${lightColor}`, borderColor: `${lightColor}`, backgroundColor: `${darkColor}` }}>
                                <Tourism lightColor={lightColor} />
                            </li>
                            <li className="project-list-li" style={{ color: `${lightColor}`, borderColor: `${lightColor}`, backgroundColor: `${darkColor}` }}>
                                <Fake lightColor={lightColor} />
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    );
};

// {/* <li class="project_items" >
//     <div class="project-inner">
//         <header>
//             <div class="project-top">
//                 <div class="folder">
//                     <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder">
//                         <title>Folder</title>
//                         <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
//                     </svg>
//                 </div>
//                 <div class="project-links">
//                     <a href="https://medium.com/stories-from-upstatement/integrating-algolia-search-with-wordpress-multisite-e2dea3ed449c" aria-label="External Link" class="external" target="_blank" rel="noopener noreferrer">
//                         <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link">
//                             <title>External Link</title>
//                             <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
//                             <polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3">
//                             </line>
//                         </svg>
//                     </a>
//                 </div>
//             </div>
//             <h3 class="project-title">
//                 <a href="https://medium.com/stories-from-upstatement/integrating-algolia-search-with-wordpress-multisite-e2dea3ed449c" target="_blank" rel="noopener noreferrer">Integrating Algolia Search with WordPress Multisite</a>
//             </h3>
//             <div class="project-description"><p>Building a custom multisite compatible WordPress plugin to build global search with Algolia</p>
//             </div>
//         </header>
//         <footer>
//             <ul class="project-tech-list">
//                 <li>Algolia</li>
//                 <li>WordPress</li>
//                 <li>PHP</li>
//             </ul>
//         </footer>
//     </div>
// </li> */}