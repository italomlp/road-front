import { StyleSheet } from 'react-native';

import { colors, metrics, general } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },

  logo: {
    alignSelf: 'center',
    width: metrics.screenWidth - 100,
    height: 100,
    marginTop: metrics.baseMargin * 3,
    marginBottom: metrics.baseMargin,
  },

  formContainer: {
    padding: metrics.basePadding,
    margin: metrics.baseMargin,
  },

  formActions: {
    padding: metrics.basePadding,
    margin: metrics.baseMargin,
  },

  loginButton: {
    alignSelf: 'flex-end',
    marginBottom: metrics.baseMargin,
  },

  footerContainer: {
    alignItems: 'center',
    marginBottom: metrics.baseMargin,
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

export default styles;
