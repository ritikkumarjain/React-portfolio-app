import "./Skills.css";
import SkillsNav from "../Navigations/SkillsNavigations";
import React, { useState, useEffect } from 'react';
import Light from "../../assests/images/lightMode.svg"
import Dark from "../../assests/images/darkMode.svg"
import Python from "../../assests/images/python.png";
import Sql from "../../assests/images/sql.png";
import Csharp from "../../assests/images/csharp.png";
import Azure from "../../assests/images/azure.png";
import Git from "../../assests/images/git.png";
import Powerbi from "../../assests/images/powerbi.png";
import Html from "../../assests/images/html.png";
import ReactIcon from "../../assests/images/react.png";






export default function Skills() {
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

        } else {
            setLightColor("#fcf6f6");
            setDarkColor("#36454F");
            window.localStorage.clear();
        }
    };


    return (
        <div className="background-skills-container" style={{ backgroundColor: `${darkColor}`, color: `${lightColor}` }}>
            <SkillsNav
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
            <div className="skills-container">
                <div className="skills-container-name">
                    <h2>Skills</h2>
                    <hr />
                </div>
                <div className="skills-section">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-12">
                                <div class="card border-warning mb-3">
                                    <div class="card-header text-center" style={{color: `${darkColor}` }}>Industrial Knowledge</div>
                                    <div class="card-body text-warning">
                                        <div class="d-flex flex-row bd-highlight text-center justify-content-between">
                                            <div class="bg-light text-body border p-2" >.NET</div>
                                            <div class="bg-light text-body border p-2">Data Science</div>
                                            <div class="bg-light text-body border p-2">Machine Learning</div>
                                            <div class="bg-light text-body border p-2">Natural Language Processing</div>
                                            <div class="bg-light text-body border p-2">Data Structure and Algorithms</div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-8 ">
                                <div class="card border-primary mb-3">
                                    <div class="card-header text-center" style={{ color: `${darkColor}` }}>Programming Languages/Libraries</div> 
                                    <div class="card-body text-warning">
                                        <div class="text-center">
                                            <img src={Python} class="img-fluid mr-3 skills-icons" title="Python" />
                                            <img src={Sql} class="img-fluid ml-3 skills-icons" id="special-img" title="SQL SERVER" />
                                            <img src={Csharp} class="img-fluid mr-3 ml-3 skills-icons" title="C#" />
                                            <img src={ReactIcon} class="img-fluid mr-3 ml-3 skills-icons" title="React" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-8">
                                <div class="card border-danger mb-3">
                                    <div class="card-header text-center" style={{ color: `${darkColor}` }}>Tools</div>
                                    <div class="card-body text-warning">
                                        <div class="text-center">
                                            <img src={Git} class="img-fluid mr-2 skills-icons" title="Git" />
                                            <img src={Powerbi} class="img-fluid mr-2 ml-2 skills-icons" title="Power BI" />
                                            <img src={Azure} class="img-fluid mr-2 ml-2 skills-icons" title="Azure" />
                                            <img src={Html} class="img-fluid ml-2 skills-icons" title="HTML5" />
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                    <br />
                </div>
            </div>
        </div>

    );
}

