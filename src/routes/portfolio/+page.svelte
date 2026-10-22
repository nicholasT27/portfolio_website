<script>
	import { projects } from '$lib/projects';
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

	<section
		class="say section-intro"
		data-bg="#10264a"
		data-ink="#eaf3ff"
		data-tx="aurora:1,dots:.5"
		data-label="All projects"
	>
		<div class="in">
			<p class="eyebrow">ALL PROJECTS / {String(projects.length).padStart(2, '0')}</p>
			<h2 class="big" data-words>Built to be <em>used,</em> not just viewed.</h2>
		</div>
	</section>

	<!-- Project content is maintained centrally in src/lib/projects.js. -->
	{#each projects as project, index}
		<section
			class="proj"
			class:alt={index % 2 === 1}
			data-bg={project.theme.bg}
			data-ink={project.theme.ink}
			data-tx={project.theme.tx}
			data-label={`${String(index + 1).padStart(2, '0')} · ${project.title}`}
		>
			<div class="ghost" aria-hidden="true">{String(index + 1).padStart(2, '0')}</div>
			<div class="in">
				<article class="pgrid project-card">
					<div class="info project-info rv">
						<span class="project-index"
							>{String(index + 1).padStart(2, '0')}{index === 0 ? ' / FEATURED' : ''}</span
						>
						<h2>{project.title}</h2>
						<p>{project.description}</p>
						<div class="tag-list">
							{#each project.tags as tag}<span class="tag">{tag}</span>{/each}
						</div>
						<div class="project-links">
							{#if project.live}<a href={project.live} target="_blank" rel="noreferrer"
									>Live site ↗</a
								>{/if}{#if project.source}<a href={project.source} target="_blank" rel="noreferrer"
									>Source code ↗</a
								>{/if}
						</div>
					</div>
					<div class="par" data-par=".08">
						<div class="dev project-visual">
							<img src={project.image} alt={`${project.title} project preview`} />
						</div>
					</div>
				</article>
			</div>
		</section>
	{/each}
</div>
