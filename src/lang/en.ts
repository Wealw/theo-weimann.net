// noinspection SpellCheckingInspection

export let lang;
lang = {
	home: {
		first_name: 'Théo',
		last_name: 'Weimann',
		description: 'Fith year student at Cesi and graduate from UQÀM.'
	},
	profile: {
		title: 'Profile',
		content:
			[
				'Oy, my name is Théo Weimann, I\'m a french student in IT. I also like bouldering with friends and practice archery.',
				'I live in a small town near Strasbourg in France, and I\'m looking for an internship and maybe more if there are opportunities ;).',
				'During my previous internships I worked in various domain and country, from public to industries and France to Canada. I\'m looking for ways to discover even more.',
				'I\'m someone very curious and constantly looking for challenges. If you found my profile intressting don\'t hesitate to contact me.',
			]
	},
	project: {
		title: 'Projets',
		content: [
			{
				title: 'Portfolio',
				content: 'Mon portfolio personnel qui recensse l\'ensemble de mes projets personnels et de cours.',
				image: '/img/logo/favicon.svg',
				link_realisation: 'https://theo-weimann.net',
				link_sources: 'https://github.com/Wealw/theo-weimann.net'
			},
			{
				title: 'InaDyn Cloudflare Worker',
				content: 'Une version adapté à mes besoins d\'un worker Cloudflare pour mettre à jour des record DNS depuis un routeur Ubiquiti Unifi Dream Machine Pro.',
				image: '/img/logo/cloudflare.svg',
				link_realisation: 'https://theo-weimann.net',
				link_sources: 'https://github.com/Wealw/theo-weimann.net'
			},
			{
				title: 'QMK Firmware : Custom config',
				content: 'Ma propre configuration du firmware QMK pour mon clavier méchanique personalisé.',
				image: '/img/logo/QMK.webp',
				link_realisation: 'https://theo-weimann.net',
				link_sources: 'https://github.com/Wealw/theo-weimann.net'
			}
		]

	},
	contact: {
		title: 'Contact',
		content: {
			name: 'Nom complet',
			email: 'Email',
			message: 'Message',
			submit: 'Envoyer',
			success: 'Formulaire soumis !'
		}
	},
	legal: {
		title: 'Mention légales',
		content:
			['Host : Cloudflare Adresse : 6 place de la Madeleine 75008 Paris',
				'Host Phone : +33 7 57 90 52 73',
				'No cookies are used on this site.',
				'No personal data are treated on this site.']
	}
};
