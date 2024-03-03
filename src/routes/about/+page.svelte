<script>
  import { PUBLIC_GOOGLE_DRIVE_URL_RESUME, PUBLIC_GOOGLE_DRIVE_URL_CERT } from '$env/static/public';
	import { onMount } from 'svelte';

  let eduDivision;
  let resumeDivision;

  onMount ( () => {
    eduDivision = document.getElementById("eduDiv");
    resumeDivision = document.getElementById("resumeDiv");
  })
  
  const scrollFunc = () => {
     const y = window.scrollY;
     console.log(y)
     if( y >= 100 ) {
       eduDivision.style.display = "flex";
     }
     
     if ( y >= 550 ) {
      resumeDivision.style.display = "flex";
     }
  }

  window.addEventListener("scroll", scrollFunc);

</script>

<svelte:head>
	<title>Nicholas | About</title>
</svelte:head>

<div class="bg-gradient-to-br from-orange-200 via-rose-300 to-yellow-200 h-full overflow-x-hidden">
    <img class="h-16 w-16"src="logo.png" alt="..."/>
    <h1 class="text-9xl font-semibold mt-20 ml-10" id="about-page-title">
        About
    </h1>

    <div class="flex justify-center flex-col md:flex-row md:ml-36 p-2 lg:ml-44 w-fit" >
        <div class="flex flex-col">
          <div id="title" class="w-10 text-center md:ml-16 ml-10 mt-8 font-semibold slideRight text-cyan-800">Info</div>
          <h1 class="md:max-w-lg slideRight text-2xl p-5 font-bold backdrop-blur-lg bg-white/60 drop-shadow-xl shadow-xl rounded-lg">A web developer passionate about creating <span class="text-fuchsia-700">clean</span> and <span class="text-pink-600">intuitive user experiences</span>. Proficient in <span class="text-blue-600">HTML</span>, <span class="text-teal-600">CSS</span>, and <span class="text-lime-600">JavaScript</span>, I enjoy turning ideas into interactive websites. Eager to learn and contribute to dynamic projects, I'm excited about the possibilities in <span class="text-purple-500">web development</span> !!!</h1>
        </div>
        <div class="flex justify-center">
          <img src="profile-image-2.png" class="w-96 h-96 slideLeft" alt=""/>
        </div>
    </div>

    <div id="eduDiv" class="flex flex-col md:flex-row p-2 mt-24 justify-center">
        <div class="flex justify-center">
            <img src="profile-image-4.png" class="w-80 h-80 mt-8 slideRight" alt=""  id="image1"/>
        </div>
        <div class="flex flex-col slideLeft" id="div1">
        <div id="title" class="w-10 text-center ml-10 mb-2 font-semibold text-blue-800">Education</div>
        <h1 class="md:max-w-lg text-2xl font-bold pt-10 backdrop-blur-lg bg-white/60 drop-shadow-xl shadow-xl p-5 rounded-lg flex flex-col">
            Next Academy - Full Stack Web Development
            <div class="flex mt-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right text-orange-600 mt-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                <a href={PUBLIC_GOOGLE_DRIVE_URL_CERT} target="_blank" class="ml-1 font-semibold text-base mt-0.5 hover:text-red-500">Cert</a>
            </div>

            <div class="mt-10">
                <span class="mt-10">Wawasan Open University</span>
                <div class="mt-2 text-base capitalize">bachelor of information technology (honours) multimedia systems</div>
                <span class="mt-2 text-sm capitalize">major in multimedia and web development</span>
                <div class="mt-2 text-xs">2019 - 2025 (expected)</div>
            </div>
        </h1>
        </div>
    </div>

    <div id="resumeDiv" class="flex flex-col md:flex-row justify-center p-2 mt-10 pb-10">
        <div class="flex flex-col h-fit mt-10">
        <div id="title" class="text-indigo-700 font-semibold slideRight h-fit w-fit ml-10">Resume</div>
        <h1 class="lg:max-w-md text-2xl h-56 font-bold mt-3 backdrop-blur-lg bg-white/60 drop-shadow-xl shadow-xl p-5 rounded-lg slideRight">
            My resume
            <div class="flex mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right text-orange-600 mt-0.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                <a href={PUBLIC_GOOGLE_DRIVE_URL_RESUME} target="_blank" class="text-base font-semibold ml-2 hover:text-red-500">Click here to view my resume</a>
            </div>
        </h1>
        </div>
        <div class="flex justify-center">
            <img src="profile-image-5.png" class="w-96 h-96 slideLeft" alt=""/>
        </div>
        
    </div>
</div>

<style>

#eduDiv{
  display: none;
}

#resumeDiv{
  display: none;
}

    @keyframes text-clip {
  from {
    clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
  }
  to {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
}

#about-page-title{
    animation: text-clip 1s;
}

#title, #about-page-title{
    font-family: 'Young-serif', serif;
}

@keyframes slide-to-right {
	0% {
		opacity: 0;
    visibility: hidden;
		transform: translateX(-100%);
	}

	100% {
		opacity: 1;
    visibility: visible;
		transform: translateX(0);
	}
}

.slideRight {
	animation: slide-to-right 2s;
}

	@keyframes slide-to-left {
		0% {
			opacity: 0;
			transform: translateX(100%);
		}

		100% {
			opacity: 1;
			transform: translateX(0);
		}
	}

	.slideLeft {
		animation: slide-to-left 2s ease;
	}

@media(max-width: 289px) {
  #about-page-title{
    font-size: 60px;
    margin-left: 30px;
  }
}

@media (min-width: 290px) and (max-width: 400px){
  #about-page-title{
    font-size: 70px;
  }
}

@media (min-width: 401px) and (max-width: 800px){
  #about-page-title{
    font-size: 60px;
  }
}
</style>