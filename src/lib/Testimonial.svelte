<script>
	import { testimonial } from '$lib/testimonial';
</script>

<section
	class="quote"
	data-bg="#241038"
	data-ink="#fdf0f7"
	data-tx="aurora:1,dots:.5"
	data-label="Client testimonial"
>
	<div class="ghost" aria-hidden="true">“</div>
	<div class="in">
		<p class="eyebrow">CLIENT TESTIMONIAL</p>
		<figure class="quote-figure">
			<blockquote class="big" data-words>“{testimonial.quote}”</blockquote>
			<figcaption class="quote-by rv">
				<span class="quote-avatar" aria-hidden="true">{testimonial.name.charAt(0)}</span>
				<span class="quote-who">
					<strong>{testimonial.name}</strong>
					<span>{testimonial.role}</span>
				</span>
				<a class="quote-link" href={testimonial.url} target="_blank" rel="noreferrer"
					>View the website <span>↗</span></a
				>
			</figcaption>
		</figure>
	</div>
</section>
