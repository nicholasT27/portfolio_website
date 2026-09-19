<script>
	import { page } from '$app/stores';
	import '../app.css';

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/portfolio', label: 'Work' },
		{ href: '/about', label: 'About' },
		{ href: '/contact', label: 'Contact' }
	];
</script>

<svelte:head>
	<meta
		name="description"
		content="Siang Nicholas — web developer building thoughtful, accessible digital products."
	/>
</svelte:head>

<div class="site-shell">
	<header class="site-header">
		<a class="brand" href="/" aria-label="Siang Nicholas, home">
			<span class="brand-mark">S</span>
			<span class="brand-name">Siang Nicholas</span>
		</a>

		<nav class="main-nav" aria-label="Main navigation">
			{#each links as link, index}
				<a
					class:active={$page.url.pathname === link.href}
					aria-current={$page.url.pathname === link.href ? 'page' : undefined}
					href={link.href}
				>
					<span>0{index + 1}</span>{link.label}
				</a>
			{/each}
		</nav>

		<a class="availability" href="/contact"><span />Available for projects</a>
	</header>

	<main><slot /></main>

	<footer class="site-footer">
		<div>
			<p class="eyebrow">LET'S BUILD SOMETHING USEFUL</p>
			<a class="footer-cta" href="/contact">Start a conversation <span>↗</span></a>
		</div>
		<div class="footer-meta">
			<a href="https://github.com/nicholasT27" target="_blank" rel="noreferrer">GitHub ↗</a>
			<p>Based in Malaysia · © {new Date().getFullYear()}</p>
		</div>
	</footer>
</div>
