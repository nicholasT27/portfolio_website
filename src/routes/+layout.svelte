<script>
	import { onMount, tick } from 'svelte';
	import { afterNavigate, beforeNavigate, goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { createDusk } from '$lib/dusk';
	import '../app.css';

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/portfolio', label: 'Work' },
		{ href: '/about', label: 'About' },
		{ href: '/contact', label: 'Contact' }
	];

	// What the page-change curtain shows for each destination.
	const curtains = {
		'/': { text: 'Siang', bg: '#241038' },
		'/portfolio': { text: 'Work', bg: '#241038' },
		'/about': { text: 'About', bg: '#3a1030' },
		'/contact': { text: 'Contact', bg: '#241038' }
	};

	let dusk;
	let curtain;
	let curtainText = '';
	let curtainBg = '#241038';
	let covering = false;
	let passing = false;

	onMount(() => {
		dusk = createDusk();
		dusk.mount();
		return () => dusk.destroy();
	});

	afterNavigate(async () => {
		await tick();
		if (dusk) dusk.refresh();
	});

	// A colour curtain wipes across the screen between pages.
	beforeNavigate((navigation) => {
		if (passing || covering || !navigation.to) return;
		if (navigation.type !== 'link' && navigation.type !== 'goto') return;
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		const target = navigation.to.url;
		if (target.pathname === $page.url.pathname) return;
		navigation.cancel();
		runCurtain(target);
	});

	async function runCurtain(target) {
		covering = true;
		const style = curtains[target.pathname] || curtains['/'];
		curtainText = style.text;
		curtainBg = style.bg;
		await tick();
		const cover = curtain.animate(
			[{ transform: 'translateY(101%)' }, { transform: 'translateY(0)' }],
			{ duration: 420, easing: 'cubic-bezier(.7,0,.2,1)', fill: 'forwards' }
		);
		await cover.finished;
		passing = true;
		await goto(target.pathname + target.search + target.hash);
		passing = false;
		await tick();
		if (dusk) dusk.refresh();
		const reveal = curtain.animate(
			[{ transform: 'translateY(0)' }, { transform: 'translateY(-101%)' }],
			{ duration: 520, easing: 'cubic-bezier(.7,0,.2,1)', fill: 'forwards' }
		);
		await reveal.finished;
		curtain.getAnimations().forEach((animation) => animation.cancel());
		covering = false;
	}
</script>

<svelte:head>
	<meta
		name="description"
		content="Siang — web developer building thoughtful, accessible digital products."
	/>
</svelte:head>

<!-- Fixed backdrop: colour and texture layers that the scroll effects blend between. -->
<div class="bd" aria-hidden="true">
	<div class="t-dots" data-layer="dots" />
	<div class="t-stripes" data-layer="stripes" />
	<div class="t-grid" data-layer="grid" />
	<div class="t-half" data-layer="half" />
	<div class="t-waves" data-layer="waves" />
	<div class="t-mesh" data-layer="mesh" />
	<div class="t-aurora" data-layer="aurora"><i /><i /><i /></div>
	<div class="t-grain" id="grain" />
</div>
<div class="prog" id="prog" aria-hidden="true" />
<div class="curtain" bind:this={curtain} style="background: {curtainBg}" aria-hidden="true">
	{curtainText}
</div>

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

	<footer
		class="site-footer"
		data-bg="#0f2f35"
		data-ink="#e6fffb"
		data-tx="aurora:1"
		data-label="Let's talk"
	>
		<div class="in footer-inner">
			<div>
				<p class="eyebrow">LET'S BUILD SOMETHING USEFUL</p>
				<a class="footer-cta" data-magnet href="/contact">Start a conversation <span>↗</span></a>
			</div>
			<div class="footer-meta">
				<p>Based in Malaysia · © {new Date().getFullYear()}</p>
			</div>
		</div>
	</footer>
</div>

<div class="chip" id="chip" aria-hidden="true">Hello</div>
