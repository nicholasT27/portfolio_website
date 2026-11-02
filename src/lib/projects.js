// Keep portfolio metadata in one place so the home page and archive stay in sync.
// `category` is 'client' (built for someone else) or 'personal'.
// `tint` is the soft background colour behind the project's screenshot.
export const projects = [
	{
		title: 'Bhoomi',
		category: 'client',
		description:
			'A portfolio website for a digital marketer and content creator, presenting services, campaign work and contact in one clear, responsive site.',
		homeDescription:
			'A portfolio website for a digital marketer and content creator, built for a real client.',
		brief:
			'A portfolio site for a digital marketer and content creator, to present their services and campaign work.',
		built:
			'A responsive Next.js site that brings services, campaign work and contact together in one place.',
		featured: true,
		image: '/bhoomi-desktop.png',
		tags: ['Next.js', 'React', 'Tailwind CSS'],
		live: 'https://bhoomi-em3.pages.dev',
		tint: '#efe6e4'
	},
	{
		title: 'Next Job',
		category: 'personal',
		description:
			'A job portal whose responsive layout was redesigned with the aid of Codex, helping candidates discover roles and employers manage vacancies more clearly.',
		homeDescription:
			'A job portal whose responsive layout was redesigned with the aid of Codex, helping candidates discover roles and employers manage vacancies more clearly.',
		featured: true,
		image: '/portfolio-pic-1(desktop).png',
		tags: ['SvelteKit', 'Tailwind CSS', 'PocketBase', 'AWS'],
		live: 'https://portfolio-next-job.pages.dev/',
		source: 'https://github.com/nicholasT27/portfolio_next_job',
		tint: '#e6ebf3'
	},
	{
		title: 'Sneakers Ecommerce',
		category: 'personal',
		description:
			'A responsive full-stack storefront with a Supabase product catalog, customer accounts, cart, wishlist, inventory, and simulated checkout, built and tested with the aid of Codex.',
		homeDescription:
			'A Codex-assisted full-stack ecommerce prototype backed by Supabase, from product discovery through no-payment order confirmation.',
		featured: true,
		image: '/ecommerce-product-gallery.png',
		tags: ['React', 'Tailwind CSS', 'Express', 'Supabase'],
		live: 'https://ecommerce-product-page-five-ashen.vercel.app',
		source: 'https://github.com/nicholasT27/Ecommerce_Product_Page',
		tint: '#f0e8dc'
	},
	{
		title: 'Healthy Recipe Finder',
		category: 'personal',
		description:
			'A responsive recipe finder with quick whole-food recipes you can search by name or ingredient.',
		featured: true,
		image: '/healthy-recipe-finder-desktop.png',
		tags: ['Next.js', 'React', 'Tailwind CSS'],
		live: 'https://healthy-recipe-finder.pages.dev',
		source: 'https://github.com/nicholasT27/healthy-recipe-finder',
		tint: '#e4ede9'
	},
	{
		title: 'Agency Landing Page',
		category: 'personal',
		description: 'A clean, conversion-minded landing page with a responsive layout.',
		homeDescription: 'A polished, responsive marketing page built with a lean front-end stack.',
		practice: true,
		image: '/agency-desktop.png',
		tags: ['HTML', 'CSS', 'JavaScript'],
		live: 'https://nicholast27.github.io/agency-landing-page/',
		source: 'https://github.com/nicholasT27/agency-landing-page',
		tint: '#e3eaf5'
	},
	{
		title: 'Single Page Portfolio',
		category: 'personal',
		description: 'An earlier portfolio experiment built as a smooth single-page experience.',
		practice: true,
		image: '/Single-Page-Desktop.png',
		tags: ['HTML', 'CSS', 'JavaScript'],
		live: 'https://nicholast27.github.io/single-page-portfolio/',
		source: 'https://github.com/nicholasT27/single-page-portfolio',
		tint: '#ece9e2'
	},
	{
		title: 'Tech Book Club',
		category: 'personal',
		description: 'A responsive landing page for a tech book club.',
		homeDescription: 'A responsive landing page for a tech book club.',
		practice: true,
		image: '/Techbook-Desktop.png',
		tags: ['HTML', 'CSS'],
		live: 'https://nicholast27.github.io/tech-book-club-landing-page/',
		source: 'https://github.com/nicholasT27/tech-book-club-landing-page',
		tint: '#efe9df'
	}
];

// The work page shows client work, full projects, and earlier practice builds in separate
// sections. `practice: true` marks small exercises that are shown compactly.
export const clientProjects = projects.filter((project) => project.category === 'client');
export const personalProjects = projects.filter(
	(project) => project.category === 'personal' && !project.practice
);
export const practiceProjects = projects.filter((project) => project.practice);

// The home page leads with the client case study, then a short set of personal projects.
export const featuredPersonal = projects.filter(
	(project) => project.featured && project.category === 'personal'
);
