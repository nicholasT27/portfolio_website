<script>
	import { PUBLIC_GOOGLE_DRIVE_URL_RESUME, PUBLIC_GOOGLE_DRIVE_URL_CERT } from '$env/static/public';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	let introDivision;
	let eduDivision;
	let resumeDivision;
	let isScrollToEnd = writable(true);

	onMount(() => {
		introDivision = document.getElementById('introDiv');
		eduDivision = document.getElementById('eduDiv');
		resumeDivision = document.getElementById('resumeDiv');
		isScrollToEnd.set(false);
	});

	const scrollFunc = () => {
		const y = window.scrollY;


		
		if (!$isScrollToEnd) {
		if (y >= 0) {
			eduDivision.classList.add('opacity-0');
			eduDivision.classList.remove('Up');
			resumeDivision.classList.add('opacity-0');
			resumeDivision.classList.remove('Up');
		}

		if (y >= 500) {
			eduDivision.classList.add('Up');
			eduDivision.classList.remove('opacity-0');
		}

		if (y >= 500) {
			resumeDivision.classList.add('Up');
			resumeDivision.classList.remove('opacity-0');
			isScrollToEnd.set(true);
		}
		};
	}
	window.addEventListener('scroll', scrollFunc);
</script>

<svelte:head>
	<title>Nicholas | About</title>
</svelte:head>

<div class="bg-gradient-to-br from-orange-200 via-rose-300 to-yellow-200 h-full overflow-x-hidden">
	<img rel="preload" class="h-16 w-16" src="logo.png" alt="..." />

	<div class="flex">
		<div class="relative w-96 sm:h-80 h-64">
			<h1
				class="text-6xl sm:text-9xl font-semibold mt-20 lg:ml-10 ml-2 absolute z-20"
				id="about-page-title"
			>
				About
			</h1>

			<h1
				class="text-6xl sm:text-9xl font-semibold mt-20 lg:ml-10 ml-2 absolute z-10 top-10 left-5 text-gray-200 opacity-50"
				id="about-page-title"
			>
				About
			</h1>
		</div>

		<div class="relative flex items-center">
			<img rel="preload" src="about.png" class="w-72" alt="" />
		</div>
	</div>

	<div class="w-full flex justify-center">
		<div id="introDiv" class="flex flex-wrap bg-white w-11/12 sm:w-7/12 justify-center relative rounded-xl Up">
			<div class="p-4 flex flex-col h-fit sm:p-7">
				<h3 class="text-2xl font-bold text-rose-400">Info</h3>
				<p class="mt-1 text-gray-500 text-xl text-justify">
					A web developer passionate about creating <span class="text-orange-400">clean</span>
					and <span class="text-rose-500">intuitive user experiences</span>. Proficient in
					<span class="text-yellow-400">HTML</span>, <span class="text-orange-400">CSS</span>, and
					<span class="text-rose-500">JavaScript</span>, I enjoy turning ideas into interactive
					websites. Eager to learn and contribute to dynamic projects, I'm excited about the
					possibilities in
					<span class="text-yellow-400">web development</span> !!!
				</p>
			</div>
			<img rel="preload" src="web-developer.png" alt="" class="w-56 sm:ml-64 ml-36" />
		</div>
	</div>

	<div class="vl-dotted-long my-8" />

	<div class="w-full flex justify-center">
		<div id="eduDiv" class="flex flex-wrap bg-white w-11/12 sm:w-7/12 relative rounded-xl Up">
			<div class="p-4 flex flex-col h-full sm:p-7 justify-center">
				<h3 class="text-2xl font-bold text-rose-400">Education</h3>

				<!-- Timeline -->
				<div>
					<!-- Heading -->
					<div class="ps-2 my-2 first:mt-5">
						<h3 class="text-xs font-medium uppercase text-gray-500">Jul, 2023</h3>
					</div>
					<!-- End Heading -->

					<!-- Item -->
					<div class="flex gap-x-3">
						<!-- Icon -->
						<div
							class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700"
						>
							<div class="relative z-10 size-7 flex justify-center mt-2.5">
								<div class="size-2 rounded-full bg-rose-400" />
							</div>
						</div>
						<!-- End Icon -->

						<!-- Right Content -->
						<div class="grow pt-0.5 pb-16">
							<h3 class="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
								Next Academy - Full Stack Web Development
							</h3>
							<p class="mt-1 text-sm text-gray-600">
								Certificate of Completion
								<a
									class="hover:text-gray-500"
									href={PUBLIC_GOOGLE_DRIVE_URL_CERT}
									target="_blank">
									<button type="button" class="my-1 flex items-center gap-x-2 text-gray-500 hover:text-rose-500 whitespace-nowrap">
        								<svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          									<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          									<polyline points="7 10 12 15 17 10"></polyline>
          									<line x1="12" x2="12" y1="15" y2="3"></line>
        								</svg>
        								Download
      								</button>
									</a
								>
							</p>
						</div>
						<!-- End Right Content -->
					</div>
					<!-- End Item -->

					<!-- Heading -->
					<div class="ps-2 my-2 first:mt-0">
						<h3 class="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
							Dec, 2025 (expected)
						</h3>
					</div>
					<!-- End Heading -->

					<!-- Item -->
					<div class="flex gap-x-3">
						<!-- Icon -->
						<div
							class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700"
						>
							<div class="relative z-10 size-7 flex justify-center items-center">
								<div class="size-2 rounded-full bg-rose-400" />
							</div>
						</div>
						<!-- End Icon -->

						<!-- Right Content -->
						<div class="grow pt-0.5 pb-8">
							<h3 class="flex gap-x-1.5 font-semibold text-gray-800">Wawasan Open University</h3>
							<p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
								Bachelor of information technology (honours) multimedia systems
							</p>
							<p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
								Major in multimedia and web development
							</p>
							<p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
								Expected graduate in 2025.
							</p>
						</div>
						<!-- End Right Content -->
					</div>
					<!-- End Item -->
				</div>
				<!-- End Timeline -->
				<img rel="preload" src="certificate.png" alt="" class="lg:w-36 w-28 absolute right-1 sm:bottom-1 bottom-40" />
			</div>
		</div>
	</div>

	<div class="vl-dotted-long my-8" />

	<div class="w-full flex justify-center pb-24">
		<div id="resumeDiv" class="flex flex-wrap bg-white w-11/12 sm:w-7/12 relative rounded-xl Up">
			<div class="p-4 flex flex-col h-full sm:p-7 justify-center">
				<h3 class="text-2xl font-bold text-rose-400">Resume</h3>

				<!-- Timeline -->
				<div>

					<!-- Item -->
					<div class="flex gap-x-3 mt-2">
						<!-- Icon -->
						<div
							class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700"
						>
							<div class="relative z-10 size-7 flex justify-center mt-2.5">
								<div class="size-2 rounded-full bg-rose-400" />
							</div>
						</div>
						<!-- End Icon -->

						<!-- Right Content -->
						<div class="grow pt-0.5 pb-16">
							<h3 class="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
								My Resume
							</h3>
							<p class="mt-1 text-sm text-gray-600">
								A more details document about me.
								<a
									class="hover:text-gray-500"
									href={PUBLIC_GOOGLE_DRIVE_URL_RESUME}
									target="_blank">
									<button type="button" class="my-1 flex items-center gap-x-2 text-gray-500 hover:text-rose-500 whitespace-nowrap">
        								<svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          									<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          									<polyline points="7 10 12 15 17 10"></polyline>
          									<line x1="12" x2="12" y1="15" y2="3"></line>
        								</svg>
        								Download
      								</button>
									</a
								>
							</p>
						</div>
						<!-- End Right Content -->
					</div>
					<!-- End Item -->
				</div>
				<!-- End Timeline -->
				<img rel="preload" src="resume.png" alt="" class="lg:w-40 w-28 absolute right-1 bottom-1" />
			</div>
		</div>
	</div>
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
		border-left: 5px dotted rgb(244 63 94);
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

	#about-page-title {
		animation: text-clip 1s;
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

	@media (min-width: 290px) and (max-width: 400px) {
		#about-page-title {
			font-size: 70px;
		}
	}

	@media (width: 540px) {
		#about-page-title {
			font-size: 100px;
		}
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
