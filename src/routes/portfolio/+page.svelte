<script>
	import { projects } from '$lib/projects';
</script>

<svelte:head><title>Selected Work — Siang</title></svelte:head>

<div class="page">
	<section class="inner-hero">
		<div class="inner-kicker">
			<p class="eyebrow">PROJECT ARCHIVE</p>
			<span class="number">01</span>
		</div>
		<div class="inner-title">
			<h1 class="display">Selected work.</h1>
			<p>A selection of front-end projects, each built to solve a clear problem.</p>
		</div>
	</section>

	<section class="section-intro">
		<p class="eyebrow">ALL PROJECTS / 07</p>
		<h2 class="display">Built to be <em>used,</em> not just viewed.</h2>
	</section>

	<section class="work-grid">
		<!-- Project content is maintained centrally in src/lib/projects.js. -->
		{#each projects as project, index}
			<article class:featured={index === 0} class:compact={index === 1} class="project-card">
				<div class="project-visual">
					<span class="project-index"
						>{String(index + 1).padStart(2, '0')}{index === 0 ? ' / FEATURED' : ''}</span
					><img src={project.image} alt={`${project.title} project preview`} />
				</div>
				<div class="project-info">
					<h2>{project.title}</h2>
					<p>{project.description}</p>
					<div class="tag-list">
						{#each project.tags as tag}<span class="tag">{tag}</span>{/each}
					</div>
					<div class="project-links">
						{#if project.live}<a href={project.live} target="_blank" rel="noreferrer">Live site ↗</a
							>{/if}<a href={project.source} target="_blank" rel="noreferrer">Source code ↗</a>
					</div>
				</div>
			</article>
		{/each}
	</section>
</div>
