import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from '@react-hook/media-query';
function SectionExperience() {
    const [refInViewExp1, inViewExp1] = useInView({
        triggerOnce: true,
    });
    const [refInViewExp2, inViewExp2] = useInView({
        triggerOnce: true,
    });
    const [refInViewExp3, inViewExp3] = useInView({
        triggerOnce: true,
    });

    const isDesktop = useMediaQuery('(min-width: 992px)');
    return (
        <>
            <section id="experience" className="d-flex flex-column justify-content-center p-5">
                <br/><br/>
                <p className="text-title text-uppercase text-center mt-5">Experience</p>
        
                <div className="container mt-5">
                    <div className="timeline">
                        <div className="timeline-container timeline-left mb-3" ref={refInViewExp1}>
                            <motion.div initial={isDesktop ? {opacity:0,x:-200,y:0} : {opacity:0,x:0,y:200}}
                            animate={inViewExp1 ? {opacity:1,x:0,y:0} : {opacity:0,x:isDesktop?-200:0,y:isDesktop?0:200}}
                            transition={{duration:2}}>
                                <p className="text-p fw-bold text-center">De La Salle - College of <br/>Saint Benilde</p>
                                <p className="muted fw-bold text-center"><i>Bachelor of Science in Information Systems<br/>(August 2018 - October 2022)</i></p>
                                <p className="muted text-justify">
                                    I graduated from De La Salle - College of Saint Benilde with a Bachelor of Science in Information Systems. 
                                    I have acquired the necessary skills, knowledge, and theories to navigate the field of Information Technology.
                                </p>
                            </motion.div>
                        </div>
                        <div className="timeline-container timeline-right mb-3" ref={refInViewExp2}>
                            <motion.div initial={isDesktop ? {opacity:0,x:200,y:0} : {opacity:0,x:0,y:200}}
                                animate={inViewExp2 ? {opacity:1,x:0,y:0} : {opacity:0,x:isDesktop?200:0,y:isDesktop?0:200}}
                                transition={{duration:2}}>
                                <p className="text-p fw-bold text-center">Freelancing</p>
                                <p className="muted fw-bold text-center"><i>Web Developer (2020 - Present)</i></p>
                                <p className="muted text-justify">
                                    Due to the COVID-19 pandemic in 2020, I ventured into freelancing as a hobby. My projects mainly 
                                    involved capstones and small tasks for my college batchmates. Consequently, I gained exposure to 
                                    various web development styles, ranging from static websites to fully functional systems.
                                </p>
                            </motion.div>
                        </div>   
                        <div className="timeline-container timeline-left mb-3" ref={refInViewExp3}>
                            <motion.div initial={isDesktop ? {opacity:0,x:-200,y:0} : {opacity:0,x:0,y:200}}
                                    animate={inViewExp3 ? {opacity:1,x:0,y:0} : {opacity:0,x:isDesktop?-200:0,y:isDesktop?0:200}}
                                    transition={{duration:2}}>
                                <p className="text-p fw-bold text-center">Philippine Micro-Matrix <br/>Technology Inc.</p>
                                <p className="muted fw-bold text-center"><i>Web Developer (May 2022 - Present)</i></p>
                                <p className="muted text-justify">
                                    I was an intern from May to August 2022, and fortunately, I was absorbed by the company as a Web Developer. 
                                    Throughout my tenure up to the present, I have been actively involved in developing web applications using 
                                    PHP and Laravel. I have gained valuable insights into core concepts, best practices, and advanced functionalities 
                                    related to website development. 
                                </p>
                            </motion.div>
                        </div>	           
                    </div>
                </div>
            </section>
        </>
    );
}

export default SectionExperience;