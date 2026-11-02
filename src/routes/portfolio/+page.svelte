<script>
	import { clientProjects, personalProjects, practiceProjects } from '$lib/projects';
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
			Real client work first, followed by the full-stack projects I built to sharpen my skills.
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

	<!-- Earlier practice builds: shown compactly so they don't compete with the work above. -->
	<section class="sec wrap">
		<div class="sh">
			<div>
				<p class="eyebrow rv">Earlier builds / {pad(practiceProjects.length)}</p>
				<h2 class="rv">Where I practised the fundamentals</h2>
			</div>
		</div>
		<ul class="mini">
			{#each practiceProjects as project, index}
				<li class="rv" style="--d:{index * 0.08}s">
					<div>
						<h3>{project.title}</h3>
						<p>{project.description}</p>
					</div>
					<div class="tags">
						{#each project.tags as tag}<span>{tag}</span>{/each}
					</div>
					<div class="links">
						{#if project.live}<a href={project.live} target="_blank" rel="noreferrer">Live site ↗</a
							>{/if}
						{#if project.source}<a href={project.source} target="_blank" rel="noreferrer"
								>Source code ↗</a
							>{/if}
					</div>
				</li>
			{/each}
		</ul>
	</section>
</div>
