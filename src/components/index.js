import styled from 'styled-components';

import { colors, metrics } from 'styles';

import RButton from './button';
import RInput from './input';
import RDatepicker from './datepicker';

const RView = styled.View`
  background-color: ${colors.black};
  flex: 1;
  padding: ${metrics.basePadding}px;
`;

export {
  RView, RButton, RInput, RDatepicker,
};
