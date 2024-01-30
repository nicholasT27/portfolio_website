<script>
	// import { onMount } from "svelte";

    // onMount( () => {
    //     const handleScroll = () => {

    //         if(window.innerWidth >= 768 ){

    //             const currentPosition = window.scrollY
    //             console.log(currentPosition)

    //             const slideToLeftDiv1 = document.getElementById("div1");
    //             const slideToRightImg1 = document.getElementById("image1")
    //             const triggerPosition1 = 742;

    //             if( currentPosition >= triggerPosition1 ){
    //                 slideToLeftDiv1.style.display = "block";
    //                 slideToRightImg1.style.display = "block";
    //             }
    //         }

    //     }

    //     window.addEventListener('scroll', handleScroll)
    // })
</script>

<div class="bg-gradient-to-br from-orange-200 via-rose-300 to-yellow-200">
    <img class="h-16 w-16"src="logo.png" alt="..."/>
    <h1 class="text-9xl font-semibold mt-20 ml-10" id="about-page-title">
        About
    </h1>

    <div class="w-10 text-center ml-48 mt-24 font-semibold slideRight">Info</div>
    <div class="flex justify-center">
        <h1 class="slideRight intro text-2xl p-5 font-bold backdrop-blur-lg bg-white/60 drop-shadow-xl shadow-xl rounded-lg">A web developer passionate about creating <span class="text-fuchsia-700">clean</span> and <span class="text-pink-600">intuitive user experiences</span>. Proficient in <span class="text-blue-600">HTML</span>, <span class="text-teal-600">CSS</span>, and <span class="text-lime-600">JavaScript</span>, I enjoy turning ideas into interactive websites. Eager to learn and contribute to dynamic projects, I'm excited about the possibilities in <span class="text-purple-500">web development</span> !!!</h1>
        <img src="profile-image-2.png" class="w-96 h-96 slideLeft" alt=""/>
    </div>

    <div class="flex justify-center mt-24">
        <img src="profile-image-4.png" class="w-80 h-80 mt-8 slideRight" alt=""  id="image1"/>
        <div class="flex flex-col slideLeft" id="div1">
        <div class="w-10 text-center ml-6 font-semibold">Education</div>
        <h1 class="intro-1 text-2xl font-bold pt-10 backdrop-blur-lg bg-white/60 drop-shadow-xl shadow-xl p-5 rounded-lg flex flex-col">
            Next Academy - Full Stack Web Development
            <div class="flex mt-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right text-orange-600 mt-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                <a href="https://drive.google.com/file/d/1TC5cQ-ors8yiV2AKKXMkgwWDJolJhBmW/view?usp=drive_link" target="_blank" class="ml-1 font-semibold text-base mt-0.5 hover:text-red-500">Cert</a>
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

    <div class="flex flex-col justify-center mt-36">
        <div class="w-10 text-center ml-44 font-semibold slideRight">Resume</div>
        <div class="flex justify-center">
        <h1 class="intro text-2xl font-bold pt-10 mr-10 backdrop-blur-lg bg-white/60 drop-shadow-xl shadow-xl p-5 rounded-lg slideRight">
            My resume
            <div class="flex mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right text-orange-600 mt-0.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                <a href="https://drive.google.com/file/d/1PFInKluGJVMn6KbqJ1Qwok0wJrT0A6fj/view?usp=sharing" target="_blank" class="text-base font-semibold ml-2 hover:text-red-500">Click here to view my resume</a>
            </div>
        </h1>
        <img src="profile-image-5.png" class="w-96 h-96 slideLeft" alt=""/>
    </div>
    </div>
</div>

<style>
    .intro{
        width: 500px;
        height: 350px;
    }

    .intro-1{
        width: 500px;
        height: 390px;
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

@keyframes slide-to-right {
	0% {
		opacity: 0;
		transform: translateX(-100%);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}
}

.slideRight {
	animation: slide-to-right 2s;
}

@keyframes slide-to-left {
	0% {
		opacity: 0;
		transform: translateX(10%);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}
}

.slideLeft {
	animation: slide-to-left 2s;
}


</style>