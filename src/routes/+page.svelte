<script>
	import { featuredProjects } from '$lib/projects';
	import BuildScene from '$lib/BuildScene.svelte';
	import ProjectCard from '$lib/ProjectCard.svelte';
	import Testimonial from '$lib/Testimonial.svelte';
</script>

<svelte:head><title>Siang — Web Developer</title></svelte:head>

<div class="pg">
	<div class="wrap hero">
		<div class="copy">
			<p class="hi ln"><span style="--d:.15s">Hi, I’m</span></p>
			<h1 class="name ln"><span style="--d:.28s">Siang</span></h1>
			<p class="role ln"><span style="--d:.42s">Frontend Developer</span></p>
			<p class="lede fade" style="--d:.7s">
				I build clean and functional web experiences with a focus on modern technologies and
				user-friendly design.
			</p>
			<div class="btns fade" style="--d:.9s">
				<a class="btn" href="/portfolio"
					>View My Work
					<svg
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.6"
						stroke-linecap="round"
						stroke-linejoin="round"
						aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg
					></a
				>
				<a class="lnk" href="/contact"
					>Get in Touch
					<svg
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.6"
						stroke-linecap="round"
						stroke-linejoin="round"
						aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg
					></a
				>
			</div>
		</div>

		<div class="art">
			<div
				class="arch"
				role="img"
				aria-label="A wireframe of a web page filling in with colour, block by block"
			>
				<div class="in"><BuildScene variant="wireframe" /></div>
			</div>
			<span class="chipf">Wireframe</span>
			<span class="chipf">Component</span>
			<span class="chipf">Live</span>
			<div class="note">
				Turning ideas into websites
				<svg viewBox="0 0 110 22" aria-hidden="true"><path d="M2 18 C 30 4, 70 4, 108 12" /></svg>
			</div>
		</div>
	</div>

	<section class="sec wrap">
		<div class="sh">
			<h2 class="rv">Featured Projects</h2>
			<a class="lnk rv" href="/portfolio"
				>View All Projects
				<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.6"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg
				></a
			>
		</div>
		<div class="cards">
			<!-- Featured cards share their content with the full project archive. -->
			{#each featuredProjects as project, index}
				<ProjectCard {project} {index} />
			{/each}
		</div>
	</section>

	<Testimonial />
</div>
