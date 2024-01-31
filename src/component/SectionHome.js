import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from '@react-hook/media-query';
import { Typewriter } from "react-simple-typewriter";
import imgZach from '../assets/img/01.png';
import pdfZach from '../assets/pdf/Zach-Estrella-Resume.pdf';

function SectionHome() {
    const [refInViewPicture, inViewPicture] = useInView({
        triggerOnce: true,
    });
    const [refInViewText1, inViewText1] = useInView({
        triggerOnce: true,
    });
    const [refInViewText2, inViewText2] = useInView({
        triggerOnce: true,
    });
    const [refInViewText3, inViewText3] = useInView({
        triggerOnce: true,
    });
    const [refInViewText4, inViewText4] = useInView({
        triggerOnce: true,
    });
    const [refInViewBtn1, inViewBtn1] = useInView({
        triggerOnce: true,
    });
    const [refInViewBtn2, inViewBtn2] = useInView({
        triggerOnce: true,
    });

    const isDesktop = useMediaQuery('(min-width: 992px)');

    return(
        <>
            <section id="home">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-6 col-md-12 col-sm-12 order-md-2 order-sm-2" ref={refInViewPicture}>
                            <motion.div className="d-flex justify-content-center"
                                initial={{opacity:0}}
                                animate={inViewPicture?{opacity:1}:{opacity:0}}
                                transition={{duration:2.5}}>
                                <img src={imgZach} alt="Zach Estrella Picture" id="home-img-content"/>
                            </motion.div>
                        </div>
                    
                        <div className="col-lg-6 col-md-12 col-sm-12 order-md-1 order-sm-1">
                            <div className="mt-5" id="home-text-content">
                                <div ref={refInViewText1}>
                                    <motion.div initial={{ opacity:0,x:0,y: isDesktop ? -300 : 100}}
                                        animate={inViewText1?{opacity:1,x:0,y:0}:{opacity:0,x:0,y:isDesktop?-300:100}}
                                        transition={{duration:2.5}}>
                                        <p className="text-p muted fw-bold">Hello 👋🏻 , I am</p>
                                    </motion.div> 
                                </div>
                                
                                <div ref={refInViewText2}>
                                    <motion.div 
                                        // initial={{opacity:0,x:0,y:isDesktop?-300:100}}
                                        // animate={inViewText2?{opacity:1,x:0,y:0}:{opacity:0,x:0,y:isDesktop?-300:100}}
                                        // transition={{duration:2.5}}
                                        initial={{opacity:0,x:-200,y:0}}
                                        animate={inViewText2?{opacity:1,x:0,y:0}:{opacity:0,x:-200,y:0}}
                                        transition={{duration:2.5}}
                                        >
                                        <p className="primary" id="home-text-title">Zach <br/>Estrella</p>
                                    </motion.div> 
                                </div>

                                <div ref={refInViewText3}>
                                    <motion.div 
                                        // initial={{opacity:0,x:0,y:isDesktop?-300:100}}
                                        // animate={inViewText3?{opacity:1,x:0,y:0}:{opacity:0,x:0,y:isDesktop?-300:100}}
                                        // transition={{duration:2.5}}
                                        initial={{opacity:0,x:200,y:0}}
                                        animate={inViewText2?{opacity:1,x:0,y:0}:{opacity:0,x:200,y:0}}
                                        transition={{duration:2.5}}
                                        >            
                                        <p className="text-sub-title fw-bold">
                                        <Typewriter
                                            words={[
                                            "Web Developer",
                                            "Software Developer",
                                            "Software Engineer",
                                            ]}
                                            loop={true}
                                            cursor
                                            cursorStyle="|"
                                            typeSpeed={60}
                                            deleteSpeed={60}
                                            delaySpeed={3000}
                                        />
                                        </p>
                                    </motion.div>
                                </div>    
                               
                                <div ref={refInViewText4} id="home-text-content-2">
                                    <motion.div className='text-p muted w-50'
                                        initial={{opacity:0}}
                                        animate={inViewText4?{opacity:1}:{opacity:0}}
                                        transition={{duration:2.5}}>  
                                        I specialize in crafting impressive websites for your business and possess intermediate proficiency in back-end web development.
                                    </motion.div>
                                </div>

                                <div ref={refInViewBtn1}>
                                    <motion.div initial={{opacity:0,x:0,y:isDesktop?300:0}}
                                        animate={inViewBtn1?{opacity:1,x:0,y:0}:{opacity:0,x:0,y:isDesktop?300:0}}
                                        transition={{duration:2.5}}>  
                                        <a href={pdfZach} target="_blank">
                                            <button className="btn btn-outline-2 my-3">Download CV <span><i className="fa-solid fa-download ms-2"></i></span></button>
                                        </a>   
                                    </motion.div>
                                </div>       
                             
                                
                                <div className="scroll-button-container">
                                    <a href="#about" className="scroll-button"><i className="fa-solid fa-angles-down"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
                <div id="home-icon-wrapper" ref={refInViewBtn2}>
                    <motion.div className="p-2"
                        initial = {{opacity : 0, x : 0, y : -200, rotate : 360}}
                        animate = {inViewBtn2 ? {opacity: 1 , x: 0, y : 0, rotate : 0}  : {opacity : 0, x : 0, y : -200, rotate : 360}}
                        transition={{ duration: 2.5 }}>
                        <a href="mailto:zachgabriel.estrella@gmail.com" target="_blank">
                            <button className="btn btn-outline home-icon"><i className="fa-solid fa-envelope"></i></button>
                        </a>           
                    </motion.div>
                    <motion.div className="p-2"
                        initial = {{opacity : 0, x : 0, y : -200, rotate : 360}}
                        animate = {inViewBtn2 ? {opacity: 1 , x: 0, y : 0, rotate : 0}  : {opacity : 0, x : 0, y : -200, rotate : 360}}
                        transition={{ duration: 2 }}>
                        <a href="https://www.facebook.com/zachgabriel.estrella/" target="_blank">
                            <button className="btn btn-outline home-icon"><i className="fa-brands fa-facebook-f"></i></button>
                        </a>
                    </motion.div>
                    <motion.div className="p-2"
                        initial = {{opacity : 0, x : 0, y : -200, rotate : 160}}
                        animate = {inViewBtn2 ? {opacity: 1 , x: 0, y : 0, rotate : 0}  : {opacity : 0, x : 0, y : -200, rotate : 360}}
                        transition={{ duration: 1.5 }}>
                        <a href="https://www.linkedin.com/in/zach-estrella/" target="_blank">
                            <button className="btn btn-outline home-icon"><i className="fa-brands fa-linkedin-in"></i></button>
                        </a>               
                    </motion.div>
                    <motion.div className="p-2"
                        initial = {{opacity : 0, x : 0, y : -200, rotate : 360}}
                        animate = {inViewBtn2 ? {opacity: 1 , x: 0, y : 0, rotate : 0}  : {opacity : 0, x : 0, y : -200, rotate : 360}}
                        transition={{ duration: 1 }}>
                        <a href="https://github.com/zachgse" target="_blank">
                            <button className="btn btn-outline home-icon"><i className="fa-brands fa-github"></i></button>
                        </a>              
                    </motion.div>                 
                </div>
            </section>
        </>
    )
}

export default SectionHome;