import React from "react";
import "./Introduction.css";
import Navigations from "../Navigations/Navigations";
import About from "../About/About";
import Contacts from "../Contacts/Contacts";
import { motion } from "framer-motion";

export default function Introduction() {
    return (
        <>
            <motion.div className="section">
                <div className="main-menu-container">
                    <Navigations />
                    <About className="menu-items" />
                    <Contacts className="menu-items" />
                </div>
                
            </motion.div>
        </>
    );
}
