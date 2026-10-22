<script>
	// One full-colour chapter for a project on the work page.
	export let project;
	export let label;
	export let pill;
	export let ghost = '';
	export let alt = false;
</script>

<section
	class="proj"
	class:alt
	data-bg={project.theme.bg}
	data-ink={project.theme.ink}
	data-tx={project.theme.tx}
	data-label={label}
>
	<div class="ghost" aria-hidden="true">{ghost}</div>
	<div class="in">
		<article class="pgrid project-card">
			<div class="info project-info rv">
				<span class="project-index">{pill}</span>
				<h2>{project.title}</h2>
				<p>{project.description}</p>
				<div class="tag-list">
					{#each project.tags as tag}<span class="tag">{tag}</span>{/each}
				</div>
				<div class="project-links">
					{#if project.live}<a href={project.live} target="_blank" rel="noreferrer">Live site ↗</a
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
