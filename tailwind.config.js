module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: [
      '*.{html,js}',
      './team/*.html',
      "./node_modules/flowbite/**/*.js"
    ]
  },
  theme: {
    extend: {
      inset: {
        '100': '100%',
      },
      screens: {
        'xxs': '540px', // min-width
      },
      colors: {
        reviva_d: {
          DEFAULT: '#1E3E50',
          '50': '#62A1C4',
          '100': '#5398BE',
          '200': '#3F83A9',
          '300': '#346C8B',
          '400': '#29556E',
          '500': '#1E3E50',
          '600': '#0F1E27',
          '700': '#000000',
          '800': '#000000',
          '900': '#000000'
        },
        reviva_l: {
          DEFAULT: '#F3EDEB',
          '50': '#F3EDEB',
          '100': '#F3EDEB',
          '200': '#F3EDEB',
          '300': '#F3EDEB',
          '400': '#F3EDEB',
          '500': '#F3EDEB',
          '600': '#F3EDEB',
          '700': '#F3EDEB',
          '800': '#F3EDEB',
          '900': '#F3EDEB'
        },
        reviva_m: {
          DEFAULT: '#5BAFA7',
          '25': '#E4F2F1',
          '50': '#D6EBE9',
          '100': '#C9E5E2',
          '200': '#ADD7D3',
          '300': '#92CAC4',
          '400': '#76BCB6',
          '500': '#5BAFA7',
          '600': '#458D86',
          '700': '#326762',
          '800': '#20423E',
          '900': '#0E1C1B'
        }
      },
      fontSize: {
        '4xl': '3rem',
        '5xl': '3.5rem',
        '7xl': '4.5rem',
        '8xl': '5.5rem'
      }
    },
  },
  variants: {},
  plugins: [
    require('flowbite/plugin')
  ],
}
