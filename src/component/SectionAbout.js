/* global $ */
import React, { useEffect } from 'react';
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
        riggerOnce: true,
    });
    const [refInViewCarousel, inViewCarousel] = useInView({
        riggerOnce: true,
    });

    useEffect(() => {
      $("#owl-carousel-1").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: false,
      });
    }, []);

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
                        <div className="col-lg-5 d-flex align-items-center mb-3" ref={refInViewCarousel}>
                            <motion.div
                                className="owl-carousel mx-auto my-auto"
                                id="owl-carousel-1"
                                initial = {{opacity : 0}}
                                animate = {{opacity : inViewCarousel ? 1 :0}}
                                transition={{ duration: 2}}
                            >
                                <div className="item">
                                    <p className="text-p fw-bold mb-4">Current Tech Stack:</p>
                                    <div className="skill-bar w-100 d-flex flex-inline mb-3">
                                        <div className="me-4">
                                            <img src={iconHtml} alt="HTML icon" className="about-icon"/>
                                        </div>
                                        <div className="progress mt-3">                     
                                            <div className="progress-bar progress-80 bg-outline" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
                                        </div>
                                    </div>
                                    <div className="skill-bar w-100 d-flex flex-inline mb-3">
                                        <div className="me-4">
                                            <img src={iconCss} alt="CSS icon" className="about-icon"/>
                                        </div>
                                        <div className="progress mt-3">
                                            <div className="progress-bar progress-80 bg-outline" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
                                        </div>
                                    </div>
                                    <div className="skill-bar w-100 d-flex flex-inline mb-3">
                                        <div className="me-4">
                                            <img src={iconJs} alt="Javascript icon" className="about-icon"/>
                                        </div>
                                        <div className="progress mt-3">
                                            <div className="progress-bar progress-30 bg-outline" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">30%</div>
                                        </div>
                                    </div>
                                    <div className="skill-bar w-100 d-flex flex-inline mb-3">
                                        <div className="me-4">
                                            <img src={iconPhp} alt="PHP icon" className="about-icon"/>
                                        </div>
                                        <div className="progress mt-3">
                                            <div className="progress-bar progress-70 bg-outline" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
                                        </div>
                                    </div>
                                    <div className="skill-bar w-100 d-flex flex-inline mb-3">
                                        <div className="me-4">
                                            <img src={iconPython} alt="Python icon" className="about-icon"/>
                                        </div>
                                        <div className="progress mt-3">
                                            <div className="progress-bar progress-50 bg-outline" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                                        </div>
                                    </div>
                                    <div className="skill-bar w-100 d-flex flex-inline mb-3">
                                        <div className="me-4">
                                            <img src={iconJava} alt="Java icon" className="about-icon"/>
                                        </div>
                                        <div className="progress mt-3">
                                            <div className="progress-bar progress-50 bg-outline" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                                        </div>
                                    </div>
                                    <div className="skill-bar w-100 d-flex flex-inline mb-3">
                                        <div className="me-4">
                                            <img src={iconCsharp} alt="C Sharp icon" className="about-icon"/>
                                        </div>
                                        <div className="progress mt-3">
                                            <div className="progress-bar progress-30 bg-outline" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">30%</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <p className="text-p fw-bold mb-4">Other Tech Skills:</p>
                                    <div className="skill-bar w-100 d-flex flex-inline mb-3">
                                        <div className="me-4">
                                            <img src={iconSql} alt="SQL icon" className="about-icon"/>
                                        </div>
                                        <div className="progress mt-3">
                                            <div className="progress-bar progress-70 bg-outline" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
                                        </div>
                                    </div>
                                    <div className="skill-bar w-100 d-flex flex-inline mb-3">
                                        <div className="me-4">
                                            <img src={iconGit} alt="Github icon" className="about-icon"/>
                                        </div>
                                        <div className="progress mt-3">
                                            <div className="progress-bar progress-70 bg-outline" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
                                        </div>
                                    </div>
                                    <div className="skill-bar w-100 d-flex flex-inline mb-3">
                                        <div className="me-4">
                                            <img src={iconJira} alt="Jira icon" className="about-icon mt-3"/>
                                        </div>
                                        <div className="progress mt-3">
                                            <div className="progress-bar progress-70 bg-outline" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
                                        </div>
                                    </div>
                                    <div className="skill-bar w-100 d-flex flex-inline mb-3">
                                        <div className="me-4">
                                            <img src={iconMicrosoft} alt="Microsoft Office icon" className="about-icon"/>
                                        </div>
                                        <div className="progress mt-3">
                                            <div className="progress-bar progress-60 bg-outline" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
                                        </div>
                                    </div>
                                    <div className="skill-bar w-100 d-flex flex-inline mb-3">
                                        <div className="me-4">
                                            <img src={iconPhotoshop} alt="Adobe Photoshop icon" className="about-icon"/>
                                        </div>
                                        <div className="progress mt-3">
                                            <div className="progress-bar progress-30 bg-outline" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">30%</div>
                                        </div>
                                    </div>
                                    <div className="skill-bar w-100 d-flex flex-inline mb-3">
                                        <div className="me-4">
                                            <img src={iconFigma} alt="Figma icon" className="about-icon"/>
                                        </div>
                                        <div className="progress mt-3">
                                            <div className="progress-bar progress-30 bg-outline" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">30%</div>
                                        </div>
                                    </div>
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