// noinspection SpellCheckingInspection

export let lang;
lang = {
	home: {
		first_name: 'Théo',
		last_name: 'Weimann',
		description: 'Étudiant de 4ème année à Cesi et à l\'UQÀM'
	},
	profile: {
		title: 'Profile',
		content:
			[
				'Salut, je m\'appelle Théo Weimann, je suis un passioné d\'informatique et d\'éléctronique. J\'aime aussi beaucoup l\'escalade.',
				'Je vis dans une petite ville proche de Strasbourg. J\'étudie actuelement l\'informatique à Cesi Ecole d\'Ingéneur et j\'ai pris part à un échange d\'un an avec l\'UQAM à Montréal au Canada.',
				'Tout au long de ma carrière, j\'ai eu l\'occasion de travailler dans des domaines variés, de la fonction publique térritoriale à la multi-nationale. J\'ai aussi eu de bonnes experience internationales lors de mes voyages.',
				'Je suis quelqu\'un de très minutieux dans mon travail, j\'aime constament découvir de nouvelle choses et rélever des défis! J\'ai fais l\'effort d\'aquérir un haut niveau d\'expertise afin de toujours être en mesure d\'assumer aux mieux mes choix.'
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
			['Hébergeur : Cloudflare Adresse : 6 place de la Madeleine 75008 Paris',
				'Téléphone : +33 7 57 90 52 73',
				'Aucun cookie n\'est utilisé sur ce site.',
				'Aucun traitement de données personelles n\'est réalisé sur ce site.']
	}
};
