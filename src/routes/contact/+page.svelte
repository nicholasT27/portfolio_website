<script>
	// Siang's WhatsApp number in international format, digits only (no "+", spaces or dashes).
	const WHATSAPP_NUMBER = '601165533097';

	let name = '';
	let phone = '';
	let message = '';
	let sent = false;

	// Opens WhatsApp with the form details pre-filled so the visitor only has to press send.
	function sendToWhatsApp() {
		const text = `Hi Siang, I'm ${name}.\n\n${message}\n\nContact number: ${phone}`;
		window.open(
			`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
			'_blank',
			'noopener'
		);
		sent = true;
	}
</script>

<svelte:head><title>Contact — Siang</title></svelte:head>

<div class="page">
	<section
		class="hero contact-pitch"
		data-bg="#241038"
		data-ink="#fdf0f7"
		data-tx="mesh:1"
		data-label="Contact"
	>
		<div class="ghost" aria-hidden="true">HELLO</div>
		<div class="in">
			<p class="eyebrow">CONTACT / 03</p>
			<h1 class="display">
				<span class="w" style="--k:0">Have</span> <span class="w" style="--k:1">an</span>
				<span class="w" style="--k:2">idea?</span> <em>Let’s talk.</em>
			</h1>
			<p class="lede">
				Whether it’s a freelance opportunity, a collaboration, or simply a good conversation about
				the web, my WhatsApp is open.
			</p>
			<div class="cue"><i />Scroll</div>
		</div>
	</section>

	<section
		class="contact-form"
		data-bg="#10264a"
		data-ink="#eaf3ff"
		data-tx="aurora:1,grid:.4"
		data-label="Tell me about your project"
	>
		<div class="in">
			<h2 class="form-title">Tell me about your project.</h2>
			<form on:submit|preventDefault={sendToWhatsApp}>
				<div class="field rv">
					<label for="name">Your name</label><input
						id="name"
						name="name"
						bind:value={name}
						placeholder="How should I address you?"
						required
					/>
				</div>
				<div class="field rv">
					<label for="phone">Contact number</label><input
						id="phone"
						name="phone"
						type="tel"
						bind:value={phone}
						placeholder="+60 12-345 6789"
						required
					/>
				</div>
				<div class="field rv">
					<label for="message">Project or message</label><textarea
						id="message"
						name="message"
						bind:value={message}
						placeholder="A little context goes a long way..."
						required
					/>
				</div>
				<div class="rv">
					<button class="btn primary" type="submit"
						>{sent ? 'Opened in WhatsApp ✓' : 'Send via WhatsApp'} <span>↗</span></button
					>
				</div>
				<p class="prototype-note">
					Sending opens WhatsApp with your details pre-filled; press send there to deliver them.
				</p>
			</form>
		</div>
	</section>
</div>
