<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    @yield('title')

    <!--Bootstrap CSS-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!--Custom CSS-->
    <link href="{{asset('css/style.css')}}" rel="stylesheet">
    <!--Scroll Reveal-->
    <script src="https://unpkg.com/scrollreveal"></script>


</head>

<body>

    @include('inc.navbar')

    @yield('content')

    @include('inc.footer')

    <!--Bootstrap JS-->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <!--Custom JS-->
    <script src="{{asset('js/script.js')}}"></script>

    <script>
    var mybutton = document.getElementById("top-button");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    let home = document.querySelector("#home");
    let about = document.querySelector("#about");
    let project = document.querySelector("#project");
    let experience = document.querySelector("#experience");

    window.addEventListener("scroll",()=>{
        var windo = window.pageYOffset;
        if (about.offsetTop <= windo && project.offsetTop > windo) {
            console.log("About");
            document.querySelector(".about").setAttribute("id","active");
            document.querySelector(".project").removeAttribute("id","active");			
            document.querySelector(".experience").removeAttribute("id","active");		
            document.querySelector(".home").removeAttribute("id","active");			
        }
        else if (project.offsetTop <= windo && experience.offsetTop > windo) {
            console.log("Project");
            document.querySelector(".project").setAttribute("id","active");
            document.querySelector(".experience").removeAttribute("id","active");			
            document.querySelector(".home").removeAttribute("id","active");		
            document.querySelector(".about").removeAttribute("id","active");		
        }
        else if (experience.offsetTop <= windo) {
            console.log("Experience");
            document.querySelector(".experience").setAttribute("id","active");
            document.querySelector(".home").removeAttribute("id","active");			
            document.querySelector(".about").removeAttribute("id","active");	
            document.querySelector(".project").removeAttribute("id","active");		
        }	
        else {
            console.log("Home");
            document.querySelector(".home").setAttribute("id","active");
            document.querySelector(".about").removeAttribute("id","active");			
            document.querySelector(".project").removeAttribute("id","active");	
            document.querySelector(".experience").removeAttribute("id","active");				
        }
    });

    ScrollReveal({
        reset: false,
        distance: '150px',
        duration: 2500,
        delay: 200
    });

    ScrollReveal().reveal('.top', { delay:200, origin:'top' });
    ScrollReveal().reveal('.left', { delay:200, origin:'left' });
    ScrollReveal().reveal('.right', { delay:200, origin:'right' });
    ScrollReveal().reveal('.bottom', { delay:200, origin:'bottom' });

    ScrollReveal().reveal('#job', { delay:1000, origin:'top' });

    ScrollReveal().reveal('.project1left', { delay:200, origin:'left' });
    ScrollReveal().reveal('.project1right', { delay:200, origin:'right' });
    
    ScrollReveal().reveal('.project2left', { delay:600, origin:'left' });
    ScrollReveal().reveal('.project2right', { delay:600, origin:'right' });

    ScrollReveal().reveal('.project3left', { delay:800, origin:'left' });
    ScrollReveal().reveal('.project3right', { delay:800, origin:'right' });

    ScrollReveal().reveal('.project4left', { delay:1000, origin:'left' });
    ScrollReveal().reveal('.project4right', { delay:1000, origin:'right' });
    
  

    </script>    

</body>
</html>
