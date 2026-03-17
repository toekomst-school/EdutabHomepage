/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			'sm': '640px',
			'md': '820px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px'
		},
		extend: {
			keyframes: {
				'float-tablet': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-8px)' }
				}
			},
			animation: {
				'float-tablet': 'float-tablet 4s ease-in-out infinite'
			},
			colors: {
				// Semantic colors for shadcn/ui components - WCAG 2.1 AA compliant
				'btn-primary': '#4CAF50',
				'btn-primary-foreground': '#262626',
				orange: '#FF8533',
				secondary: '#E5E5E5',
				'secondary-foreground': '#262626',
				accent: '#FF8A5C',
				'accent-foreground': '#262626',
				destructive: '#EF476F',
				'destructive-foreground': '#FFFFFF',
				background: '#FFFFFF',
				foreground: '#262626',
				card: '#FFFFFF',
				'card-foreground': '#262626',
				popover: '#FFFFFF',
				'popover-foreground': '#262626',
				border: '#E5E5E5',
				input: '#E5E5E5',
				ring: '#4CAF50',
				// Primary brand colors
				primary: {
					green: '#4CAF50',
					greenLight: '#66BB6A',
					greenLighter: '#81C784',
					greenLightest: '#A5D6A7',
					greenDark: '#388E3C',
					greenDarker: '#2E7D32',
					coral: '#FF6B35',
					coralLight: '#FF8A5C',
					coralDark: '#E55A2A',
					orange: '#FF8533'
				},
				// Accent colors (use: accent-teal, accent-purple, etc.)
				accent: {
					teal: '#2EC4B6',
					tealLight: '#4DD9CC',
					tealDark: '#25A094',
					purple: '#7B2CBF',
					blue: '#4361EE',
					green: '#06D6A0',
					pink: '#EF476F'
				},
				// Brand colors
				brand: {
					50: '#e3edfe',
					100: '#cde7f7',
					200: '#a5d6fc',
					300: '#7c8bdb',
					400: '#5b9bc0',
					500: '#3592fd',
					600: '#2570ef',
					700: '#1a58e7',
					800: '#1547a0',
					900: '#0f3d8c',
					950: '#0a1a2c',
				},
				// Neutral colors
				neutral: {
					50: '#FAFAFA',
					100: '#F5F5F5',
					200: '#E5E5E5',
					300: '#D4D4D4',
					400: '#A3A3A3',
					500: '#737373',
					600: '#525252',
					700: '#404040',
					800: '#262626',
					900: '#171717',
					950: '#0A0A0A'
				},
				// Semantic colors
				mintCream: '#F0FFF4',
				mintCreamDark: '#E8F5E9',
				warmGray: '#F2EFE9'
			},
			spacing: {
				// 8px base grid system
				'0.5': '4px',
				'1': '8px',
				'1.5': '12px',
				'2': '16px',
				'2.5': '20px',
				'3': '24px',
				'3.5': '28px',
				'4': '32px',
				'5': '40px',
				'6': '48px',
				'7': '56px',
				'8': '64px',
				'9': '72px',
				'10': '80px',
				'11': '88px',
				'12': '96px',
				'14': '112px',
				'16': '128px',
				'18': '144px',
				'20': '160px',
				'22': '176px',
				'24': '192px',
				'28': '224px',
				'32': '256px',
				'36': '288px',
				'40': '320px'
			},
			borderRadius: {
				// Custom border radius tokens
				'sm': '6px',
				'md': '12px',
				'lg': '16px',
				'xl': '24px',
				'2xl': '32px',
				'3xl': '48px'
			},
			boxShadow: {
				// 5 levels of shadow from xs to xl
				'xs': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
				'sm': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
				'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
				'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
				'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
				// Custom shadows for playful aesthetic
				'glow-green': '0 0 20px rgb(76 175 80 / 0.3)',
				'glow-coral': '0 0 20px rgb(255 107 53 / 0.3)',
				'inner-soft': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)'
			},
			fontFamily: {
				// Display font: Outfit
				display: ['Outfit', 'system-ui', 'sans-serif'],
				// Body font: Plus Jakarta Sans
				body: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
				sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif']
			},
			fontSize: {
				// Type scale matching the design system
				'xs': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.01em' }],
				'sm': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.01em' }],
				'base': ['1rem', { lineHeight: '1.5rem', letterSpacing: '0.01em' }],
				'lg': ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '0.01em' }],
				'xl': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '0.01em' }],
				'2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.01em' }],
				'3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.02em' }],
				'4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.02em' }],
				'5xl': ['3rem', { lineHeight: '1', letterSpacing: '-0.03em' }],
				'6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.03em' }],
				'7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.04em' }]
			},
			lineHeight: {
				'custom-tight': '1.1',
				'custom-normal': '1.5',
				'custom-relaxed': '1.75'
			},
			maxWidth: {
				// Container widths for sections
				'section-sm': '640px',
				'section-md': '768px',
				'section-lg': '1024px',
				'section-xl': '1280px',
				'section-2xl': '1440px'
			},
			// Hover scale utilities for interactive elements
			scale: {
				'102': '1.02',
				'103': '1.03',
				'105': '1.05'
			},
			// Hover brightness utilities for interactive elements
			brightness: {
				'105': '1.05'
			}
		}
	},
	plugins: []
};
