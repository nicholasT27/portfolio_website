// Keep portfolio metadata in one place so the home page and archive stay in sync.
// `category` is 'client' (built for someone else) or 'personal'.
// `theme` sets the colour and texture the page backdrop blends to while a project is on screen.
export const projects = [
	{
		title: 'Bhoomi',
		category: 'client',
		description:
			'A portfolio website for a digital marketer and content creator, presenting services, campaign work and contact in one clear, responsive site.',
		homeDescription:
			'A portfolio website for a digital marketer and content creator, built for a real client.',
		featured: true,
		image: '/bhoomi-desktop.png',
		tags: ['Next.js', 'React', 'Tailwind CSS'],
		live: 'https://bhoomi-em3.pages.dev',
		theme: { bg: '#7a2f3f', ink: '#fff0ee', tx: 'mesh:1,half:.5' }
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
		theme: { bg: '#1d2f6f', ink: '#eaf0ff', tx: 'aurora:1' }
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
		theme: { bg: '#5a1a45', ink: '#ffe9f3', tx: 'mesh:1' }
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
		theme: { bg: '#0f4c4a', ink: '#e2fffb', tx: 'aurora:1,waves:.5' }
	},
	{
		title: 'Agency Landing Page',
		category: 'personal',
		description: 'A clean, conversion-minded landing page with a responsive layout.',
		homeDescription: 'A polished, responsive marketing page built with a lean front-end stack.',
		featured: true,
		image: '/agency-desktop.png',
		tags: ['HTML', 'CSS', 'JavaScript'],
		live: 'https://nicholast27.github.io/agency-landing-page/',
		source: 'https://github.com/nicholasT27/agency-landing-page',
		theme: { bg: '#3d2480', ink: '#f0e9ff', tx: 'aurora:1,dots:.5' }
	},
	{
		title: 'Single Page Portfolio',
		category: 'personal',
		description: 'An earlier portfolio experiment built as a smooth single-page experience.',
		image: '/Single-Page-Desktop.png',
		tags: ['HTML', 'CSS', 'JavaScript'],
		live: 'https://nicholast27.github.io/single-page-portfolio/',
		source: 'https://github.com/nicholasT27/single-page-portfolio',
		theme: { bg: '#6b2a1a', ink: '#ffeee6', tx: 'mesh:1' }
	},
	{
		title: 'Tech Book Club',
		category: 'personal',
		description: 'An editorial landing page for developers who like to learn from books.',
		homeDescription: 'An editorial landing page for curious developers and avid readers.',
		featured: true,
		image: '/Techbook-Desktop.png',
		tags: ['HTML', 'CSS'],
		live: 'https://nicholast27.github.io/tech-book-club-landing-page/',
		source: 'https://github.com/nicholasT27/tech-book-club-landing-page',
		theme: { bg: '#1f2547', ink: '#e8ecff', tx: 'aurora:1,grid:.4' }
	}
];

// The work page shows client work and personal projects in separate sections.
export const clientProjects = projects.filter((project) => project.category === 'client');
export const personalProjects = projects.filter((project) => project.category === 'personal');

// The home page intentionally shows a smaller, curated subset.
export const featuredProjects = projects.filter((project) => project.featured);
