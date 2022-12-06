import styled from 'styled-components/native';
import {Platform} from 'react-native';
import {css} from 'styled-components';

export const CharacterCardStyle = styled.TouchableOpacity`
  background-color: white;
  align-items: center;
  color: black;
  flex-direction: row;
  padding: 10px;
  margin: 5px;
  ${Platform.select({
    ios: css`
      box-shadow: 0.5px 0.5px 2.5px #d3d3d3;
    `,
    android: css`
      elevation: 3;
    `,
  })};
  border-radius: 5px;
  justify-content: space-between;
`;

export const ImageStyle = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 10px;
`;

export const TextStyle = styled.Text`
  /* padding-left: 20px; */
  font-size: 16px;
  color: #496350;
`;
