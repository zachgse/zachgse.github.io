/* global $ */
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../assets/css/SectionAbout.css'
import iconHtml from '../assets/img/html.png';
import iconCss from '../assets/img/css.png';
import iconJs from '../assets/img/javascript.png';
import iconPhp from '../assets/img/php.png';
import iconPython from '../assets/img/python.png';
import iconJava from '../assets/img/java.png';
import iconCsharp from '../assets/img/csharp.png';
import iconSql from '../assets/img/sql.png';
import iconGit from '../assets/img/git.png';
import iconJira from '../assets/img/jira.png';
import iconMicrosoft from '../assets/img/microsoft.png';
import iconPhotoshop from '../assets/img/photoshop.png';
import iconFigma from '../assets/img/figma.png';

function SectionAbout() {
    const [refInViewText, inViewText] = useInView({
        triggerOnce: true,
    });
    const [refInViewIcons, inViewIcon] = useInView({
        triggerOnce: true,
    });

    return (
        <>
            <section id="about" className="d-flex flex-column justify-content-center p-5">
                <p className="text-title text-uppercase text-center mt-5">About Me</p>
                
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg-5 d-flex flex-column align-items-center mb-3" ref={refInViewText}>
                            <motion.div
                                initial = {{opacity : 0}}
                                animate = {{opacity : inViewText ? 1 : 0}}
                                transition={{ duration: 2}}
                            >
                                <p className="text-p muted auto" id="about-text-content">
                                    Possessing proficiency in programming languages, development tools, and methodologies, I have showcased 
                                    robust problem-solving skills and a firm grasp of software development principles through both academic 
                                    and personal projects. With a keen enthusiasm for learning and a readiness to contribute, I am fully 
                                    prepared to embark on a career in the dynamic field of software development.
                                </p>
                            </motion.div>
                        </div>
                        <div className="col-lg-2 text-center">
                            <div className="vertical-line"></div>
                        </div>
                        <div className="col-lg-5 d-flex flex-column mb-3" ref={refInViewIcons}>  
                            <p className="text-p fw-bold mb-4">Current Tech Stack:</p>                    
                            <motion.div className="d-flex flex-wrap"
                                initial = {{opacity : 0}}
                                animate = {{opacity : inViewIcon ? 1 :0}}
                                transition={{ duration: 2}}>
                                <div>
                                    <img src={iconHtml} alt="HTML icon" className="about-icon"/>
                                </div>
                                <div>
                                    <img src={iconCss} alt="CSS icon" className="about-icon"/>
                                </div>
                                <div>
                                    <img src={iconJs} alt="Javascript icon" className="about-icon"/>
                                </div>
                                <div>
                                    <img src={iconPhp} alt="PHP icon" className="about-icon"/>
                                </div>
                                <div>
                                    <img src={iconPython} alt="Python icon" className="about-icon"/>
                                </div>
                                <div>
                                    <img src={iconJava} alt="Java icon" className="about-icon"/>
                                </div>
                                <div>
                                    <img src={iconCsharp} alt="C# icon" className="about-icon"/>
                                </div>
                                <div>
                                    <img src={iconSql} alt="SQL icon" className="about-icon"/>
                                </div>
                                <div>
                                    <img src={iconGit} alt="Git icon" className="about-icon"/>
                                </div>
                                <div class="mt-4">
                                    <img src={iconJira} alt="Jira icon" className="about-icon"/>
                                </div>
                                <div>
                                    <img src={iconMicrosoft} alt="Microsoft icon" className="about-icon"/>
                                </div>
                                <div>
                                    <img src={iconPhotoshop} alt="Photoshop icon" className="about-icon"/>
                                </div>
                                <div>
                                    <img src={iconFigma} alt="Figma icon" className="about-icon"/>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SectionAbout;