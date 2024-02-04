<script>
  import { afterNavigate, goto } from "$app/navigation";
  import "../app.css";
  import { writable } from 'svelte/store';

  afterNavigate(() => {
    window.HSStaticMethods.autoInit();
  });

    let audio;
    let play = writable(true);

    function togglePlayPause(){

        play.update(state => !state);

        if($play == false){
            audio.play()
        }else{
            audio.pause()
        }
       
    }

    function backToTop() {
       document.body.scrollTop = 0; //For Safari.
       document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera.
    }
    
    function goToPortfolio() {
        window.scrollTo(0, 0);
        goto("/portfolio");
    }

    function goToAbout() {
        window.scroll(0, 0);
        goto("/about");
    }

    function goToContact(){
        window.scroll(0,0);
        goto("/contact")
    }
</script>

<slot />

<div id="navBar"class="fixed bottom-24 w-full">
<div class="flex justify-center items-end h-10 mt-8 absolute inline-block slide-up w-full bg-transparent">
        <div class="rounded-s-full rounded-e-full backdrop-blur-lg bg-white/60 drop-shadow-xl shadow-xl font-semibold grid grid-cols-4">
            <a class="button text-center p-4 text-lg hover:bg-gradient-to-br from-indigo-200 via-fuchsia-200 to-blue-200 rounded-s-full" href="/">Home</a>
            <button on:click={goToPortfolio} class="button text-center p-4 text-lg hover:bg-gradient-to-br from-teal-300 via-bg-indigo-400 to-purple-200">Portfolio</button>
            <button on:click={goToAbout} class="button text-center p-4 text-lg hover:bg-gradient-to-br from-yellow-200 via-rose-300 to-orange-200">About</button>
            <button on:click={goToContact} class="button text-center p-4 text-lg hover:bg-gradient-to-br from-blue-200 via-sky-300 to-blue-400 rounded-e-full">Contact</button>
        </div>


        <audio src="background-music.mp3" loop bind:this={audio}></audio>

        <div class="flex mb-14 mt-2 border border-black">
        <div class="hs-tooltip">
         <button id="music-button" on:click={togglePlayPause} class="hs-tooltip-toggle absolute lg:right-24 p-2 rounded-lg bg-white/60 drop-shadow-xl shadow-xl">
            {#if $play}
            <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="-0.5 0 25 25" fill="none">
                <path d="M12.5493 4.50005C11.3193 4.04005 8.70926 5.49996 6.54926 7.40996H4.94922C3.88835 7.40996 2.87093 7.83145 2.12079 8.58159C1.37064 9.33174 0.949219 10.3491 0.949219 11.41V13.41C0.949219 14.4708 1.37064 15.4883 2.12079 16.2385C2.87093 16.9886 3.88835 17.41 4.94922 17.41H6.54926C8.65926 19.35 11.2693 20.78 12.5493 20.33C14.6493 19.55 14.9992 15.33 14.9992 12.41C14.9992 9.48996 14.6493 5.28005 12.5493 4.50005Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20.6602 6.71997C22.1593 8.22011 23.0015 10.2542 23.0015 12.375C23.0015 14.4958 22.1593 16.5299 20.6602 18.03" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.5391 15.95C19.4764 15.0123 20.003 13.7407 20.003 12.4149C20.003 11.0891 19.4764 9.81764 18.5391 8.88" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            
            {:else}

            <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="-0.5 0 25 25" fill="none">
                <path d="M10.9395 17.72C12.9395 19.5 15.3895 20.72 16.5495 20.33C18.6495 19.55 18.9995 15.3299 18.9995 12.4099C18.9995 11.5999 18.9995 10.68 18.8895 9.77002" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.1292 6.28008C18.0012 5.89129 17.795 5.53273 17.5233 5.22661C17.2516 4.9205 16.9201 4.67327 16.5493 4.50005C15.3193 4.04005 12.7093 5.49996 10.5493 7.40996H8.94922C7.88835 7.40996 6.87093 7.83145 6.12079 8.58159C5.37064 9.33174 4.94922 10.3491 4.94922 11.41V13.41C4.9489 14.1811 5.17151 14.936 5.59021 15.5835C6.00892 16.2311 6.60585 16.7438 7.3092 17.06" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22 2.42004L2 22.42" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

             {/if}  
        </button>
        <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-white rounded-lg drop-shadow-xl shadow-xl" role="tooltip">
                {$play ? 'play music' : 'mute music'}
        </span>
        </div>

        <div class="hs-tooltip">
        <button id="backToTop" on:click={backToTop} class="bg-white/60 drop-shadow-xl shadow-xl absolute lg:right-6 p-3 rounded-lg hs-tooltip-toggle">
            <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" fill="currentColor" class="bi bi-arrow-bar-up" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5m-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5"/>
            </svg>
        </button>
        <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-white rounded-lg drop-shadow-xl shadow-xl" role="tooltip">
            back to top
        </span>
        </div>
    </div>
    </div>
</div>

<style>
    @media(min-width: 270px) and (max-width: 350px) {
        
        #music-button{
            position:absolute;
            right: 8px;
            bottom: 150px;
        }

        #backToTop{
            position: absolute;
            right: 8px;
            bottom: 80px;
        }

        .button{
            font-size: 14px;
            padding: 10px;
        }

        #navBar{
            bottom: 80px;
        }
    }

    @media(min-width: 360px) and (max-width: 400px) {
        
        #music-button{
            position:absolute;
            right: 8px;
            bottom: 150px;
        }

        #backToTop{
            position: absolute;
            right: 8px;
            bottom: 80px;
        }
    }

    @media(min-width: 410px) and (max-width: 699px) {
        
        #music-button{
            position:absolute;
            right: 8px;
            bottom: 150px;
        }

        #backToTop{
            position: absolute;
            right: 8px;
            bottom: 80px;
        }

        .button{
            font-size: 20px;
        }

    }

    @media (min-width: 700px) and (max-width: 1000px){
        .button{
            font-size: 20px;
            padding: 20px;
        }

        #music-button{
            position:absolute;
            right: 8px;
            bottom: 150px;
        }

        #backToTop{
            position: absolute;
            right: 8px;
            bottom: 80px;
        }
        }

   
</style>