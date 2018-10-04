import { StyleSheet } from 'react-native';

import { colors, metrics, general } from 'styles';

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    width: metrics.screenWidth - 100,
    height: metrics.screenWidth - 100,
    paddingBottom: 0,
  },

  formContainer: {
    padding: metrics.basePadding,
    margin: metrics.baseMargin,
  },

  loginButton: {
    width: 100,
    alignSelf: 'flex-end',
  },

  footerContainer: {
    alignItems: 'center',
  },

  footerLine: {
    flexDirection: 'row',
  },

  footerText: {
    color: colors.white,
  },

  bold: {
    ...general.bold,
  },
});

styles.placeholderTextColor = colors.white;

export default styles;
