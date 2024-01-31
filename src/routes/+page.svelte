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



<div class="bg-gradient-to-br from-indigo-200 via-fuchsia-200 to-blue-200 h-screen">
    <img class="h-16 w-16"src="logo.png" alt="..."/>
    <div class="flex slide-down">
        <h1 id="title" class="h-48 text-center text-4xl my-16 ml-64 font-bold">Hi My name is Siang. A passionate young <span class="text-violet-800">web developer</span> that loves <span class="text-indigo-800">creating</span>, <span class="text-fuchsia-800">imaginating</span> and <span class="text-pink-700">coding things</span> to make them <span class="text-rose-800">real, accessible.</span></h1>
        <img class="mr-10 h-96 w-96" src="profile-image.png" alt="..."/>
    </div>
</div>

<style>
    #title{
        width: 400px;
    }

</style>