import React,{useEffect} from 'react';
import logo from '../assets/img/logo.png'

function Footer() {
    useEffect(() => {
        document.querySelector(".text-footer").innerHTML = "© Copyrights " + new Date().getFullYear() +  ", Zach Estrella";
    }, []);

    return (
        <>
            <footer id="footer">
                <img src={logo} alt="Zach Estrella Logo" width="200"/>
                <p className="text-sub-title fw-bold">"Grind with a smile, enjoy the journey,<br/> and make every hustle a step <br/>closer to your dreams."</p>
                <div className="d-flex flex-row my-5">
                    <div className="p-2">
                        <a href="mailto:zachgabriel.estrella@gmail.com" target="_blank">
                            <button className="btn btn-footer home-icon"><i className="fa-solid fa-envelope"></i></button>
                        </a>           
                    </div>
                    <div className="p-2">
                        <a href="https://www.facebook.com/zachgabriel.estrella/" target="_blank">
                            <button className="btn btn-footer home-icon"><i className="fa-brands fa-facebook-f"></i></button>
                        </a>
                    </div>
                    <div className="p-2">
                        <a href="https://www.linkedin.com/in/zach-estrella/" target="_blank">
                            <button className="btn btn-footer home-icon"><i className="fa-brands fa-linkedin-in"></i></button>
                        </a>               
                    </div>
                    <div className="p-2">
                        <a href="https://github.com/zachgse" target="_blank">
                            <button className="btn btn-footer home-icon"><i className="fa-brands fa-github"></i></button>
                        </a>              
                    </div>                 
                </div>
                <p className="text-footer">asd</p>
            </footer>
        </>
    );
}

export default Footer;