<script>
	import { clientProjects, featuredPersonal } from '$lib/projects';
	import { whatsappUrl, resumeUrl } from '$lib/site';
	import BuildScene from '$lib/BuildScene.svelte';
	import ProjectCard from '$lib/ProjectCard.svelte';
	import Testimonial from '$lib/Testimonial.svelte';

	const chat = whatsappUrl('Hi Siang, I found you through your portfolio and I’d like a website.');

	// Quick facts that help a client or employer decide whether to keep reading.
	const proof = [
		{ label: 'Trained', value: 'Full Stack Web Development, Next Academy' },
		{ label: 'Studying', value: 'BIT (Hons), Wawasan Open University' },
		{ label: 'Focus', value: 'Landing pages and small business websites' },
		{ label: 'Builds with', value: 'Next.js, React and Tailwind CSS' }
	];

	// The four kinds of website I'm currently focused on.
	const services = [
		{
			title: 'A landing page',
			text: 'One focused page that explains your offer and gets visitors to take the next step.'
		},
		{
			title: 'A small business website',
			text: 'A few clear pages that show what you do and make it easy for customers to reach you.'
		},
		{
			title: 'A portfolio website',
			text: 'A site that presents your work, skills and story in one clear, professional place.'
		},
		{
			title: 'A simple product or service website',
			text: 'A straightforward site that presents what you offer, with clear details and a way to enquire.'
		}
	];

	const steps = [
		{
			title: 'Tell me what you need',
			text: 'Message me on WhatsApp about your business and what the site should do.'
		},
		{
			title: 'Agree the plan',
			text: 'We settle the pages, features and timeline before any work begins.'
		},
		{
			title: 'Build and review',
			text: 'You see the site take shape and give feedback along the way.'
		},
		{
			title: 'Launch and hand over',
			text: 'The site goes live and I make sure you know how to use it.'
		}
	];
</script>

<svelte:head><title>Siang — Web Developer in Selangor, Malaysia</title></svelte:head>

<div class="pg">
	<div class="wrap hero">
		<div class="copy">
			<p class="hi ln"><span style="--d:.15s">Hi, I’m Siang — web developer in Selangor</span></p>
			<h1 class="headline ln">
				<span style="--d:.28s">I build fast, mobile-friendly websites for small businesses.</span>
			</h1>
			<p class="lede fade" style="--d:.7s">
				Custom-coded landing pages, small business sites, portfolios, and simple product or service
				websites.
			</p>
			<div class="btns fade" style="--d:.9s">
				<a class="btn" href={chat} target="_blank" rel="noreferrer"
					>Chat on WhatsApp
					<svg
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.6"
						stroke-linecap="round"
						stroke-linejoin="round"
						aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg
					></a
				>
				<a class="lnk" href="/portfolio"
					>See my work
					<svg
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.6"
						stroke-linecap="round"
						stroke-linejoin="round"
						aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg
					></a
				>
			</div>
			<p class="hiring fade" style="--d:1.05s">
				Hiring? <a href={resumeUrl} target="_blank" rel="noreferrer">View my résumé ↗</a>
			</p>
		</div>

		<div class="art">
			<div
				class="arch"
				role="img"
				aria-label="A wireframe of a web page filling in with colour, block by block"
			>
				<div class="in"><BuildScene variant="wireframe" /></div>
			</div>
			<span class="chipf">Wireframe</span>
			<span class="chipf">Component</span>
			<span class="chipf">Live</span>
			<div class="note">
				Turning ideas into websites
				<svg viewBox="0 0 110 22" aria-hidden="true"><path d="M2 18 C 30 4, 70 4, 108 12" /></svg>
			</div>
		</div>
	</div>

	<section class="wrap proofwrap">
		<dl class="proof rv">
			{#each proof as item}
				<div>
					<dt>{item.label}</dt>
					<dd>{item.value}</dd>
				</div>
			{/each}
		</dl>
	</section>

	<section class="sec wrap">
		<p class="eyebrow rv">Currently focused on</p>
		<div class="sh"><h2 class="rv">Perfect if you need:</h2></div>
		<div class="cols4">
			{#each services as service, i}
				<div class="box rv" style="--d:{i * 0.1}s">
					<i>0{i + 1}</i>
					<h3>{service.title}</h3>
					<p>{service.text}</p>
				</div>
			{/each}
		</div>
		<p class="after rv">
			Not sure which one you need? <a href={chat} target="_blank" rel="noreferrer"
				>Message me and I’ll point you the right way ↗</a
			>
		</p>
	</section>

	<section class="sec wrap">
		<p class="eyebrow rv">How it works</p>
		<div class="sh"><h2 class="rv">From first message to a live website</h2></div>
		<ol class="steps">
			{#each steps as step, i}
				<li class="rv" style="--d:{i * 0.1}s">
					<i>0{i + 1}</i>
					<h3>{step.title}</h3>
					<p>{step.text}</p>
				</li>
			{/each}
		</ol>
	</section>

	<section class="sec wrap">
		<div class="sh">
			<div>
				<p class="eyebrow rv">Client work</p>
				<h2 class="rv">A website built for a real client</h2>
			</div>
			<a class="lnk rv" href="/portfolio"
				>View all projects
				<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.6"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg
				></a
			>
		</div>
		<div>
			{#each clientProjects as project, index}
				<ProjectCard {project} {index} detailed wide />
			{/each}
		</div>
	</section>

	<Testimonial />

	<section class="sec wrap">
		<div class="sh">
			<div>
				<p class="eyebrow rv">More projects</p>
				<h2 class="rv">Full-stack builds I made to sharpen my skills</h2>
			</div>
		</div>
		<div class="cards">
			{#each featuredPersonal as project, index}
				<ProjectCard {project} {index} />
			{/each}
		</div>
	</section>
</div>
