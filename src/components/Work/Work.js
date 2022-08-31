import "./Work.css";
import CTS from "./Works/Cts";
import Feynn from "./Works/feynnLabs";
import WorkNav from "../Navigations/WorkNavigations";
import React, { useState, useEffect } from 'react';
import Light from "../../assests/images/lightMode.svg"
import Dark from "../../assests/images/darkMode.svg"



export default function Work() {


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
        <>
            <div className="background-work-container" style={{ backgroundColor: `${darkColor}`, color: `${lightColor}` }}>
                <WorkNav
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
                <div className="work-container">
                    <div className="work-container-name" style={{ backgroundColor: `${darkColor}`, color: `${lightColor}` }}>
                        <h2>Work Experience</h2>
                        <hr />
                    </div>
                    <div className="work-section" >
                        <CTS lightColor={lightColor} />
                        <Feynn lightColor={lightColor} />
                    </div>



                </div>
            </div>
        </>
    );
}