document.addEventListener("DOMContentLoaded", function () {
    let loader = document.getElementById("preloader");
    let mainContent = document.getElementById("main-content");

    setTimeout(function () {
        loader.style.display = "none";
        mainContent.style.display = "block";
    }, 1000);

    document.querySelector(".text-footer").innerHTML = "© Copyrights " + new Date().getFullYear() +  ", Zach Estrella";
});

document.querySelector('.navbar-toggler').addEventListener('click', function () {
    this.classList.toggle('collapsed');

    var iconElement = this.querySelector('.fa');

    if (iconElement.classList.contains('fa-bars')) {
        iconElement.classList.remove('fa-bars');
        iconElement.classList.add('fa-close');
    } else {
        iconElement.classList.remove('fa-close');
        iconElement.classList.add('fa-bars');
    }
});

$(document).ready(function(){
    $("#owl-carousel-1").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: false,
    });

    $("#owl-carousel-2").owlCarousel({
        items: 3,
        autoplay: true,
        autoplayTimeout:2000,
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
});

function scrollToTop() {
    window.scrollTo(0,0);
}

function handleScroll() {
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

    if (scrollPosition > 20){
        btnReturnTop.classList.add("d-block");
        btnReturnTop.classList.remove("d-none");
    } else {
        btnReturnTop.classList.remove("d-block");
        btnReturnTop.classList.add("d-none");
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

