import { StyleSheet } from 'react-native';

import { metrics } from 'styles';

const styles = StyleSheet.create({
  formContainer: {
    padding: metrics.basePadding,
    alignSelf: 'stretch',
    marginBottom: metrics.baseMargin,
  },

  formActions: {
    padding: metrics.basePadding,
    margin: metrics.baseMargin / 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  infoCard: {
    padding: metrics.baseMargin * 2,
  },
});

export default styles;
