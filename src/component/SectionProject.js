import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import projectCsharp from '../assets/img/csharp.png';
import projectPython from '../assets/img/python.png';   
import projectJava from '../assets/img/java.png';  
import projectTailsAndWags from '../assets/img/tails-and-wags.png';
import projectFilospace from '../assets/img/filospace.png';
import projectMentalite from '../assets/img/mentalite.png';
import pdfCsharp from '../assets/pdf/csharp-rpg-game.pdf';
import pdfTailsAndWags from '../assets/pdf/tails-and-wags.pdf';
import pdfFilospace from '../assets/pdf/filospace.pdf';
import pdfMentalite from '../assets/pdf/mentalite.pdf';

function SectionProject() {
    const [refInViewCsharp, inViewCsharp] = useInView({
        triggerOnce: true,
    });
    const [refInViewPython, inViewPython] = useInView({
        triggerOnce: true,
    });
    const [refInViewJava, inViewJava] = useInView({
        triggerOnce: true,
    });
    const [refInViewTailsAndWags, inViewTailsAndWags] = useInView({
        triggerOnce: true,
    });
    const [refInViewFilospace, inViewFilospace] = useInView({
        triggerOnce: true,
    });
    const [refInViewMentalite, inViewMentalite] = useInView({
        triggerOnce: true,
    });

    return (
        <>
            <section id="project" className="d-flex flex-column justify-content-center p-5">
                <br/><br/>
                <p className="text-title text-uppercase text-center mt-5">Projects</p>
        
                <div className="container mt-5">

                    <div ref={refInViewCsharp}>
                        <motion.div className="card mb-3"
                            initial={{opacity:0,x:0,y:200}}
                            animate={inViewCsharp?{opacity:1,x:0,y:0}:{opacity:0,x:0,y:200}}
                            transition={{duration:2}}>
                            <div className="card-body">
                                <div className="row d-flex align-items-center">
                                    <div className="col-lg-2 text-center">
                                        <img src={projectCsharp} alt="C# logo" width="100"/>
                                    </div>
                                    <div className="col-lg-10 d-flex flex-column align-items-center mt-3">
                                        <div>
                                            <p className="text-p project-text-content fw-bold">Simple RPG Game</p>
                                            <div className="d-flex flex-wrap project-text-tag-content-wrapper align-items-center">
                                                <div className="project-text-tag-content">C#</div>
                                                <div className="project-text-tag-content">Window <br/> Forms</div>
                                            </div>
                                            <p className="text-justify muted mt-2">
                                                C#-based text adventure RPG game is designed with simplicity in mind. It incorporates 
                                                fundamental Object-Oriented Programming concepts, including inheritance, loops, and other 
                                                core principles inherent to OOP.
                                            </p>
                                            <div className="project-button-wrapper">
                                                <a href={pdfCsharp} target="_blank">
                                                    <button className="btn btn-outline-2 mb-3">View project <span><i className="fa-solid fa-arrow-right ms-2"></i></span></button>                                                               
                                                </a> 
                                            </div>    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                
                    <div ref={refInViewPython}>
                        <motion.div className="card mb-3"
                            initial={{opacity:0,x:0,y:200}}
                            animate={inViewPython?{opacity:1,x:0,y:0}:{opacity:0,x:0,y:200}}
                            transition={{duration:2}}>
                            <div className="card-body">
                                <div className="row d-flex align-items-center">
                                    <div className="col-lg-2 text-center">
                                        <img src={projectPython} alt="Python logo" width="100"/>
                                    </div>
                                    <div className="col-lg-10 d-flex flex-column align-items-center mt-3">
                                        <div>
                                            <p className="text-p project-text-content fw-bold">Student Management System</p>
                                            <div className="d-flex flex-wrap project-text-tag-content-wrapper">
                                                <div className="project-text-tag-content">Python</div>
                                                <div className="project-text-tag-content">MySQL</div>
                                            </div>
                                            <p className="text-justify muted mt-2">
                                                Student management system, built on Python, provides users with a range of operations, 
                                                including the creation, viewing, updating, and deletion of student records within the database.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    
                    <div ref={refInViewJava}>
                        <motion.div className="card mb-3"
                            initial={{opacity:0,x:0,y:200}}
                            animate={inViewJava?{opacity:1,x:0,y:0}:{opacity:0,x:0,y:200}}
                            transition={{duration:2}}>
                            <div className="card-body">
                                <div className="row d-flex align-items-center">
                                    <div className="col-lg-2 text-center">
                                        <img src={projectJava} alt="Java logo" width="100"/>
                                    </div>
                                    <div className="col-lg-10 d-flex flex-column align-items-center mt-3">
                                        <div>
                                            <p className="text-p project-text-content fw-bold">Sales and Inventory Management System</p>
                                            <div className="d-flex flex-wrap project-text-tag-content-wrapper">
                                                <div className="project-text-tag-content">Java</div>
                                                <div className="project-text-tag-content">JSP</div>
                                                <div className="project-text-tag-content">Servlet</div>
                                                <div className="project-text-tag-content">PostgreSQL</div>
                                            </div>
                                            <p className="text-justify muted mt-2">
                                                Sales & Inventory Management System, developed in Java, empowers users to input their 
                                                inventory stocks, monitor the total amount post each transaction, and meticulously record 
                                                monthly sales. This comprehensive approach enables the systematic tracking of overall net 
                                                profit/loss, providing a robust solution for effective sales and inventory management.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    
                    <div ref={refInViewTailsAndWags}>
                        <motion.div className="card mb-3"
                            initial={{opacity:0,x:0,y:200}}
                            animate={inViewTailsAndWags?{opacity:1,x:0,y:0}:{opacity:0,x:0,y:200}}
                            transition={{duration:2}}>
                            <div className="card-body">
                                <div className="row d-flex align-items-center">
                                    <div className="col-lg-2 text-center">
                                        <img src={projectTailsAndWags} alt="Tails and Wags logo" width="100"/>
                                    </div>
                                    <div className="col-lg-10 d-flex flex-column align-items-center mt-3">
                                        <div>
                                            <p className="text-p project-text-content fw-bold">Tails and Wags</p>
                                            <div className="d-flex flex-wrap project-text-tag-content-wrapper">
                                                <div className="project-text-tag-content">HTML</div>
                                                <div className="project-text-tag-content">CSS</div>
                                                <div className="project-text-tag-content">Javascript</div>
                                                <div className="project-text-tag-content">PHP</div>
                                                <div className="project-text-tag-content">Laravel</div>
                                                <div className="project-text-tag-content">MySQL</div>
                                            </div>
                                            <p className="text-justify muted mt-2">
                                                Tails and Wags presents itself as a veterinary appointment booking system facilitating seamless 
                                                connections between users and clinics. The system incorporates fundamental CRUD functionalities, 
                                                allowing users (patients) to schedule their appointments with the clinics registered within the 
                                                platform. To ensure secure and smooth transactions, the system is integrated with the Paymonggo 
                                                API, serving as a reliable payment gateway for all financial transactions.
                                            </p>
                                            <div className="project-button-wrapper">
                                                <a href={pdfTailsAndWags} target="_blank">
                                                    <button className="btn btn-outline-2 mb-3">View project <span><i className="fa-solid fa-arrow-right ms-2"></i></span></button>                                                               
                                                </a> 
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div ref={refInViewFilospace}>
                        <motion.div className="card mb-3"
                            initial={{opacity:0,x:0,y:200}}
                            animate={inViewFilospace?{opacity:1,x:0,y:0}:{opacity:0,x:0,y:200}}
                            transition={{duration:2}}>
                            <div className="card-body">
                                <div className="row d-flex align-items-center">
                                    <div className="col-lg-2 text-center">
                                        <img src={projectFilospace} alt="Filospace logo"/>
                                    </div>
                                    <div className="col-lg-10 d-flex flex-column align-items-center mt-3">
                                        <div>
                                            <p className="text-p project-text-content fw-bold">Filospace</p>
                                            <div className="d-flex flex-wrap project-text-tag-content-wrapper">
                                                <div className="project-text-tag-content">HTML</div>
                                                <div className="project-text-tag-content">CSS</div>
                                                <div className="project-text-tag-content">Javascript</div>
                                                <div className="project-text-tag-content">PHP</div>
                                                <div className="project-text-tag-content">Laravel</div>
                                                <div className="project-text-tag-content">MySQL</div>
                                            </div>
                                            <p className="text-justify muted mt-2">
                                                FiloSpace stands as a straightforward photo-stock management system, offering users the capability 
                                                to effortlessly download their preferred images. The system, overseen and curated by the administrator, 
                                                provides and maintains a collection of images. It incorporates basic CRUD (Create, Read, Update, Delete)
                                                functionalities exclusively accessible through the administrator side, ensuring efficient control and 
                                                management of the system's photo-stock.
                                            </p>
                                            <div className="project-button-wrapper">
                                                <a href={pdfFilospace} target="_blank">
                                                    <button className="btn btn-outline-2 mb-3">View project <span><i className="fa-solid fa-arrow-right ms-2"></i></span></button>                                                               
                                                </a> 
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div ref={refInViewMentalite}>
                        <motion.div className="card mb-3"
                            initial={{opacity:0,x:0,y:200}}
                            animate={inViewMentalite?{opacity:1,x:0,y:0}:{opacity:0,x:0,y:200}}
                            transition={{duration:2}}>
                            <div className="card-body">
                                <div className="row d-flex align-items-center">
                                    <div className="col-lg-2 text-center">
                                        <img src={projectMentalite} alt="Mentalit-E logo" width="150"/>
                                    </div>
                                    <div className="col-lg-10 d-flex flex-column align-items-center mt-3">
                                        <div>
                                            <p className="text-p project-text-content fw-bold">Mentalit-E</p>
                                            <div className="d-flex flex-wrap project-text-tag-content-wrapper">
                                                <div className="project-text-tag-content">HTML</div>
                                                <div className="project-text-tag-content">CSS</div>
                                                <div className="project-text-tag-content">Javascript</div>
                                                <div className="project-text-tag-content">PHP</div>
                                                <div className="project-text-tag-content">Laravel</div>
                                                <div className="project-text-tag-content">MySQL</div>
                                            </div>
                                            <p className="text-justify muted mt-2">
                                                Our capstone project, Mentalit-E, is an online platform dedicated to mental health. It serves 
                                                both patients and clinics (administrators and employees) by enabling users to conveniently schedule 
                                                consultations with their chosen clinic within the system. Additional features include a community forum 
                                                for user interaction, a rating and booking system, an integrated chatbot, a ticketing system for 
                                                customer support and inquiries, and system maintenance capabilities on the administrator side.
                                            </p>
                                            <div className="project-button-wrapper">
                                                <a href={pdfMentalite} target="_blank">
                                                    <button className="btn btn-outline-2 mb-3">View project <span><i className="fa-solid fa-arrow-right ms-2"></i></span></button>                                                               
                                                </a> 
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
        
                </div>
            </section>
        </>
    );
}

export default SectionProject;