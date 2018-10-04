import React, { Component } from 'react';

import { StyleSheet } from 'react-native';
import styled from 'styled-components';
import { metrics } from 'styles';
import { RInput, RButton } from 'components';

import DateTimePicker from 'react-native-modal-datetime-picker';

import moment from 'moment';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: ${metrics.baseMargin / 4};
`;

const styles = StyleSheet.create({
  button: {
    marginTop: 0,
    height: 'auto',
  },
  input: {
    flex: 1,
    margin: 0,
    height: 'auto',
  },
});

export default class RDatepicker extends Component {
  static propTypes = {
    label: PropTypes.string,
    date: PropTypes.any.isRequired,
    handleDate: PropTypes.func.isRequired,
    minimumDate: PropTypes.objectOf(Date),
    maximumDate: PropTypes.objectOf(Date),
  };

  static defaultProps = {
    label: 'Data',
    minimumDate: new Date('1900-01-01'),
    maximumDate: new Date(),
  };

  state = {
    isDatePickerVisible: false,
  };

  showDatePicker = () => {
    this.setState({ isDatePickerVisible: true });
  };

  hideDatePicker = () => {
    this.setState({ isDatePickerVisible: false });
  };

  getDate = () => {
    const date = moment(this.props.date);
    const minimumDate = moment(this.props.minimumDate);
    const maximumDate = moment(this.props.maximumDate);
    let actual = moment.max(date, minimumDate);
    actual = moment.min(actual, maximumDate);
    return actual.toDate();
  };

  getValueDate = () => {
    if (!this.props.date || Object.keys(this.props.date).length === 0) {
      return '';
    }
    return moment(this.getDate()).format('DD/MM/YYYY');
  };

  render() {
    const {
      label, handleDate, minimumDate, maximumDate,
    } = this.props;
    return (
      <Container>
        <RInput
          style={styles.input}
          spellCheck
          editable={false}
          pointerEvents="none"
          placeholder={label}
          onClick={this.showDatePicker}
          value={this.getValueDate()}
        />
        <RButton onPress={this.showDatePicker} style={styles.button}>
          <Icon name="calendar" size={metrics.iconSize} />
        </RButton>
        <DateTimePicker
          date={this.getDate()}
          minimumDate={minimumDate}
          maximumDate={maximumDate}
          isVisible={this.state.isDatePickerVisible}
          onConfirm={(newDate) => {
            handleDate(newDate);
            this.hideDatePicker();
          }}
          onCancel={this.hideDatePicker}
        />
      </Container>
    );
  }
}
