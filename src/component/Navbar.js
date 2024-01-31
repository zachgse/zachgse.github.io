import React,{useEffect} from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from '@react-hook/media-query';
import logo from '../assets/img/logo.png'

function Navbar() {
    const [refInView, inView] = useInView({
        triggerOnce: true,
    });
    const isDesktop = useMediaQuery('(min-width: 992px)');
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const navbar = document.querySelector(".navbar");
            const btnReturnTop = document.querySelector(".btn-return-top");
            const sectionHome = document.querySelector("#home");
            const sectionCertificate = document.querySelector("#certificate");
            const sectionAbout = document.querySelector("#about");
            const sectionExperience = document.querySelector("#experience");
            const sectionProject = document.querySelector("#project");
            const sectionFooter = document.querySelector("#footer");
        
            if (scrollPosition > 100) {
                navbar.classList.add("navbar-scrolled");  
            } else {
                navbar.classList.remove("navbar-scrolled");
            }

            if (scrollPosition >= sectionHome.offsetTop 
                && scrollPosition < (sectionHome.offsetTop + sectionHome.offsetHeight)) {
                document.querySelector("#link-home").classList.add("link-active");
                document.querySelector("#link-about").classList.remove("link-active");
                document.querySelector("#link-certificate").classList.remove("link-active");
                document.querySelector("#link-experience").classList.remove("link-active");
                document.querySelector("#link-project").classList.remove("link-active");
            } else if (scrollPosition >= sectionAbout.offsetTop 
                && scrollPosition < (sectionAbout.offsetTop + sectionAbout.offsetHeight)) {
                document.querySelector("#link-home").classList.remove("link-active");
                document.querySelector("#link-about").classList.add("link-active");
                document.querySelector("#link-certificate").classList.remove("link-active");
                document.querySelector("#link-experience").classList.remove("link-active");
                document.querySelector("#link-project").classList.remove("link-active");
            } else if (scrollPosition >= sectionCertificate.offsetTop 
                && scrollPosition < (sectionCertificate.offsetTop + sectionCertificate.offsetHeight)) {
                document.querySelector("#link-home").classList.remove("link-active");
                document.querySelector("#link-about").classList.remove("link-active");
                document.querySelector("#link-certificate").classList.add("link-active");
                document.querySelector("#link-experience").classList.remove("link-active");
                document.querySelector("#link-project").classList.remove("link-active");
            } else if (scrollPosition >= sectionExperience.offsetTop 
                && scrollPosition < (sectionExperience.offsetTop + sectionExperience.offsetHeight)) {
                document.querySelector("#link-home").classList.remove("link-active");
                document.querySelector("#link-about").classList.remove("link-active");
                document.querySelector("#link-certificate").classList.remove("link-active");
                document.querySelector("#link-experience").classList.add("link-active");
                document.querySelector("#link-project").classList.remove("link-active");
            } else if (scrollPosition >= sectionProject.offsetTop 
                && scrollPosition < (sectionProject.offsetTop + sectionProject.offsetHeight)) {
                document.querySelector("#link-home").classList.remove("link-active");
                document.querySelector("#link-about").classList.remove("link-active");
                document.querySelector("#link-certificate").classList.remove("link-active");
                document.querySelector("#link-experience").classList.remove("link-active");
                document.querySelector("#link-project").classList.add("link-active");
            } 
        
            if (
                scrollPosition >= sectionFooter.offsetTop - window.innerHeight &&
                scrollPosition < sectionFooter.offsetTop + sectionFooter.offsetHeight
            ) {
                btnReturnTop.classList.remove("btn-outline");
                btnReturnTop.classList.add("btn-return-top-color");
            } else {
                btnReturnTop.classList.add("btn-outline");
                btnReturnTop.classList.remove("btn-return-top-color");
            }
        }

        window.addEventListener('scroll', handleScroll);
    }, []);
    
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg" ref={refInView}>
                <div className="container">
                    <motion.div
                        initial={{opacity:0}}
                        animate={inView? {opacity:1} : {opacity:0}}
                        transition={{duration:2.5}}>
                        <a className="navbar-brand" href="#"><img src={logo} alt="" className="navbar-brand-icon"/></a>
                    </motion.div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <motion.div
                                initial={isDesktop? {opacity:0,x:0,y:200}: {opacity:1,x:0,y:0}}
                                animate={inView? {opacity:1,x:0,y:0} : {opacity:0,x:0,y:200}}
                                transition={{duration:isDesktop?2.5:0}}>
                                <li className="nav-item">
                                    <a className="nav-link link-active" id="link-home" href="#home">Home</a>
                                </li>
                            </motion.div>
                            <motion.div
                                initial={isDesktop? {opacity:0,x:0,y:200}: {opacity:1,x:0,y:0}}
                                animate={inView? {opacity:1,x:0,y:0} : {opacity:0,x:0,y:200}}
                                transition={{duration:isDesktop?2:0}}>
                                <li className="nav-item">
                                    <a className="nav-link" id="link-about" href="#about">About</a>
                                </li>
                            </motion.div>
                            <motion.div
                                initial={isDesktop? {opacity:0,x:0,y:200}: {opacity:1,x:0,y:0}}
                                animate={inView? {opacity:1,x:0,y:0} : {opacity:0,x:0,y:200}}
                                transition={{duration:isDesktop?1.5:0}}>
                                <li className="nav-item">
                                    <a className="nav-link" id="link-certificate" href="#certificate">Certificates</a>
                                </li>
                            </motion.div>
                            <motion.div
                                initial={isDesktop? {opacity:0,x:0,y:200}: {opacity:1,x:0,y:0}}
                                animate={inView? {opacity:1,x:0,y:0} : {opacity:0,x:0,y:200}}
                                transition={{duration:isDesktop?1:0}}>
                                <li className="nav-item">
                                    <a className="nav-link" id="link-experience" href="#experience">Experiences</a>
                                </li>
                            </motion.div>
                            <motion.div
                                initial={isDesktop? {opacity:0,x:0,y:200}: {opacity:1,x:0,y:0}}
                                animate={inView? {opacity:1,x:0,y:0} : {opacity:0,x:0,y:200}}
                                transition={{duration:isDesktop?0.5:0}}>
                                <li className="nav-item">
                                    <a className="nav-link" id="link-project" href="#project">Projects</a>
                                </li>
                            </motion.div>
                        </ul>
                    </div>
                </div>
            </nav> 
        </>
    );
}

export default Navbar;