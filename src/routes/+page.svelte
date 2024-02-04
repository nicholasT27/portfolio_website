<script>
    // import { writable } from 'svelte/store';
    // let audio;
    // let play = writable(true);

    // function togglePlayPause(){

    //     play.update(state => !state);

    //     if($play == false){
    //         audio.play()
    //     }else{
    //         audio.pause()
    //     }
       
    // }
</script>

<svelte:head>
	<title>Nicholas | Web Developer</title>
</svelte:head>

<div class="bg-gradient-to-br from-indigo-200 via-fuchsia-200 to-blue-200 h-screen">
    <img id="logo" class="h-16 w-16"src="logo.png" alt="..."/>
    <div id="title-div" class="flex slide-down">
        <h1 id="title" class="h-fit text-center md:ml-10 text-4xl lg:my-16 lg:ml-64 font-bold">
            Hi My name is Siang. A passionate young <span class="text-violet-800">
            web developer</span> that loves <span class="text-indigo-800">creating</span>, 
            <span class="text-fuchsia-800">imaginating</span> and <span class="text-pink-700">coding things</span> 
            to make them <span class="text-rose-800">real, accessible.</span></h1>
        <div id="image-div">
            <img class="lg:mr-10 lg:h-96 lg:w-96" src="profile-image.png" alt="..."/>
        </div>
    </div>
</div>

<style>
    #title{
        width: 400px;
    }

    @media (min-width: 360px) and (max-width: 400px) {
        #title{
            font-size: 27px;
            margin-left: 40px;
            margin-top: 20px;
            width: 300px;
        }

        #image-div{
            width: 200px;
            height: 200px;
            margin-left: 90px;
            margin-top: 20px;
        }

        #title-div{
            flex-direction: column;
            text-align: center;
        }

        #logo{
            width: 60px;
            height: 60px;
        }
    }


     @media (min-width: 270px) and (max-width: 350px) {
        #title{
            font-size: 20px;
            margin-left: 30px;
            margin-top: 20px;
            width: 230px;
        }

        #image-div{
            width: 200px;
            height: 200px;
            margin-left: 45px;
            margin-top: 20px;
        }

        #title-div{
            flex-direction: column;
            text-align: center;
        }

        #logo{
            width: 60px;
            height: 60px;
        }
    }

    @media (width: 390px) {
        #title{
            margin-top: 80px;
            margin-left: 50px;
        }
    }

    @media (min-width: 410px) and (max-width: 500px) {
        #title{
            font-size: 40px;
            margin-left: 15px;
            margin-top: 60px;
            width: 390px;
        }

        #image-div{
            width: 250px;
            height: 250px;
            margin-left: 90px;
            margin-top: 20px;
        }

        #title-div{
            flex-direction: column;
            text-align: center;
        }

        #logo{
            width: 60px;
            height: 60px;
        }
    }

    @media (min-width: 700px) and (max-width: 1000px){
        #title{
            width: 700px;
        }

        #image-div{
            width: 800px;
            height: 700px;
        }

        #title-div{
            margin-top: 200px;
        }
    }

     @media(width: 820px){
        #title{
            margin-top: 60px;
        }
    }

</style>