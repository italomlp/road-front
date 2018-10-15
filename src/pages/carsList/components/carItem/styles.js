import { StyleSheet } from 'react-native';

import { metrics, colors } from 'styles';

const styles = StyleSheet.create({
  card: {
    padding: metrics.basePadding / 2,
    borderColor: colors.primary,
    borderWidth: 3,
    backgroundColor: colors.black,
  },
});

export default styles;
