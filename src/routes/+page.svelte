<script>
	import { featuredProjects } from '$lib/projects';
</script>

<svelte:head><title>Siang Nicholas — Web Developer</title></svelte:head>

<div class="page">
	<section class="home-hero">
		<div class="hero-copy">
			<div>
				<p class="eyebrow">WEB DEVELOPER · MALAYSIA</p>
				<h1 class="display">I turn ideas into <em>useful</em> digital things.</h1>
			</div>
			<div class="hero-bottom">
				<p>
					I’m Siang, a developer focused on clean interfaces, thoughtful interactions, and web
					experiences that feel effortless to use.
				</p>
				<div class="button-row">
					<a class="btn primary" href="/portfolio">Explore my work <span>↗</span></a>
					<a class="btn light" href="/about">More about me</a>
				</div>
			</div>
		</div>
		<div class="hero-art">
			<div class="hero-monogram" aria-hidden="true">SN</div>
			<div class="hero-proof">
				<p class="eyebrow">CURRENTLY OPEN TO</p>
				<h2>Freelance projects<br />& new opportunities.</h2>
				<a href="/contact">Discuss a project <span>↗</span></a>
			</div>
		</div>
	</section>

	<div class="marquee" aria-hidden="true">
		<div class="marquee-track">
			SVELTEKIT · JAVASCRIPT · RESPONSIVE UI · TAILWIND CSS · NODE.JS · ACCESSIBLE EXPERIENCES ·
			SVELTEKIT · JAVASCRIPT · RESPONSIVE UI · TAILWIND CSS · NODE.JS · ACCESSIBLE EXPERIENCES ·
		</div>
	</div>

	<section class="section-intro">
		<p class="eyebrow">SELECTED WORK / 01—04</p>
		<h2 class="display">A few projects where <em>code meets craft.</em></h2>
	</section>

	<section class="work-grid">
		<!-- Curated cards share their content with the complete work archive. -->
		{#each featuredProjects as project, index}
			<a
				class:featured={index === 0}
				class:compact={index === 1}
				class="project-card"
				href={project.live}
				target="_blank"
				rel="noreferrer"
			>
				<div class="project-visual">
					<span class="project-index"
						>{String(index + 1).padStart(2, '0')}{index === 0 ? ' / FEATURED' : ''}</span
					>
					<img src={project.image} alt={`${project.title} project interface`} />
				</div>
				<div class="project-info">
					<h2>{project.title}</h2>
					<p>{project.homeDescription ?? project.description}</p>
					<div class="tag-list">
						{#each project.tags as tag}<span class="tag">{tag}</span>{/each}
					</div>
				</div>
			</a>
		{/each}
	</section>
</div>
