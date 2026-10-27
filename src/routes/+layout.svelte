<script>
	import { onMount, tick } from 'svelte';
	import { afterNavigate, beforeNavigate, goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { createQuiet } from '$lib/quiet';
	import '../app.css';

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/portfolio', label: 'Projects' },
		{ href: '/contact', label: 'Contact' }
	];

	let quiet;
	let leaving = false;
	let passing = false;
	let markLeft = 0;
	let markWidth = 0;

	// Slide the underline marker under the current page's link.
	function placeMark() {
		const current = document.querySelector('.main-nav a.on');
		if (!current) return;
		markLeft = current.offsetLeft + 14;
		markWidth = current.offsetWidth - 28;
	}

	onMount(() => {
		quiet = createQuiet();
		quiet.mount();
		placeMark();
		window.addEventListener('resize', placeMark);
		if (document.fonts && document.fonts.ready) document.fonts.ready.then(placeMark);
		return () => {
			quiet.destroy();
			window.removeEventListener('resize', placeMark);
		};
	});

	afterNavigate(async () => {
		await tick();
		placeMark();
		if (quiet) quiet.refresh();
	});

	// The old page fades up and away before the next one rises in.
	beforeNavigate((navigation) => {
		if (passing || leaving || !navigation.to) return;
		if (navigation.type !== 'link' && navigation.type !== 'goto') return;
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		const target = navigation.to.url;
		if (target.pathname === $page.url.pathname) return;
		navigation.cancel();
		leave(target);
	});

	async function leave(target) {
		leaving = true;
		await new Promise((resolve) => setTimeout(resolve, 240));
		passing = true;
		await goto(target.pathname + target.search + target.hash);
		passing = false;
		leaving = false;
	}
</script>

<svelte:head>
	<meta
		name="description"
		content="Siang — web developer building thoughtful, accessible digital products."
	/>
</svelte:head>

<div class="fx" aria-hidden="true"><i /><i /><i /></div>
<div class="prog" id="prog" aria-hidden="true" />

<div class="site-shell">
	<header class="site-header" id="site-header">
		<div class="wrap">
			<a class="brand" href="/" aria-label="Siang, home">Siang</a>
			<nav class="main-nav" aria-label="Main navigation">
				{#each links as link}
					<a
						class:on={$page.url.pathname === link.href}
						aria-current={$page.url.pathname === link.href ? 'page' : undefined}
						href={link.href}>{link.label}</a
					>
				{/each}
				<i class="mark" style="left: {markLeft}px; width: {markWidth}px" />
			</nav>
		</div>
	</header>

	<main class:leaving><slot /></main>

	<footer class="site-footer wrap">
		<p class="eyebrow rv">Let’s build something useful</p>
		<a class="big rv" href="/contact"
			>Start a conversation
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="1.6"
				stroke-linecap="round"
				stroke-linejoin="round"
				aria-hidden="true"><path d="M7 17L17 7M8 7h9v9" /></svg
			></a
		>
		<div class="meta rv">
			<span>Based in Malaysia</span>
			<span>© {new Date().getFullYear()} Siang</span>
		</div>
	</footer>
</div>
