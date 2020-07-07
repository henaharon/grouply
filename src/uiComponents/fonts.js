import {Text, Dimensions} from 'react-native';
import styled from 'styled-components';

const DIMENSION_WIDTH = Dimensions.get('window').width;

export const BigBoldText = styled(Text)`
font-size: ${DIMENSION_WIDTH * 0.050}px
font-weight: bold; 
`;
export const MedBoldText = styled(Text)`
  font-size: ${DIMENSION_WIDTH * 0.04}px
  font-weight: bold;
`;
export const MedText = styled(Text)`
  font-size: ${DIMENSION_WIDTH * 0.04}px;
`;
export const SmallBoldText = styled(Text)`
  font-size: ${DIMENSION_WIDTH * 0.035}px
  font-weight: bold; 
`;

