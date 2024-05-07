import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens: {
        mobile: '480px',
        'tablet-portrait': '481px',
        'tablet-landscape': '1025px',
        desktop: '1441px',
      },
      colors: {
        black: 'rgba(0, 0, 0, 1)',
        blue: 'rgba(29, 103, 199, 1)',
        brick: 'rgba(232, 117, 81, 1)',
        'dark-blue': 'rgba(10, 33, 91, 1)',
        'dark-gray': 'rgba(75, 72, 72, 1)',
        gray: 'rgba(127, 122, 127, 1)',
        green: 'rgba(0, 110, 110, 1)',
        'light-blue': 'rgba(148, 179, 239, 1)',
        'lighter-blue': 'rgba(228, 238, 252, 1)',
        'lighter-brick': 'rgba(243, 229, 224, 1)',
        'lighter-green': 'rgba(224, 241, 240, 1)',
        'lighter-grey': 'rgba(230, 226, 230, 1)',
        'lighter-teal': 'rgba(223, 252, 244, 1)',
        neutrascinza: 'rgba(189, 189, 189, 1)',
        teal: 'rgba(173, 251, 232, 1)',
        white: 'rgba(255, 255, 255, 1)',
      },
      fontFamily: {
        'body-text': ['Poppins', 'Helvetica'],
        caption: ['Poppins', 'Helvetica'],
        h1: ['Anton', 'Helvetica'],
        h2: ['Anton', 'Helvetica'],
        h3: ['Anton', 'Helvetica'],
        h4: ['Anton', 'Helvetica'],
        'h5-all-caps': ['Anton', 'Helvetica'],
        h5: ['Anton', 'Helvetica'],
        h6: ['Poppins', 'Helvetica'],
        'pull-quote': ['Poppins', 'Helvetica'],
        proxima: 'Proxima Nova-Semibold',
      },
      margin: {
        15: '60px',
        22.5: '90px',
        25: '100px',
      },
      padding: {
        15: '60px',
        22.5: '90px',
        25: '100px',
      },
      height: {
        120: '480px',
      },
      width: {
        120: '480px',
      },
      fontSize: {
        'body-text-desktop-bold': [
          '21px',
          { letterSpacing: '0.84px', lineHeight: '170.00000476837158%' },
        ],
        'body-text-desktop': [
          '21px',
          { letterSpacing: '0.84px', lineHeight: '170.00000476837158%' },
        ],
        'body-text-mobile-bold': [
          '18px',
          { letterSpacing: '0.72px', lineHeight: '170.00000476837158%' },
        ],
        'body-text-mobile': [
          '15px',
          { letterSpacing: '0.6px', lineHeight: '170.00000476837158%' },
        ],
        'body-text-tablet': [
          '18px',
          { letterSpacing: '0.72px', lineHeight: '170.00000476837158%' },
        ],
        'caption-desktop-bold': [
          '19px',
          { letterSpacing: '0.76px', lineHeight: '135.0000023841858%' },
        ],
        'caption-desktop': [
          '19px',
          { letterSpacing: '0.76px', lineHeight: '135.0000023841858%' },
        ],
        'caption-mobile-bold': [
          '14px',
          { letterSpacing: '0.56px', lineHeight: '135.0000023841858%' },
        ],
        'caption-mobile': [
          '14px',
          { letterSpacing: '0.56px', lineHeight: '135.0000023841858%' },
        ],
        'caption-tablet-bold': [
          '16px',
          { letterSpacing: '0.64px', lineHeight: '135.0000023841858%' },
        ],
        'caption-tablet': [
          '16px',
          { letterSpacing: '0.64px', lineHeight: '135.0000023841858%' },
        ],
        'h1-desktop': [
          '120px',
          { letterSpacing: '2.4px', lineHeight: '110.00000238418579%' },
        ],
        'h1-mobile': [
          '60px',
          { letterSpacing: '1.2px', lineHeight: '110.00000238418579%' },
        ],
        'h1-tablet': [
          '81px',
          { letterSpacing: '1.62px', lineHeight: '110.00000238418579%' },
        ],
        'h2-desktop': [
          '66px',
          { letterSpacing: '3.3px', lineHeight: '110.00000238418579%' },
        ],
        'h2-mobile': [
          '44px',
          { letterSpacing: '2.2px', lineHeight: '110.00000238418579%' },
        ],
        'h2-tablet': [
          '55px',
          { letterSpacing: '2.75px', lineHeight: '110.00000238418579%' },
        ],
        'h3-desktop': [
          '44px',
          { letterSpacing: '2.2px', lineHeight: '110.00000238418579%' },
        ],
        'h3-mobile': [
          '30px',
          { letterSpacing: '1.5px', lineHeight: '110.00000238418579%' },
        ],
        'h3-tablet': [
          '36px',
          { letterSpacing: '1.8px', lineHeight: '110.00000238418579%' },
        ],
        'h4-desktop': [
          '41px',
          { letterSpacing: '2.05px', lineHeight: '110.00000238418579%' },
        ],
        'h4-mobile': [
          '26px',
          { letterSpacing: '1.3px', lineHeight: '110.00000238418579%' },
        ],
        'h5-all-caps-desktop': [
          '28px',
          { letterSpacing: '1.4px', lineHeight: '110.00000238418579%' },
        ],
        'h5-all-caps-mobile': [
          '23px',
          { letterSpacing: '1.15px', lineHeight: '110.00000238418579%' },
        ],
        'h5-all-caps-tablet': [
          '28px',
          { letterSpacing: '1.4px', lineHeight: '110.00000238418579%' },
        ],
        'h5-desktop': [
          '28px',
          { letterSpacing: '1.4px', lineHeight: '110.00000238418579%' },
        ],
        'h5-mobile-bold': [
          '26px',
          { letterSpacing: '1.04px', lineHeight: '154.99999523162842%' },
        ],
        'h5-mobile': [
          '23px',
          { letterSpacing: '1.15px', lineHeight: '110.00000238418579%' },
        ],
        'h5-tablet': [
          '25px',
          { letterSpacing: '1.25px', lineHeight: '110.00000238418579%' },
        ],
        'h6-desktop': [
          '30px',
          { letterSpacing: '6px', lineHeight: '139.9999976158142%' },
        ],
        'h6-mobilev': [
          '20px',
          { letterSpacing: '4px', lineHeight: '139.9999976158142%' },
        ],
        'h6-tablet': [
          '25px',
          { letterSpacing: '5px', lineHeight: '139.9999976158142%' },
        ],
        'pull-quote-desktop-bold': [
          '26px',
          { letterSpacing: '1.04px', lineHeight: '150%' },
        ],
        'pull-quote-desktop': [
          '26px',
          { letterSpacing: '1.04px', lineHeight: '150%' },
        ],
        'pull-quote-mobile-bold': [
          '21px',
          { letterSpacing: '0.84px', lineHeight: '150%' },
        ],
        'pull-quote-mobile': [
          '21px',
          { letterSpacing: '0.84px', lineHeight: '150%' },
        ],
        'pull-quote-tablet-bold': [
          '23px',
          { letterSpacing: '0.92px', lineHeight: '150%' },
        ],
        'pull-quote-tablet': [
          '23px',
          { letterSpacing: '0.92px', lineHeight: '150%' },
        ],
      },
      fontWeight: {
        'body-text-desktop-bold': '700',
        'body-text-desktop': '400',
        'body-text-mobile-bold': '700',
        'body-text-mobile': '400',
        'body-text-tablet': '400',
        'caption-desktop-bold': '700',
        'caption-desktop': '400',
        'caption-mobile-bold': '700',
        'caption-mobile': '400',
        'caption-tablet-bold': '700',
        'caption-tablet': '400',
        'h1-desktop': '400',
        'h1-mobile': '400',
        'h1-tablet': '400',
        'h2-desktop': '400',
        'h2-mobile': '400',
        'h2-tablet': '400',
        'h3-desktop': '400',
        'h3-mobile': '400',
        'h3-tablet': '400',
        'h4-desktop': '400',
        'h4-mobile': '400',
        'h5-all-caps-desktop': '400',
        'h5-all-caps-mobile': '400',
        'h5-all-caps-tablet': '400',
        'h5-desktop': '400',
        'h5-mobile-bold': '700',
        'h5-mobile': '400',
        'h5-tablet': '400',
        'h6-desktop': '500',
        'h6-mobilev': '500',
        'h6-tablet': '500',
        'pull-quote-desktop-bold': '700',
        'pull-quote-desktop': '400',
        'pull-quote-mobile-bold': '700',
        'pull-quote-mobile': '400',
        'pull-quote-tablet-bold': '700',
        'pull-quote-tablet': '400',
      },
      letterSpacing: {
        'body-text-desktop-bold': '0.84px',
        'body-text-desktop': '0.84px',
        'body-text-mobile-bold': '0.72px',
        'body-text-mobile': '0.6px',
        'body-text-tablet': '0.72px',
        'caption-desktop-bold': '0.76px',
        'caption-desktop': '0.76px',
        'caption-mobile-bold': '0.56px',
        'caption-mobile': '0.56px',
        'caption-tablet-bold': '0.64px',
        'caption-tablet': '0.64px',
        'h1-desktop': '2.4px',
        'h1-mobile': '1.2px',
        'h1-tablet': '1.62px',
        'h2-desktop': '3.3px',
        'h2-mobile': '2.2px',
        'h2-tablet': '2.75px',
        'h3-desktop': '2.2px',
        'h3-mobile': '1.5px',
        'h3-tablet': '1.8px',
        'h4-desktop': '2.05px',
        'h4-mobile': '1.3px',
        'h5-all-caps-desktop': '1.4px',
        'h5-all-caps-mobile': '1.15px',
        'h5-all-caps-tablet': '1.4px',
        'h5-desktop': '1.4px',
        'h5-mobile-bold': '1.04px',
        'h5-mobile': '1.15px',
        'h5-tablet': '1.25px',
        'h6-desktop': '6px',
        'h6-mobilev': '4px',
        'h6-tablet': '5px',
        'pull-quote-desktop-bold': '1.04px',
        'pull-quote-desktop': '1.04px',
        'pull-quote-mobile-bold': '0.84px',
        'pull-quote-mobile': '0.84px',
        'pull-quote-tablet-bold': '0.92px',
        'pull-quote-tablet': '0.92px',
      },
      lineHeight: {
        'body-text-desktop-bold': '170.00000476837158%',
        'body-text-desktop': '170.00000476837158%',
        'body-text-mobile-bold': '170.00000476837158%',
        'body-text-mobile': '170.00000476837158%',
        'body-text-tablet': '170.00000476837158%',
        'caption-desktop-bold': '135.0000023841858%',
        'caption-desktop': '135.0000023841858%',
        'caption-mobile-bold': '135.0000023841858%',
        'caption-mobile': '135.0000023841858%',
        'caption-tablet-bold': '135.0000023841858%',
        'caption-tablet': '135.0000023841858%',
        'h1-desktop': '110.00000238418579%',
        'h1-mobile': '110.00000238418579%',
        'h1-tablet': '110.00000238418579%',
        'h2-desktop': '110.00000238418579%',
        'h2-mobile': '110.00000238418579%',
        'h2-tablet': '110.00000238418579%',
        'h3-desktop': '110.00000238418579%',
        'h3-mobile': '110.00000238418579%',
        'h3-tablet': '110.00000238418579%',
        'h4-desktop': '110.00000238418579%',
        'h4-mobile': '110.00000238418579%',
        'h5-all-caps-desktop': '110.00000238418579%',
        'h5-all-caps-mobile': '110.00000238418579%',
        'h5-all-caps-tablet': '110.00000238418579%',
        'h5-desktop': '110.00000238418579%',
        'h5-mobile-bold': '154.99999523162842%',
        'h5-mobile': '110.00000238418579%',
        'h5-tablet': '110.00000238418579%',
        'h6-desktop': '139.9999976158142%',
        'h6-mobilev': '139.9999976158142%',
        'h6-tablet': '139.9999976158142%',
        'pull-quote-desktop-bold': '150%',
        'pull-quote-desktop': '150%',
        'pull-quote-mobile-bold': '150%',
        'pull-quote-mobile': '150%',
        'pull-quote-tablet-bold': '150%',
        'pull-quote-tablet': '150%',
      },
    },
  },
  plugins: [],
};
export default config;
