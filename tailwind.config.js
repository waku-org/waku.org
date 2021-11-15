module.exports = {
	purge: ["./src/**/*.css", "./**/*.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			'body': ['"Open Sans"'],
			'special': ['"IBM Plex Mono"']
		},
		colors: {
			white: '#fff',
			white70: 'rgba(255, 255, 255, 0.7)',
			black: '#000',
			blue: '#3A71F9',
			blue02: '#8AAFF9',
			green: '#18B088',
			pink: '#FDB4C4',
			gray: '#242424',
			gray300: '#E0E0E0',
			gray75: 'rgba(21, 21, 18, 0.75)',
			gray02: 'rgba(21, 21, 18, 0.02)',
			grayDark: '#525252',
			light: '#E8E9ED',
			purple: '#8072E9',
			red: '#f55c7c',
			yellow: '#FACA11',
		},
		screens: {
			'none': '100%',
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1340px',
			'2xl': '1400px',
			'3xl': '1700px'
		},
		extend: {
			backgroundImage: theme => ({
				'link-arrow-black': "url('/assets/images/arrow/arrow-black.svg')",
				'link-arrow-blue': "url('/assets/images/arrow/arrow-blue.svg')",
				'link-arrow-white': "url('/assets/images/arrow/arrow-white.svg')",
				'link-arrow-pink': "url('/assets/images/arrow/arrow-pink.svg')",
				'branch': "url('/assets/images/branch.svg')",
				'eye-open-black': "url('/assets/images/icon/eye-open-black.svg')",
				'eye-close-white': "url('/assets/images/icon/eye-close-white.svg')",
			}),
			borderWidth: theme => ({
				'thin': '.25px',
			}),
			fontSize: theme => ({
				'10': '.625rem',
				'32': ['32px', '42px']
			}),
			gridTemplateColumns: theme => ({
				'footer-md': '1fr 2.5fr',
				'footer-xl': '40px 207px 1fr 0.65fr'
			}),
			height: theme => ({
				'18': '4.5rem',
				'26': '6.5rem',
				'98': '24.5rem',
			}),
			maxWidth: theme => ({
				'14-5r': '14.5rem',
				'15r': '15rem',
				'22r': '22rem',
				'34r': '34rem',
			}),
			minWidth: theme => ({
				'14-5r': '14.5rem',
				'22r': '22rem',
				'34r': '34rem',
			}),
			padding: theme => ({
				'18': '4.5rem',
				'26': '6.5rem',
				'30': '7.5rem',
			}),
			margin: theme => ({
				'25': '6.25rem',
				'35': '8.725rem',
			}),
			width: theme => ({
				'22r': '22rem',
				'34r': '34rem',
				'footer-input': 'calc(100% - 76px)'
			}),
			zIndex: {
				'-1':'-1',
				'-2':'-2',
				'-3':'-3',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
