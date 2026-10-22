<script>
	import { clientProjects, personalProjects } from '$lib/projects';
	import ProjectChapter from '$lib/ProjectChapter.svelte';
	import Testimonial from '$lib/Testimonial.svelte';

	const pad = (n) => String(n).padStart(2, '0');
</script>

<svelte:head><title>Selected Work — Siang</title></svelte:head>

<div class="page">
	<section
		class="hero inner-hero"
		data-bg="#241038"
		data-ink="#fdf0f7"
		data-tx="grid:.6,mesh:1"
		data-label="Project archive"
	>
		<div class="ghost" aria-hidden="true">WORK</div>
		<div class="in inner-grid">
			<div class="inner-kicker">
				<p class="eyebrow">PROJECT ARCHIVE</p>
				<span class="number">01</span>
			</div>
			<div class="inner-title">
				<h1 class="display">
					<span class="w" style="--k:0">Selected</span> <em>work.</em>
				</h1>
				<p>A selection of front-end projects, each built to solve a clear problem.</p>
				<div class="cue"><i />Scroll</div>
			</div>
		</div>
	</section>

	<!-- Client work: projects built for someone else. -->
	<section
		class="say section-intro"
		data-bg="#10264a"
		data-ink="#eaf3ff"
		data-tx="aurora:1,dots:.5"
		data-label="Client projects"
	>
		<div class="in">
			<p class="eyebrow">CLIENT PROJECTS / {pad(clientProjects.length)}</p>
			<h2 class="big" data-words>Websites built for <em>real clients.</em></h2>
		</div>
	</section>

	{#each clientProjects as project, index}
		<ProjectChapter
			{project}
			alt={index % 2 === 1}
			ghost={pad(index + 1)}
			label={`Client project · ${project.title}`}
			pill={`${pad(index + 1)} / CLIENT PROJECT`}
		/>
	{/each}

	<Testimonial />

	<!-- Personal projects: maintained centrally in src/lib/projects.js. -->
	<section
		class="say section-intro"
		data-bg="#10264a"
		data-ink="#eaf3ff"
		data-tx="aurora:1,dots:.5"
		data-label="Personal projects"
	>
		<div class="in">
			<p class="eyebrow">PERSONAL PROJECTS / {pad(personalProjects.length)}</p>
			<h2 class="big" data-words>Built to be <em>used,</em> not just viewed.</h2>
		</div>
	</section>

	{#each personalProjects as project, index}
		<ProjectChapter
			{project}
			alt={index % 2 === 1}
			ghost={pad(index + 1)}
			label={`${pad(index + 1)} · ${project.title}`}
			pill={`${pad(index + 1)}${index === 0 ? ' / FEATURED' : ''}`}
		/>
	{/each}
</div>
