import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import logo from '../assets/img/logo.png'

function Loading() {
    const [refInView, inView] = useInView({
        triggerOnce: true,
    });

    return(
        <>
            <div id="preloader" ref={refInView}>
                <motion.div
                    initial = {{rotate : 360}}
                    animate = {inView ? {rotate : 0} : {rotate : 360}}
                    transition={{ duration: 3 }}>
                    <img src={logo} alt="Logo" width="200"/>
                </motion.div>   
            </div>
        </>
    )
}

export default Loading;