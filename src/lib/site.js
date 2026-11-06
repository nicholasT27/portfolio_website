// Contact details and document links used across the site, kept in one place.
export const whatsapp = '601165533097';

// A wa.me link that opens a WhatsApp chat with an optional pre-filled message.
export const whatsappUrl = (text = '') =>
	`https://wa.me/${whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

export const resumeUrl =
	'https://drive.google.com/file/d/17U7lxEtt_aCQndFmK9MwfnHy6z7P5BKO/view?usp=share_link';
export const certificateUrl =
	'https://drive.google.com/file/d/1TC5cQ-ors8yiV2AKKXMkgwWDJolJhBmW/view?usp=drive_link';
