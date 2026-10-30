<script>
	// The form opens WhatsApp with the details pre-filled; the visitor taps send there.
	const whatsapp = '601165533097';
	let sent = false;
	function sendToWhatsApp(event) {
		const data = new FormData(event.currentTarget);
		const text = [
			'Hi Siang, I found you through your portfolio.',
			`Name: ${data.get('name')}`,
			`Contact number: ${data.get('phone')}`,
			`Message: ${data.get('message')}`
		].join('\n');
		window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
		sent = true;
	}
</script>

<svelte:head><title>Contact — Siang</title></svelte:head>

<div class="pg">
	<div class="wrap pagehead">
		<p class="eyebrow ln"><span style="--d:.1s">Contact / 03</span></p>
		<h1 class="ln"><span style="--d:.2s">Have an idea? Let’s talk.</span></h1>
		<p class="fade" style="--d:.5s">
			Whether it’s a freelance opportunity, a collaboration, or simply a good conversation about the
			web, my inbox is open.
		</p>
	</div>

	<section class="sec wrap" style="max-width: 820px">
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
				<label for="message">Project or message</label><textarea
					id="message"
					name="message"
					rows="3"
					placeholder="A little context goes a long way..."
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
	</section>
</div>
