<script>
	// A project card. By default the whole card links to the live site; with `detailed`
	// it shows the full description and separate live and source links.
	export let project;
	export let index = 0;
	export let detailed = false;
	export let wide = false;
</script>

<svelte:element
	this={detailed ? 'article' : 'a'}
	class="card rv"
	class:wide
	href={detailed ? undefined : project.live}
	target={detailed ? undefined : '_blank'}
	rel={detailed ? undefined : 'noreferrer'}
	style="--t:{project.tint}; --d:{(index % 3) * 0.1}s"
>
	<div class="img">
		{#if project.category === 'client'}<span class="badge">Client project</span>{/if}
		<img
			src={project.image}
			alt={`${project.title} project ${detailed ? 'preview' : 'interface'}`}
			loading="lazy"
		/>
	</div>
	<div class="txt">
		<h3>
			{project.title}
			{#if !detailed}
				<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.6"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"><path d="M7 17L17 7M8 7h9v9" /></svg
				>
			{/if}
		</h3>
		<p>{detailed ? project.description : project.homeDescription ?? project.description}</p>
		<div class="tags">
			{#each project.tags as tag}<span>{tag}</span>{/each}
		</div>
		{#if detailed}
			<div class="links">
				{#if project.live}<a href={project.live} target="_blank" rel="noreferrer">Live site ↗</a
					>{/if}
				{#if project.source}<a href={project.source} target="_blank" rel="noreferrer"
						>Source code ↗</a
					>{/if}
			</div>
		{/if}
	</div>
</svelte:element>
