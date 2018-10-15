import React, { Component } from 'react';

import { StyleSheet, View } from 'react-native';
import { metrics, colors } from 'styles';

import DateTimePicker from 'react-native-modal-datetime-picker';

import {
  Item, Input, Label, Icon,
} from 'native-base';

import moment from 'moment';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  icon: {
    color: colors.white,
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
      <View>
        <Item floatingLabel onPress={this.showDatePicker}>
          <Label>{label}</Label>
          <Input spellCheck editable={false} pointerEvents="none" value={this.getValueDate()} />
          <Icon
            android="md-calendar"
            ios="ios-calendar"
            style={styles.icon}
            size={metrics.iconSize}
            onClick={this.showDatePicker}
          />
        </Item>
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
      </View>
    );
  }
}
