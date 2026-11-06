<script>
	import { whatsappUrl, resumeUrl } from '$lib/site';

	const chat = whatsappUrl('Hi Siang, I found you through your portfolio.');
</script>

<svelte:head><title>Contact — Siang</title></svelte:head>

<div class="pg">
	<div class="wrap pagehead">
		<p class="eyebrow ln"><span style="--d:.1s">Contact</span></p>
		<h1 class="ln"><span style="--d:.2s">Need a website? Let’s talk.</span></h1>
		<p class="fade" style="--d:.5s">
			Tell me about your business and what you need. I’ll reply to you on WhatsApp.
		</p>
	</div>

	<section class="sec wrap">
		<div class="cols3 side">
			<div class="box rv">
				<h3>Message me on WhatsApp</h3>
				<p>The quickest way to reach me. Tell me what you need and I’ll reply there.</p>
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
			</div>
			<div class="box rv" style="--d:.1s">
				<h3>Helpful to include</h3>
				<ul>
					<li>What your business does</li>
					<li>What you need: a landing page, business, portfolio, or product site</li>
					<li>Any examples of sites you like</li>
					<li>When you’d like it ready</li>
				</ul>
			</div>
			<div class="box rv" style="--d:.2s">
				<h3>Hiring?</h3>
				<p>You can read my background and credentials in my résumé.</p>
				<a class="lnk" href={resumeUrl} target="_blank" rel="noreferrer">View résumé ↗</a>
			</div>
		</div>
	</section>
</div>
