<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import '../app.css';

	// Shift the background glow's hue as the page scrolls, unless motion is reduced.
	onMount(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		let frame = 0;
		const update = () => {
			frame = 0;
			const max = document.documentElement.scrollHeight - window.innerHeight;
			const progress = max > 0 ? window.scrollY / max : 0;
			document.documentElement.style.setProperty('--hue', `${Math.round(progress * 70)}deg`);
		};
		const onScroll = () => {
			if (!frame) frame = requestAnimationFrame(update);
		};
		window.addEventListener('scroll', onScroll, { passive: true });
		update();
		return () => {
			window.removeEventListener('scroll', onScroll);
			cancelAnimationFrame(frame);
		};
	});

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
		content="Siang — web developer building thoughtful, accessible digital products."
	/>
</svelte:head>

<div class="mesh" aria-hidden="true" />

<div class="site-shell">
	<header class="site-header">
		<a class="brand" href="/" aria-label="Siang, home">
			<span class="brand-mark">S</span>
			<span class="brand-name">Siang</span>
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
			<p>Based in Malaysia · © {new Date().getFullYear()}</p>
		</div>
	</footer>
</div>
