<script>
	import { featuredProjects } from '$lib/projects';
</script>

<svelte:head><title>Siang — Web Developer</title></svelte:head>

<div class="page">
	<section
		class="hero home-hero"
		data-bg="#241038"
		data-ink="#fdf0f7"
		data-tx="mesh:1"
		data-label="Hello"
	>
		<i class="sh s1" data-d="34" aria-hidden="true" />
		<i class="sh s2" data-d="-26" aria-hidden="true" />
		<div class="in hero-grid">
			<div class="hero-copy">
				<p class="eyebrow">WEB DEVELOPER · MALAYSIA</p>
				<h1 class="display">
					<span class="w" style="--k:0">I</span>
					<span class="w" style="--k:1">turn</span>
					<span class="w" style="--k:2">ideas</span>
					<span class="w" style="--k:3">into</span>
					<em>useful</em>
					<span class="w" style="--k:5">digital</span>
					<span class="w" style="--k:6">things.</span>
				</h1>
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
				<div class="cue"><i />Scroll</div>
			</div>

			<div class="hero-art">
				<div class="sticker">
					<div class="disc" />
					<div class="code-mark hero-code-mark" aria-hidden="true">
						<span>&lt;</span><strong>/</strong><span>&gt;</span>
					</div>
					<svg class="orbit" viewBox="0 0 200 200" aria-hidden="true">
						<g class="orbit-a">
							<circle cx="100" cy="100" r="90" />
							<circle class="dot peach" cx="100" cy="10" r="4" />
						</g>
						<g class="orbit-b">
							<circle cx="100" cy="100" r="97" />
							<circle class="dot mint" cx="100" cy="197" r="3" />
						</g>
					</svg>
				</div>
				<div class="hero-proof">
					<p class="eyebrow">CURRENTLY OPEN TO</p>
					<h2>Freelance projects<br />& new opportunities.</h2>
					<a href="/contact">Discuss a project <span>↗</span></a>
				</div>
			</div>
		</div>

		<div class="mq" aria-hidden="true">
			<div>
				SVELTEKIT · JAVASCRIPT · RESPONSIVE UI · TAILWIND CSS · NODE.JS · ACCESSIBLE EXPERIENCES ·
				SVELTEKIT · JAVASCRIPT · RESPONSIVE UI · TAILWIND CSS · NODE.JS · ACCESSIBLE EXPERIENCES ·
				SVELTEKIT · JAVASCRIPT · RESPONSIVE UI · TAILWIND CSS · NODE.JS · ACCESSIBLE EXPERIENCES ·
				SVELTEKIT · JAVASCRIPT · RESPONSIVE UI · TAILWIND CSS · NODE.JS · ACCESSIBLE EXPERIENCES ·
			</div>
		</div>
	</section>

	<section
		class="say section-intro"
		data-bg="#10264a"
		data-ink="#eaf3ff"
		data-tx="aurora:1,dots:.5"
		data-label="Selected work"
	>
		<div class="ghost" aria-hidden="true">CRAFT</div>
		<div class="in">
			<p class="eyebrow">SELECTED WORK / 01—04</p>
			<h2 class="big" data-words>A few projects where <em>code meets craft.</em></h2>
		</div>
	</section>

	<section
		class="feat"
		data-bg="#3a1030"
		data-ink="#ffeef6"
		data-tx="mesh:1"
		data-label="Featured projects"
	>
		<div class="in">
			<div class="stack">
				<!-- Curated cards share their content with the complete work archive. -->
				{#each featuredProjects as project, index}
					<a
						class="sc project-card"
						style="--i:{index}; background:{project.theme.bg}; color:{project.theme.ink}"
						href={project.live}
						target="_blank"
						rel="noreferrer"
					>
						<div class="sc-info project-info">
							<span class="project-index"
								>{String(index + 1).padStart(2, '0')}{index === 0 ? ' / FEATURED' : ''}</span
							>
							<h2>{project.title}</h2>
							<p>{project.homeDescription ?? project.description}</p>
							<div class="tag-list">
								{#each project.tags as tag}<span class="tag">{tag}</span>{/each}
							</div>
						</div>
						<div class="dev project-visual">
							<img src={project.image} alt={`${project.title} project interface`} />
						</div>
					</a>
				{/each}
			</div>
		</div>
	</section>
</div>
