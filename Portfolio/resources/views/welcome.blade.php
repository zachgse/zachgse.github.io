@extends('layouts.app')

@section('title')
    <title>Zach Estrella</title>
@endsection

@section('content')
<button class="open-button" id="top-button" onclick="topFunction()"><i class="fa fa-angle-up"></i></button>
<br><br>
<section id="home"> <!--1st section name-->

    <div class="container-fluid">

        <div class="row">

            <div class="col-lg-7 black-bg text-align-left">
                <div class="center-element text-white">
                    <p style="font-size:40px;">Hello</p>
                    <p class="right" style="font-size:80px;"><b>I'm Zach Gabriel S. Estrella</b></p>
                    <div class="arrow top job" id="job">A Web Developer</div>
                    <!--<p style="font-size:25px;">Web developer</p>-->
                    <a href="#about"><button class="btn btn-white">About me</button></a>

                </div>    
            </div>

            <div class="col-lg-5 blue-bg">
                <div class="center-image">
                    <img src="{{asset('img/zach.jpg')}}" alt="Profile Picture" class="img-fluid rounded-circle mx-auto d-block left" width="450" height="450">
                </div>
            </div>

        </div>    
        
    </div>

</section>

<section id="about"> <!--2nd section about & skills-->

    <div class="container">
    <br><br><br><br> 
        <h1 class="text-center my-5">ABOUT ME</h1>

        <br>

        <div class="row">

            <div class="col-lg-6 left">
                <p class="w-75 mt-4 auto" style="font-size:18px; text-align: justify;">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus quam volutpat venenatis vestibulum facilisis malesuada lorem mauris netus. 
                Adipiscing fusce suspendisse cras tristique sodales eu pulvinar interdum aliquam. Congue placerat pulvinar ut magna dapibus consectetur quis. 
                Dui, malesuada blandit volutpat sodales a. Et pellentesque eu volutpat, id elementum nam. At justo, sit risus quis fusce. Consectetur 
                eget aliquam ante sed. Etiam eget eget viverra fermentum amet a suscipit bibendum ut. Adipiscing sed elementum, turpis suspendisse ullamcorper 
                quisque dui maecenas.
                </p>
            </div>

            <div class="col-lg-6 right mt-3">

                <div class="skills auto">
                    <div class="skills-bar">
                        <div class="bar">
                        <div class="info">
                            <span>HTML</span>
                        </div>
                        <div class="progress-line"><span class="html"></span></div>
                        <div class="bar">
                            <div class="info">
                            <span>CSS</span>
                            </div>
                            <div class="progress-line"><span class="css"></span></div>
                            <div class="bar">
                            <div class="info">
                                <span>BOOTSTRAP</span>
                            </div>
                            <div class="progress-line"><span class="bootstrap"></span></div>
                            <div class="bar">
                                <div class="info">
                                <span>JAVASCRIPT</span>
                                </div>
                                <div class="progress-line">
                                <span class="javascript"></span>
                                </div>
                                <div class="bar">
                                <div class="info">
                                    <span>PHP</span>
                                </div>
                                <div class="progress-line"><span class="c"></span></div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>            

            </div>

        </div>

    </div>

</section>

<section id="project"> <!--3rd section project-->

    <div class="container">
    <br><br><br><br> 
        <h1 class="text-center mt-5">PROJECTS</h1>
        <br>
        <p class="w-50 auto mb-5" style="font-size: 20px;">
            <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel ultricies orci mi adipiscing vitae quisque. Praesent eget tincidunt scelerisque 
            pellentesque lacus, a sodales porttitor lorem.</i>
        </p>

		<div class="d-flex justify-content-center bd-highlight">
            <div class="p-2 m-3 bd-highlight project1left">
                <img src="{{asset('img/sample.jpg')}}" alt="Sample Image" class="img-fluid rounded mx-auto d-block" width=300>
			</div>            
			<div class="p-2 m-3 bd-highlight w-50 text-left project1right">
                <p class="auto mt-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel ultricies orci mi adipiscing vitae quisque. Praesent eget tincidunt scelerisque 
                    pellentesque lacus, a sodales porttitor lorem.
                </p>				
			</div>
		</div>   
        
        <div class="d-flex justify-content-center bd-highlight">
            <div class="p-2 m-3 bd-highlight w-50 text-right project2right">
                <p class="auto mt-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel ultricies orci mi adipiscing vitae quisque. Praesent eget tincidunt scelerisque 
                    pellentesque lacus, a sodales porttitor lorem.
                </p>				
			</div>            
            <div class="p-2 m-3 bd-highlight project2left">
                <img src="{{asset('img/sample.jpg')}}" alt="Sample Image" class="img-fluid rounded mx-auto d-block" width=300>
			</div>            
		</div> 

		<div class="d-flex justify-content-center bd-highlight">
            <div class="p-2 m-3 bd-highlight project3left">
                <img src="{{asset('img/sample.jpg')}}" alt="Sample Image" class="img-fluid rounded mx-auto d-block" width=300>
			</div>            
			<div class="p-2 m-3 bd-highlight w-50 text-left project3right">
                <p class="auto mt-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel ultricies orci mi adipiscing vitae quisque. Praesent eget tincidunt scelerisque 
                    pellentesque lacus, a sodales porttitor lorem.
                </p>				
			</div>
		</div>   
        
        <div class="d-flex justify-content-center bd-highlight">
            <div class="p-2 m-3 bd-highlight w-50 text-right project4right">
                <p class="auto mt-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel ultricies orci mi adipiscing vitae quisque. Praesent eget tincidunt scelerisque 
                    pellentesque lacus, a sodales porttitor lorem.
                </p>				
			</div>            
            <div class="p-2 m-3 bd-highlight project4left">
                <img src="{{asset('img/sample.jpg')}}" alt="Sample Image" class="img-fluid rounded mx-auto d-block" width=300>
			</div>            
		</div>         

    </div>

</section>

<section id="experience"> <!--4th section experiences-->

    <div class="container">
    <br><br><br><br>   
        <h1 class="text-center mt-5">EXPERIENCES</h1>
        <br>
        <p class="w-50 auto mb-5" style="font-size: 20px;">
            <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel ultricies orci mi adipiscing vitae quisque. Praesent eget tincidunt scelerisque 
            pellentesque lacus, a sodales porttitor lorem.</i>
        </p>

		<div class="row">

            <div class="col-lg-4">
                <div class="card left">
                    <div class="card-header">
                        <img src="{{asset('img/sample.jpg')}}" alt="Sample Image" class="img-fluid rounded mx-auto d-block" width=500>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Lorem ipsum dolor</h5>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel ultricies orci mi adipiscing vitae quisque. Praesent eget tincidunt scelerisque 
                            pellentesque lacus, a sodales porttitor lorem.
                        </p>
                    </div>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="card bottom">
                    <div class="card-header">
                        <img src="{{asset('img/sample.jpg')}}" alt="Sample Image" class="img-fluid rounded mx-auto d-block" width=500>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Lorem ipsum dolor</h5>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel ultricies orci mi adipiscing vitae quisque. Praesent eget tincidunt scelerisque 
                            pellentesque lacus, a sodales porttitor lorem.
                        </p>
                    </div>
                </div>
            </div>
            
            <div class="col-lg-4">
                <div class="card right">
                    <div class="card-header">
                        <img src="{{asset('img/sample.jpg')}}" alt="Sample Image" class="img-fluid rounded mx-auto d-block" width=500>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Lorem ipsum dolor</h5>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel ultricies orci mi adipiscing vitae quisque. Praesent eget tincidunt scelerisque 
                            pellentesque lacus, a sodales porttitor lorem.
                        </p>
                    </div>
                </div>
            </div>            


        </div> 

    </div>

</section>
<br><br><br><br><br><br><br>


<div class="mini-blue-bg">
    <div class="mini-center-element text-center">
        <p class="h2">
            Access my Resume
        </p>    
        <p>
            Let me know if you need any further information
        </p>
        <button class="btn btn-white">
            Download
        </button>

    </div>  
</div>

<br><br>

<div class="container " style="height: 30vh;">

    <div class="mini-center-element-2">

        <h1 class="text-center mt-5">CONTACT ME</h1>
        <br><br><br>
        <div class="d-flex justify-content-evenly">
            
            <div class="p-2 bd-highlight">
                <button type="button" class="btn btn-black" style="width: 280px;">
                    <span style="float:left;"><i class="fa fa-envelope"></i></span>zachgabriel27@gmail.com
                </button>
            </div>

            <div class="p-2 bd-highlight">
                <button type="button" class="btn btn-white">
                    <span style="float:left;"><i class="fa fa-linkedin"></i></span>Linkedin
                </button>
            </div>
            
            <div class="p-2 bd-highlight">
                <button type="button" class="btn btn-black">
                    <span style="float:left;"><i class="fa fa-instagram"></i></span>_zachestrella
                </button>
            </div>

            <div class="p-2 bd-highlight">
                <button type="button" class="btn btn-white" style="width: 280px;">
                    <span style="float:left;"><i class="fa fa-facebook"></i></span>zachgabriel27@gmail.com
                </button>
            </div>

        </div>    

    </div>

</div>
<br><br><br><br>
@endsection