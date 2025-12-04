<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	let wordpressDiv;
	let emailDivision;
	let lunoDivision;
	let isScrollToEnd = writable(true);

	onMount(() => {
		recipeDiv = document.getElementById('recipe-div');
		emailDivision = document.getElementById('email-div');
		lunoDivision = document.getElementById('luno-div');
		isScrollToEnd.set(false);
	});

	const scrollFunc = () => {
		const y = window.scrollY;

		if (!$isScrollToEnd) {
		if (y >= 0) {
			recipeDiv.classList.add('opacity-0');
			recipeDiv.classList.remove('Up');
			emailDivision.classList.add('opacity-0');
			emailDivision.classList.remove('Up');
			lunoDivision.classList.add('opacity-0');
			lunoDivision.classList.remove('Up');
		}

		if (y >= 500) {
			recipeDiv.classList.add('Up');
			recipeDiv.classList.remove('opacity-0');
		}

		if (y >= 1200) {
			emailDivision.classList.add('Up');
			emailDivision.classList.remove('opacity-0');
		}

		if (y >= 1300) {
			lunoDivision.classList.add('Up');
			lunoDivision.classList.remove('opacity-0');
			isScrollToEnd.set(true);
		}
	}
	};
	
	window.addEventListener('scroll', scrollFunc);
	
</script>

<svelte:head>
	<title>Nicholas | Portfolio</title>
</svelte:head>

<div class="bg-gradient-to-br from-teal-300 via-bg-indigo-400 to-purple-200">
	<img rel="preload" class="h-16 w-16" src="logo.png" alt="..." />

	<div class="flex">
		<div class="relative w-60 sm:h-80 h-40">
			<h1
				class="text-5xl md:text-9xl font-semibold mt-20 lg:ml-10 ml-2 absolute z-20"
				id="portfolio-page-title"
			>
				Portfolio
			</h1>

			<h1
				class="text-5xl md:text-9xl font-semibold mt-20 lg:ml-10 ml-2 absolute z-10 top-10 left-5 text-gray-200 opacity-50"
				id="portfolio-page-title"
			>
				Portfolio
			</h1>
		</div>
		<div class="relative flex items-center ml-16 sm:mb-7 sm:ml-72 mt-10">
			<img rel="preload" src="portfolio-img.png" class="w-56" alt="portfolio-img" />
		</div>
		
	</div>

	<div class="flex flex-col">

		<div id="job-div" class="Up">

		<div class="relative h-28 w-full">
			<img rel="preload" class="w-56 sm:w-72 h-48 sm:w-56 fixed z-40 right-56 top-6 sm:top-2 md:top-6" src="online-resume.png" alt="" />
		</div>

		<div class="w-full flex justify-center mb-5">

			<div
				class="rounded-xl shadow-sm sm:flex w-10/12 drop-shadow-xl md:h-[28rem]"
			>
				<div
					class="bg-white/60 p-5 relative flex flex-col items-center relative w-full rounded-t-xl overflow-hidden sm:py-10 py-16 sm:rounded-s-xl sm:max-w-60 md:rounded-se-none md:max-w-md"
				>
					<figure class="absolute right-2 top-32 z-10 mx-auto max-w-full w-28">
						<div
							class="p-1.5 bg-gray-800 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)] dark:bg-gray-600 dark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)]"
						>
							<img
								rel="preload"
								class="max-w-full h-auto rounded-[1.25rem]"
								src="/portfolio-pic-1(phone).png"
								alt=""
							/>
						</div>
					</figure>

					<figure
						class="relative max-w-full w-11/12 h-auto rounded-b-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)]"
					>
						<div
							class="relative flex items-center max-w-[50rem] bg-gray-800 rounded-t-lg py-2 px-24"
						>
							<div class="flex space-x-1 absolute top-2/4 start-4 -translate-y-1">
								<span class="size-2 bg-gray-600 rounded-full" />
								<span class="size-2 bg-gray-600 rounded-full" />
								<span class="size-2 bg-gray-600 rounded-full" />
							</div>
							<div
								class="flex justify-center items-center size-full bg-gray-700 text-[.25rem] text-gray-400 rounded-sm sm:text-[.5rem]"
							>
								Next Job
							</div>
						</div>

						<div class="rounded-b-lg w-full overflow-hidden md:h-60 h-fit">
							<img rel="preload" class="w-full rounded-b-lg" src="/portfolio-pic-1(desktop).png" alt="" />
						</div>
					</figure>
				</div>
				<div class="flex flex-wrap bg-white w-full lg:w-7/12">
					<div class="p-4 flex flex-col h-full sm:p-7">
						<h3 class="text-lg font-bold text-indigo-400">Next Job Website</h3>
						<p class="mt-1 text-gray-500 text-justify">
							serves as a dynamic job portal, facilitating job seekers in their search for
							employment opportunities, while employers can seamlessly post and manage job vacancies
							on the platform.
						</p>
						<p class="my-3" />
						<p>
							<span class="text-teal-600">Tools/Language Use:</span> <br />Html, CSS, JavaScript,
							Flowbite, Daisy UI, Tailwind CSS, Sveltekit, Amazon AWS and Pocketbase.<br />
						</p>

						<p class="my-1" />
						<p class="">
							<span class="text-indigo-600">Live Preview:</span>
							<br />
							<a
								class="hover:text-gray-500"
								id="preview"
								href="https://portfolio-next-job.pages.dev/"
								target="_blank">next-job.pages</a
							>
						</p>

						<p class="my-1" />
						<p>
							<span class="text-purple-600">Source Code: </span>
							<br />
							<a
								class="hover:text-gray-500"
								id="source"
								href="https://github.com/nicholasT27/portfolio_next_job"
								target="_blank">github/portfolio_next_job</a
							>
						</p>
					</div>
				</div>
			</div>
			</div>
		</div>

		<div class="vl-dotted-long sm:mt-0 sm:my-8" />

		<div id="recipe-div" class="w-full flex justify-center Up mt-10 sm:mt-0 sm:mb-5">
			
			<div
				class="rounded-xl shadow-sm sm:flex w-10/12 drop-shadow-xl h-[25rem]"
			>
				<div
					class="bg-white/60 p-5 relative flex items-center w-full rounded-t-xl overflow-hidden py-28 sm:py-10 sm:rounded-s-xl sm:max-w-60 md:rounded-se-none md:max-w-md"
				>
					<figure class="absolute right-2 top-32 z-10 mx-auto max-w-full w-28">
						<div
							class="p-1.5 bg-gray-800 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)] dark:bg-gray-600 dark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)]"
						>
							<img
								rel="preload"
								class="max-w-full h-auto rounded-[1.25rem]"
								src="/Recipe-Page-Phone.png"
								alt=""
							/>
						</div>
					</figure>

					<figure
						class="relative mb-10 max-w-full w-11/12 h-auto rounded-b-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)]"
					>
						<div
							class="relative flex items-center max-w-[50rem] bg-gray-800 rounded-t-lg py-2 px-24"
						>
							<div class="flex space-x-1 absolute top-2/4 start-4 -translate-y-1">
								<span class="size-2 bg-gray-600 rounded-full" />
								<span class="size-2 bg-gray-600 rounded-full" />
								<span class="size-2 bg-gray-600 rounded-full" />
							</div>
							<div
								class="flex justify-center items-center size-full bg-gray-700 text-[.25rem] text-gray-400 rounded-sm sm:text-[.5rem]"
							>
								Recipe Page
							</div>
						</div>

						<div class="rounded-b-lg overflow-hidden h-fit">
							<img rel="preload" class="w-full rounded-b-lg" src="/Recipe-Page-Desktop.png" alt="" />
						</div>
					</figure>
				</div>
				<div class="flex flex-wrap bg-white w-full lg:w-7/12">
					<div class="p-4 flex flex-col h-full sm:p-7 justify-center relative">
						<h3 class="text-lg font-bold text-indigo-400">Recipe Page</h3>
						<p class="mt-1 text-gray-500">
							A simple Recipe Page build by HTML and CSS
						</p>
						<p class="my-3" />
						<p>
							<span class="text-teal-600">Tools/Language Use:</span> <br />HTML and CSS
						</p>

						<p class="my-1" />
						<p class="">
							<span class="text-indigo-600">Live Preview:</span>
							<br />
							<a
								class="hover:text-gray-500"
								id="preview"
								href="https://recipepage-ten.vercel.app"
								target="_blank">Recipe_Page</a
							>
						</p>

						<p class="my-1" />
						<p>
							<span class="text-purple-600">Source Code: </span>
							<br />
							<a
								class="hover:text-gray-500"
								id="source"
								href="https://github.com/nicholasT27/Recipe_Page"
								target="_blank">github/Recipe_Page</a
							>
						</p>

						<img rel="preload" src="maintenance.png" class="w-36 lg:w-48 absolute right-0.5 lg:right-1 bottom-1 sm:bottom-5" alt="" />
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="vl-dotted-long mt-80 sm:mt-0 my-8" />

	<div class="w-full flex justify-center mb-5">
		<div id="email-div" class="rounded-xl shadow-sm sm:flex w-10/12 drop-shadow-xl h-[25rem] Up">
			<div
				class="bg-white/60 p-5 relative flex justify-center items-center relative w-full rounded-t-xl overflow-hidden py-10 sm:rounded-s-xl sm:max-w-60 md:rounded-se-none md:max-w-md"
			>
				<figure
					class="relative max-w-full w-11/12 h-auto rounded-b-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)]"
				>
					<div class="relative flex items-center max-w-[50rem] bg-gray-800 rounded-t-lg py-2 px-24">
						<div class="flex space-x-1 absolute top-2/4 start-4 -translate-y-1">
							<span class="size-2 bg-gray-600 rounded-full" />
							<span class="size-2 bg-gray-600 rounded-full" />
							<span class="size-2 bg-gray-600 rounded-full" />
						</div>
						<div
							class="flex justify-center items-center size-full bg-gray-700 text-[.25rem] text-gray-400 rounded-sm sm:text-[.5rem]"
						>
							Email Automator
						</div>
					</div>

					<div class="rounded-b-lg overflow-hidden h-fit">
						<img rel="preload" class="w-full rounded-b-lg" src="/portfolio-pic-3.png" alt="" />
					</div>
				</figure>
			</div>
			<div class="flex flex-wrap bg-white w-full lg:w-7/12 relative">
				<div class="p-4 flex flex-col h-full sm:p-7 justify-center">
					<h3 class="text-lg font-bold text-indigo-400">Email Automator</h3>
					<p class="mt-1 text-gray-500">
						This application is built on Node.js, Nodemailer, IMAP to monitor inbox, detects new
						email and sends automated replies based on predefined script.
					</p>
					<p class="my-3" />
					<p>
						<span class="text-teal-600">Tools/Language Use:</span> <br />Node.js, Nodemailer and
						IMAP<br />
					</p>

					<p class="my-1" />
					<p class="mb-8">
						<span class="text-purple-600">Source Code: </span>
						<br />
						<a
							class="hover:text-gray-500"
							id="source"
							href="https://github.com/nicholasT27/email_automator"
							target="_blank">github.com/email_automator</a
						>
					</p>

					<img rel="preload" src="email.png" alt="" class="w-24 lg:w-36 absolute right-1 bottom-1" />
				</div>
			</div>
		</div>
	</div>

	<div class="vl-dotted-long my-8 mt-52 sm:mt-0 lg:mt-5" />

	<div class="w-full flex justify-center">
		<div id="luno-div" class="rounded-xl shadow-sm sm:flex w-10/12 drop-shadow-xl h-[25rem] Up">
			<div
				class="bg-white/60 p-5 relative flex justify-center items-center relative w-full rounded-t-xl overflow-hidden py-10 sm:rounded-s-xl sm:max-w-60 md:rounded-se-none md:max-w-md"
			>
				<figure
					class="relative max-w-full w-11/12 h-auto rounded-b-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)]"
				>
					<div class="relative flex items-center max-w-[50rem] bg-gray-800 rounded-t-lg py-2 px-24">
						<div class="flex space-x-1 absolute top-2/4 start-4 -translate-y-1">
							<span class="size-2 bg-gray-600 rounded-full" />
							<span class="size-2 bg-gray-600 rounded-full" />
							<span class="size-2 bg-gray-600 rounded-full" />
						</div>
						<div
							class="flex justify-center items-center size-full bg-gray-700 text-[.25rem] text-gray-400 rounded-sm sm:text-[.5rem]"
						>
							Luno Premium
						</div>
					</div>

					<div class="rounded-b-lg overflow-hidden h-fit">
						<img rel="preload" class="w-full rounded-b-lg" src="/portfolio-pic-4.png" alt="" />
					</div>
				</figure>
			</div>
			<div class="flex flex-wrap bg-white w-full lg:w-7/12 relative">
				<div class="p-4 flex flex-col h-full sm:p-7 justify-center">
					<h3 class="text-lg font-bold text-indigo-400 mt-5">Luno Premium</h3>
					<p class="mt-1 text-gray-500">
						This command-line application is developed using Node.js, integrating Luno and Binance
						APIs to console logs out the price difference between Luno and Binance for different
						cryptocurrency.
					</p>
					<p class="my-3" />
					<p>
						<span class="text-teal-600">Tools/Language Use:</span> <br />Node.js, Luno and Binance
						APIs<br />
					</p>

					<p class="my-1" />
					<p class="mb-8">
						<span class="text-purple-600">Source Code: </span>
						<br />
						<a
							class="hover:text-gray-500"
							id="source"
							href="https://github.com/nicholasT27/luno-premium"
							target="_blank">github.com/luno-premium</a
						>
					</p>

					<img rel="preload" src="crypto.png" alt="" class="sm:w-28 md:w-20 lg:w-36 w-28 absolute right-0 bottom-1 md:bottom-10" />
				</div>
			</div>
		</div>
	</div>

	<div class="sm:py-16 py-32" />
</div>

<style>
	.vl-dotted-long {
		position: relative;
		height: 130px; /* Adjust the height as needed */
	}
	.vl-dotted-long::after {
		content: '';
		position: absolute;
		left: 50%;
		top: 10px;
		transform: translateX(-50%);
		border-left: 5px dotted rgb(40, 102, 53);
		height: 100%;
	}

	h1 {
		font-family: 'Young Serif', serif;
	}

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

	#preview {
		cursor: url('data:image/svg+xml;utf8,<svg class="feather feather-arrow-up-right" style="color: rgba(99, 102, 241, 1);" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="7" x2="17" y1="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>'),
			auto;
	}

	#source {
		cursor: url('data:image/svg+xml;utf8,<svg class="feather feather-arrow-up-right" style="color: rgba(139, 92, 246, 1);" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="7" x2="17" y1="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>'),
			auto;
	}

	@keyframes slideUp {
		0% {
			transform: translateY(10%);
		}

		100% {
			transform: translateY(0);
		}
	}

	.Up {
		animation: slideUp 2s ease forwards;
	}
</style>
