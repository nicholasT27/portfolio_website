<svelte:head>
	<title>Nicholas | Portfolio</title>
</svelte:head>

<div class="bg-gradient-to-br from-teal-300 via-bg-indigo-400 to-purple-200 overflow-x-hidden">
	<img class="h-16 w-16" src="logo.png" alt="..." />
	<h1 class="text-6xl md:text-9xl font-semibold mt-20 lg:ml-10 ml-2" id="portfolio-page-title">
		Portfolio
	</h1>

	<h1 class="mt-24 lg:ml-48 ml-2 w-fit text-3xl md:text-6xl font-semibold">
		Latest <span class="text-violet-800">Portfolio</span>
	</h1>
	<div class="mt-2 ml-2 lg:ml-48 border-2 border-rose-800 w-56" />
	<div class="mt-5 ml-2 lg:ml-48 border-2 border-pink-700 w-48" />

	<div class="flex flex-col justify-center lg:flex-row w-auto">
		<div
			class="mt-10 lg:max-w-lg lg:max-h-96 lg:mt-16 backdrop-blur-lg bg-white/60 drop-shadow-xl shadow-xl rounded-lg p-5 slideRight"
		>
			<h1 class="text-2xl font-bold">Next Job Website</h1>
			<p class="text-justify font-semibold mt-2=">
				The website is constructed using HTML, Tailwind CSS, SvelteKit, Amazon AWS and Pocketbase.
				It serves as a dynamic job portal, facilitating job seekers in their search for employment
				opportunities, while employers can seamlessly post and manage job vacancies on the platform.
			</p>
			<div class="flex mt-5">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-arrow-right text-orange-600 mt-1"
					><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg
				>
				<a
					href="https://portfolio-next-job.pages.dev/"
					target="_blank"
					class="ml-1 font-semibold text-base mt-0.5 hover:text-red-500">Live Preview</a
				>
			</div>
		</div>

		<div class="m-5 lg:w-4/12 flex justify-center">
			<img src="portfolio-pic-1.png" alt="..." class="lg:mt-0 drop-shadow-xl shadow-xl slideLeft" />
		</div>
	</div>

	<h1 class="mt-24 ml-2 lg:ml-44 w-fit text-3xl md:text-6xl font-semibold">
		Other <span class="text-violet-800">Portfolio</span>
	</h1>
	<div class="mt-2 ml-2 lg:ml-48 border-2 border-rose-800 w-56" />
	<div class="mt-5 ml-2 lg:ml-48 border-2 border-pink-700 w-48" />

	<div class="flex flex-col justify-center lg:flex-row">
		<div class="m-5 lg:w-5/12 flex justify-center lg:justify-start">
			<img
				src="portfolio-pic-2.png"
				alt="..."
				class="lg:mb-10 mb-2 drop-shadow-xl shadow-xl md:mt-24 slideRight"
			/>
		</div>
		<div
			class="slideLeft lg:max-w-md w-fit lg:mr-5 lg:mt-10 mt-2 backdrop-blur-lg bg-white/60 drop-shadow-xl shadow-xl rounded-lg p-5"
		>
			<h1 class="text-2xl font-bold">Email Automator</h1>
			<p class="text-justify font-semibold mt-2">
				This application is built on Node.js, Nodemailer, IMAP to monitor inbox, detects new email
				and sends automated replies based on predefined script.
			</p>
			<div class="flex mt-5">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-arrow-right text-orange-600 mt-1"
					><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg
				>
				<a
					href="https://github.com/nicholasT27/email_automator"
					target="_blank"
					class="ml-1 font-semibold text-base mt-0.5 hover:text-red-500">View Source Code</a
				>
			</div>
		</div>
	</div>

	<div class="flex flex-col lg:flex-row pb-28 justify-center">
		<div
			class="lg:max-w-md mt-20 backdrop-blur-lg bg-white/60 drop-shadow-xl shadow-xl rounded-lg p-5 slideRight"
		>
			<h1 class="text-2xl font-bold">Luno Premium</h1>
			<p class="text-justify font-semibold mt-2">
				This command-line application is developed using Node.js, integrating Luno and Binance APIs
				to console logs out the price difference between Luno and Binance for different cryptocurrency.
			</p>
			<div class="flex mt-5">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-arrow-right text-orange-600 mt-1"
					><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg
				>
				<a
					href="https://github.com/nicholasT27/luno-premium"
					target="_blank"
					class="ml-1 font-semibold text-base mt-0.5 hover:text-red-500">View Source Code</a
				>
			</div>
		</div>
		<div class="lg:mt-24 mt-4 lg:w-5/12 flex justify-center m-5">
			<img src="portfolio-pic-3.png" alt="..." class="drop-shadow-xl shadow-xl slideLeft" />
		</div>
	</div>
</div>

<style>
	@keyframes text-clip {
		from {
			clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
		}
		to {
			clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
		}
	}

	#portfolio-page-title {
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
                transform: translateX(100%);
            }
        100% {
                transform: translateX(0);
            }
	}

	.slideLeft {
		animation: slide-to-left 2s ease-out;
	}
</style>
