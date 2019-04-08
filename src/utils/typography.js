import Typography from 'typography';
import Irving from 'typography-theme-irving';

Irving.overrideThemeStyles = () => {
  return {
    'a.gatsby-resp-image-link': {
      boxShadow: `none`
    }
  };
};

Irving.googleFonts = [
  {
    name: 'Major Mono Display',
    styles: ['400']
  },
  {
    name: 'Song Myung',
    styles: ['400']
  },
  {
    name: 'Noto Serif KR',
    styles: ['400', '700']
  }
];

Irving.headerFontFamily = ['Song Myung', 'sans-serif'];
Irving.bodyFontFamily = ['Noto Serif KR', 'georgia', 'sans-serif'];

const typography = new Typography(Irving);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const { rhythm, scale } = typography;
