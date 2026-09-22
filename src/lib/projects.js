// Keep portfolio metadata in one place so the home page and archive stay in sync.
export const projects = [
	{
		title: 'Next Job',
		description:
			'A job portal whose responsive layout was redesigned with the aid of Codex, helping candidates discover roles and employers manage vacancies more clearly.',
		homeDescription:
			'A job portal whose responsive layout was redesigned with the aid of Codex, helping candidates discover roles and employers manage vacancies more clearly.',
		featured: true,
		image: '/portfolio-pic-1(desktop).png',
		tags: ['SvelteKit', 'Tailwind CSS', 'PocketBase', 'AWS'],
		live: 'https://portfolio-next-job.pages.dev/',
		source: 'https://github.com/nicholasT27/portfolio_next_job'
	},
	{
		title: 'Sneakers Ecommerce',
		description:
			'A responsive full-stack storefront with a Supabase product catalog, customer accounts, cart, wishlist, inventory, and simulated checkout, built and tested with the aid of Codex.',
		homeDescription:
			'A Codex-assisted full-stack ecommerce prototype backed by Supabase, from product discovery through no-payment order confirmation.',
		featured: true,
		image: '/ecommerce-product-gallery.png',
		tags: ['React', 'Tailwind CSS', 'Express', 'Supabase'],
		live: 'https://ecommerce-product-page-five-ashen.vercel.app',
		source: 'https://github.com/nicholasT27/Ecommerce_Product_Page'
	},
	{
		title: 'Tip Calculator',
		description: 'A focused responsive utility that makes splitting bills quick and clear.',
		featured: true,
		image: '/tip-calculator-desktop.png',
		tags: ['React', 'Tailwind CSS'],
		live: 'https://nicholast27.github.io/tip-calculator-app/',
		source: 'https://github.com/nicholasT27/tip-calculator-app'
	},
	{
		title: 'Agency Landing Page',
		description: 'A clean, conversion-minded landing page with a responsive layout.',
		homeDescription: 'A polished, responsive marketing page built with a lean front-end stack.',
		featured: true,
		image: '/agency-desktop.png',
		tags: ['HTML', 'CSS', 'JavaScript'],
		live: 'https://nicholast27.github.io/agency-landing-page/',
		source: 'https://github.com/nicholasT27/agency-landing-page'
	},
	{
		title: 'Single Page Portfolio',
		description: 'An earlier portfolio experiment built as a smooth single-page experience.',
		image: '/Single-Page-Desktop.png',
		tags: ['HTML', 'CSS', 'JavaScript'],
		live: 'https://nicholast27.github.io/single-page-portfolio/',
		source: 'https://github.com/nicholasT27/single-page-portfolio'
	},
	{
		title: 'Tech Book Club',
		description: 'An editorial landing page for developers who like to learn from books.',
		homeDescription: 'An editorial landing page for curious developers and avid readers.',
		featured: true,
		image: '/Techbook-Desktop.png',
		tags: ['HTML', 'CSS'],
		live: 'https://nicholast27.github.io/tech-book-club-landing-page/',
		source: 'https://github.com/nicholasT27/tech-book-club-landing-page'
	},
	{
		title: 'Email Automator',
		description: 'A Node.js service that monitors an inbox and responds with predefined logic.',
		image: '/email.png',
		tags: ['Node.js', 'Nodemailer', 'IMAP'],
		source: 'https://github.com/nicholasT27/email_automator'
	},
	{
		title: 'Luno Premium',
		description: 'A command-line tool comparing cryptocurrency pricing across Luno and Binance.',
		image: '/crypto.png',
		tags: ['Node.js', 'Luno API', 'Binance API'],
		source: 'https://github.com/nicholasT27/luno-premium'
	}
];

// The home page intentionally shows a smaller, curated subset.
export const featuredProjects = projects.filter((project) => project.featured);
