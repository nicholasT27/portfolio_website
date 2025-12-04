<script>
	import { afterNavigate, goto } from '$app/navigation';
	import '../app.css';
	import { writable } from 'svelte/store';

	afterNavigate(() => {
		window.HSStaticMethods.autoInit();
	});

	function backToTop() {
		document.body.scrollTop = 0; //For Safari.
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera.
	}

	function goToPortfolio() {
		window.scrollTo(0, 0);
		goto('/portfolio');
	}

	function goToAbout() {
		window.scroll(0, 0);
		goto('/about');
	}

	function goToContact() {
		window.scroll(0, 0);
		goto('/contact');
	}
</script>

<slot />

<div id="navBar" class="fixed bottom-24 w-full">
	<div
		class="flex justify-center items-end h-10 mt-8 absolute inline-block slide-up w-full bg-transparent"
	>
		<div
			class="rounded-s-full rounded-e-full backdrop-blur-lg bg-white/60 drop-shadow-xl shadow-xl font-semibold grid grid-cols-4"
		>
			<a
				class="button text-center p-4 text-lg hover:bg-gradient-to-br from-indigo-200 via-fuchsia-200 to-blue-200 rounded-s-full"
				href="/">Home</a
			>
			<button
				on:click={goToPortfolio}
				class="button text-center p-4 text-lg hover:bg-gradient-to-br from-teal-300 via-bg-indigo-400 to-purple-200"
				>Portfolio</button
			>
			<button
				on:click={goToAbout}
				class="button text-center p-4 text-lg hover:bg-gradient-to-br from-yellow-200 via-rose-300 to-orange-200"
				>About</button
			>
			<button
				on:click={goToContact}
				class="button text-center p-4 text-lg hover:bg-gradient-to-br from-blue-200 via-sky-300 to-blue-400 rounded-e-full"
				>Contact</button
			>
		</div>
				
		
		<div class="hs-tooltip">
				<button
					id="backToTop"
					on:click={backToTop}
					class="bg-white/60 drop-shadow-xl shadow-xl absolute lg:right-6 p-3 rounded-lg hs-tooltip-toggle flex items-center"
				>
				<lord-icon
    				src="https://cdn.lordicon.com/dwoxxgps.json"
    				trigger="hover"
    				>
				</lord-icon>
				</button>
				<span
					class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-white rounded-lg drop-shadow-xl shadow-xl"
					role="tooltip"
				>
					back to top
				</span>
		</div>
	</div>
</div>

<style>
	@media (min-width: 270px) and (max-width: 350px) {
		/* #music-button{
            position:absolute;
            right: 8px;
            bottom: 150px;
        } */

		#backToTop {
			position: absolute;
			right: 8px;
			bottom: 80px;
		}

		.button {
			font-family: "Verdana", sans-serif;
			font-size: 14px;
			padding: 10px;
		}

		#navBar {
			bottom: 80px;
		}
	}

	@media (min-width: 360px) and (max-width: 400px) {
		/* #music-button{
            position:absolute;
            right: 8px;
            bottom: 150px;
        } */

		#backToTop {
			position: absolute;
			right: 8px;
			bottom: 80px;
		}
	}

	@media (min-width: 410px) and (max-width: 699px) {
		/* #music-button{
            position:absolute;
            right: 8px;
            bottom: 150px;
        } */

		#backToTop {
			position: absolute;
			right: 8px;
			bottom: 80px;
		}

		.button {
			font-size: 20px;
		}
	}

	@media (min-width: 700px) and (max-width: 1000px) {
		.button {
			font-size: 20px;
			padding: 20px;
		}

		/* #music-button{
            position:absolute;
            right: 8px;
            bottom: 150px;
        } */

		#backToTop {
			position: absolute;
			right: 8px;
			bottom: 80px;
		}
	}
</style>
