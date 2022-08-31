import { motion } from "framer-motion";



export default function EmotionDetection(props){
    return(
        <div className="projects-item">
            <header className="projects-item-header" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-folder svgFolder" viewBox="0 0 16 16">
                    <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z" />
                </svg>
                <a href="https://github.com/ritikkumarjain/Deep-Learning/tree/main/EmotionDetection" target="_blank" rel="noopener noreferrer">
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
            </header>

            <div className="projects-item-main">
                <h3>Emotion Detection</h3>
                <p className="projects-item-details">
                    <ul>
                        <li>Implemented CNN to predict 7 different emotions of a Human Face</li>
                        <li>Hyperaparameter optimization of CNN to find a suitable Model</li>
                        <li>Achieved a accuracy of 69.55% on FER13 dataset</li>
                    </ul>

                </p>
            </div>

            <footer className="projects-item-footer">
                <ul className="projects-item-footer-ul">
                    <li className="projects-item-footer-li" style={{ borderColor: `${props.lightColor}` }}>Global Rank 14th</li>
                    <li className="projects-item-footer-li" style={{ borderColor: `${props.lightColor}` }}>Deep Learning</li>
                    <li className="projects-item-footer-li" style={{ borderColor: `${props.lightColor}` }}>CNN</li>
                </ul>
            </footer>
        </div>
    );
}