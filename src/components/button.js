import React from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

import { colors, metrics } from 'styles';

const Button = styled.TouchableOpacity`
  background-color: ${colors.primary};
  border-radius: ${metrics.baseRadius}px;
  padding: ${metrics.basePadding / 2}px;
  margin-top: ${metrics.baseMargin}px;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.Text`
  color: ${colors.white};
  font-weight: bold;
`;

const RButton = ({
  onPress, children, style, styleText, ...props
}) => (
  <Button {...props} onPress={onPress} style={style}>
    <ButtonText style={styleText}>{children}</ButtonText>
  </Button>
);

RButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
  style: PropTypes.shape(),
  styleText: PropTypes.shape(),
};

RButton.defaultProps = {
  style: {},
  styleText: {},
};

export default RButton;
