<script>
	import { testimonial } from '$lib/testimonial';
</script>

<section class="quote wrap">
	<figure class="qbox rv" style="margin: 0">
		<p class="eyebrow">Client testimonial</p>
		<blockquote>“{testimonial.quote}”</blockquote>
		<figcaption class="qby">
			<span class="qav" aria-hidden="true">{testimonial.name.charAt(0)}</span>
			<div>
				<b>{testimonial.name}</b>
				<span>{testimonial.role}</span>
			</div>
			<a href={testimonial.url} target="_blank" rel="noreferrer">View the website ↗</a>
		</figcaption>
	</figure>
</section>
