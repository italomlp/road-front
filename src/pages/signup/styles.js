import { StyleSheet } from 'react-native';
import { metrics } from 'styles';

const styles = StyleSheet.create({
  formContainer: {
    padding: metrics.basePadding,
    alignSelf: 'stretch',
  },

  datePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: metrics.baseMargin / 4,
  },
  datePickerButton: {
    marginTop: 0,
    height: 'auto',
  },
  datePickerInput: {
    flex: 1,
  },
});

styles.iconSize = metrics.iconSize;

export default styles;
