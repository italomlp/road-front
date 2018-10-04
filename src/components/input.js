import React from 'react';

import PropTypes from 'prop-types';

import styled from 'styled-components';

import { colors, metrics } from 'styles';

const Input = styled.TextInput`
  background-color: ${colors.primaryTransparent};
  color: ${colors.white};
  border-radius: ${metrics.baseRadius}px;
  margin: ${metrics.baseMargin / 4}px;
  padding-horizontal: ${metrics.basePadding}px;
  padding-vertical: ${metrics.basePadding / 3}px;
`;

const RInput = ({
  style,
  placeholder,
  placeholderTextColor,
  onChangeText,
  value,
  secureTextEntry,
  autoCapitalize,
  autoCorrect,
  keyboardType,
  spellCheck,
  inputRef,
  blurOnSubmit,
  ...props
}) => (
  <Input
    {...props}
    innerRef={inputRef}
    blurOnSubmit={blurOnSubmit}
    spellCheck={spellCheck}
    autoCapitalize={autoCapitalize}
    autoCorrect={autoCorrect}
    clearButtonMode="while-editing"
    style={style}
    keyboardType={keyboardType}
    underlineColorAndroid="transparent"
    placeholder={placeholder}
    placeholderTextColor={placeholderTextColor}
    onChangeText={onChangeText}
    value={value}
    secureTextEntry={secureTextEntry}
  />
);

RInput.propTypes = {
  style: PropTypes.shape(),
  placeholder: PropTypes.string.isRequired,
  placeholderTextColor: PropTypes.string,
  onChangeText: PropTypes.func,
  value: PropTypes.any.isRequired,
  secureTextEntry: PropTypes.bool,
  keyboardType: PropTypes.string,
  autoCapitalize: PropTypes.string,
  autoCorrect: PropTypes.bool,
  spellCheck: PropTypes.bool,
  blurOnSubmit: PropTypes.bool,
};

RInput.defaultProps = {
  style: {},
  placeholderTextColor: '#ffffff',
  onChangeText: () => {},
  secureTextEntry: false,
  keyboardType: 'default',
  autoCapitalize: 'none',
  autoCorrect: false,
  spellCheck: false,
  blurOnSubmit: false,
};

export default RInput;
