<script>
	import { clientProjects, personalProjects } from '$lib/projects';
	import ProjectCard from '$lib/ProjectCard.svelte';
	import Testimonial from '$lib/Testimonial.svelte';

	const pad = (n) => String(n).padStart(2, '0');
</script>

<svelte:head><title>Selected Work — Siang</title></svelte:head>

<div class="pg">
	<div class="wrap pagehead">
		<p class="eyebrow ln"><span style="--d:.1s">Project archive</span></p>
		<h1 class="ln"><span style="--d:.2s">Selected work.</span></h1>
		<p class="fade" style="--d:.5s">
			A selection of front-end projects, each built to solve a clear problem.
		</p>
	</div>

	<!-- Client work: projects built for someone else. -->
	<section class="sec wrap">
		<div class="sh">
			<div>
				<p class="eyebrow rv">Client projects / {pad(clientProjects.length)}</p>
				<h2 class="rv">Websites built for real clients</h2>
			</div>
		</div>
		<div>
			{#each clientProjects as project, index}
				<ProjectCard {project} {index} detailed wide />
			{/each}
		</div>
	</section>

	<Testimonial />

	<!-- Personal projects: maintained centrally in src/lib/projects.js. -->
	<section class="sec wrap">
		<div class="sh">
			<div>
				<p class="eyebrow rv">Personal projects / {pad(personalProjects.length)}</p>
				<h2 class="rv">Built to be used, not just viewed</h2>
			</div>
		</div>
		<div class="cards">
			{#each personalProjects as project, index}
				<ProjectCard {project} {index} detailed />
			{/each}
		</div>
	</section>
</div>
