/* global $ */
import React,{useEffect} from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import certificateAws from '../assets/certificates/aws-cloud-essentials-1.png';
import certificateCsharp from '../assets/certificates/csharp-cert-1.png';
import certificatePython1 from '../assets/certificates/python-cert-1.png';
import certificatePython2 from '../assets/certificates/python-cert-2.png';
import certificateJava from '../assets/certificates/java-cert-1.png';

function SectionCertificate() {
    const [refInView, inView] = useInView({
      triggerOnce: true,
    });

    useEffect(() => {
        $("#owl-carousel-2").owlCarousel({
            items: 3,
            autoplay: false,
            autoplayTimeout: 2000,
            loop: true,
            nav: true,
            dots: false,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 3,
                },
            },
        });
    }, []);

    return (
        <>
            <section id="certificate" className="d-flex flex-column justify-content-center p-5">
                <br/><br/>
                <p className="text-title text-uppercase text-center mt-5">Certificates</p>
                <br/><br/>
                <div className="container mt-5" ref={refInView}>
                    <motion.div className="owl-carousel mx-auto my-auto" id="owl-carousel-2"
                        initial={{opacity:0,x:0,y:200}}
                        animate={inView?{opacity:1,x:0,y:0}:{opacity:0,x:0,y:200}}
                        transition={{duration:2}}>
                        <div className="item">
                            <div className="card">
                                <div className="card-header">
                                    <img src={certificateAws} alt="AWS Certificate" className="certificate-img-content"/>
                                </div>
                                <div className="card-body text-center">
                                    <p className="text-p fw-bold mt-3">AWS Knowledge: Cloud Essentials</p>
                                    <p className="muted"><i>Date Acquired: December 2023</i></p>
                                    <a href={certificateAws} target="_blank">
                                        <button className="btn btn-outline-2">View Certificate<span><i className="fa-solid fa-arrow-right ms-2"></i></span></button>
                                    </a>                            
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="card">
                                <div className="card-header">
                                    <img src={certificateCsharp} alt="C# Certificate" className="certificate-img-content"/>
                                </div>
                                <div className="card-body text-center">
                                    <p className="text-p fw-bold mt-3">Foundational C# with Microsoft</p>
                                    <p className="muted"><i>Date Acquired: November 2023</i></p>
                                    <a href={certificateCsharp} target="_blank">
                                        <button className="btn btn-outline-2">View Certificate<span><i className="fa-solid fa-arrow-right ms-2"></i></span></button>
                                    </a>  
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="card">
                                <div className="card-header">
                                    <img src={certificatePython1} alt="Python 1 Certificate" className="certificate-img-content"/>
                                </div>
                                <div className="card-body text-center">
                                    <p className="text-p fw-bold mt-3">Python Essentials 1</p>
                                    <p className="muted"><i>Date Acquired: December 2023</i></p>
                                    <a href={certificatePython1} target="_blank">
                                        <button className="btn btn-outline-2">View Certificate<span><i className="fa-solid fa-arrow-right ms-2"></i></span></button>
                                    </a>  
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="card">
                                <div className="card-header">
                                    <img src={certificatePython2} alt="Python 2 Certificate" className="certificate-img-content"/>
                                </div>
                                <div className="card-body text-center">
                                    <p className="text-p fw-bold mt-3">Python Essentials 2</p>
                                    <p className="muted"><i>Date Acquired: December 2023</i></p>
                                    <a href={certificatePython2} target="_blank">
                                        <button className="btn btn-outline-2">View Certificate<span><i className="fa-solid fa-arrow-right ms-2"></i></span></button>
                                    </a>  
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="card">
                                <div className="card-header">
                                    <img src={certificateJava} alt="Jasva 1 Certificate" className="certificate-img-content"/>
                                </div>
                                <div className="card-body text-center">
                                    <p className="text-p fw-bold mt-3">Java Basic Certificate</p>
                                    <p className="muted"><i>Date Acquired: December 2023</i></p>
                                    <a href={certificateJava} target="_blank">
                                        <button className="btn btn-outline-2">View Certificate<span><i className="fa-solid fa-arrow-right ms-2"></i></span></button>
                                    </a>  
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default SectionCertificate;