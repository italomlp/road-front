import color from 'color';

export default {
  white: '#FFF',
  lighter: '#EEE',
  light: '#DDD',
  regular: '#999',
  dark: '#666',
  darker: '#333',
  black: '#000',

  primary: '#64dd17',
  primaryDark: color.rgb(100, 221, 23).darken,
  secundary: '#212121',
  accent: '#ff4081',
  success: '#9DCA83',
  danger: '#E37A7A',
  active: '#6ADC00',

  transparent: 'transparent',
  darkTransparent: 'rgba(0, 0, 0, 0.6)',
  primaryTransparent: 'rgba(100, 221, 23, 0.8)',
  whiteTransparent: 'rgba(255, 255, 255, 0.3)',
};
