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
	<img id="logo" class="h-16 w-16" src="logo.png" alt="..." />
	<div id="title-div" class="flex slide-down justify-center flex-col sm:flex-row md:flex-col lg:flex-row">
		<div class="flex justify-center">
			<h1 id="title" class="h-fit text-center text-3xl lg:my-16 font-bold md:ml-10 lg:ml-12">
			Hi My name is Siang. A passionate young <span class="text-violet-800"> web developer</span>
			that loves <span class="text-indigo-800">creating</span>,
			<span class="text-fuchsia-800">imaginating</span> and
			<span class="text-pink-700">coding things</span>
			to make them <span class="text-rose-800">real, accessible.</span>
			</h1>
		</div>
		
		<div id="image-div w-full">
			<img rel="preload" class="lg:h-96" src="sayhi.gif" alt="..." />
		</div>
	</div>
</div>

<style>
	#title {
		font-family: 'Verdana', sans-serif;
		width: 400px;
	}

	@media (min-width: 360px) and (max-width: 400px) {
		#title {
			font-size: 27px;
			margin-top: 20px;
			width: 300px;
		}

		#title-div {
			flex-direction: column;
			text-align: center;
		}

		#logo {
			width: 60px;
			height: 60px;
		}
	}

	@media (min-width: 270px) and (max-width: 350px) {
		#title {
			font-size: 20px;
			margin-left: 30px;
			margin-top: 20px;
			width: 230px;
		}

		#title-div {
			flex-direction: column;
			text-align: center;
		}

		#logo {
			width: 60px;
			height: 60px;
		}
	}

	@media (width: 390px) {
		#title {
			margin-top: 80px;
		}
	}

	@media (min-width: 410px) and (max-width: 500px) {
		#title {
			font-size: 30px;
			margin-left: 15px;
			margin-top: 60px;
			width: 390px;
		}

		#title-div {
			flex-direction: column;
			text-align: center;
		}

		#logo {
			width: 60px;
			height: 60px;
		}
	}

	@media (min-width: 700px) and (max-width: 1000px) {
		#title {
			width: 700px;
		}

		#title-div {
			margin-top: 50px;
		}
	}

	@media (width: 820px) {
		#title {
			margin-top: 60px;
		}
	}
</style>
