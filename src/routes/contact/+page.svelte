<script>
	import { whatsappUrl, resumeUrl } from '$lib/site';

	// The form opens WhatsApp with the details pre-filled; the visitor taps send there.
	let sent = false;
	function sendToWhatsApp(event) {
		const data = new FormData(event.currentTarget);
		const text = [
			'Hi Siang, I found you through your portfolio.',
			`Name: ${data.get('name')}`,
			`Contact number: ${data.get('phone')}`,
			`Message: ${data.get('message')}`
		].join('\n');
		window.open(whatsappUrl(text), '_blank', 'noopener');
		sent = true;
	}
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

	<section class="sec wrap contact">
		<div>
			<p class="eyebrow rv">Tell me about your project</p>
			<form on:submit|preventDefault={sendToWhatsApp}>
				<div class="fld rv">
					<label for="name">Your name</label><input
						id="name"
						name="name"
						placeholder="How should I address you?"
						required
					/>
				</div>
				<div class="fld rv">
					<label for="phone">Contact number</label><input
						id="phone"
						name="phone"
						type="tel"
						inputmode="tel"
						autocomplete="tel"
						placeholder="e.g. 012 345 6789"
						required
					/>
				</div>
				<div class="fld rv">
					<label for="message">About your project</label><textarea
						id="message"
						name="message"
						rows="3"
						placeholder="What does your business do, and what do you need? A new website, updates, or help with an online store?"
						required
					/>
				</div>
				<button class="btn rv" type="submit"
					>{sent ? 'Opening WhatsApp ✓' : 'Send via WhatsApp'}
					<svg
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.6"
						stroke-linecap="round"
						stroke-linejoin="round"
						aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg
					></button
				>
			</form>
		</div>

		<aside class="side">
			<div class="box rv">
				<h3>Prefer to chat directly?</h3>
				<p>Open WhatsApp and message me straight away.</p>
				<a
					class="lnk"
					href={whatsappUrl('Hi Siang, I found you through your portfolio.')}
					target="_blank"
					rel="noreferrer">Chat on WhatsApp ↗</a
				>
			</div>
			<div class="box rv" style="--d:.1s">
				<h3>Helpful to include</h3>
				<ul>
					<li>What your business does</li>
					<li>What you need: a new site, updates, or store help</li>
					<li>Any examples of sites you like</li>
					<li>When you’d like it ready</li>
				</ul>
			</div>
			<div class="box rv" style="--d:.2s">
				<h3>Hiring?</h3>
				<p>You can read my background and credentials in my résumé.</p>
				<a class="lnk" href={resumeUrl} target="_blank" rel="noreferrer">View résumé ↗</a>
			</div>
		</aside>
	</section>
</div>
