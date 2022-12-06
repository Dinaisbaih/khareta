import styled from 'styled-components/native';
import {Platform} from 'react-native';
import {css} from 'styled-components';

export const ContainerStyle = styled.ScrollView`
  background-color: #dbe8e5;
  flex: 1;
`;
export const ImageStyle = styled.Image`
  height: 400px;
`;
export const DetailsContainer = styled.View`
  align-items: center;
  padding: 15px 0px 0px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-right: 6px;
  margin-top: 65px;
  flex: 1;
`;
export const TitleStyle = styled.Text`
  font-size: 17px;
  font-weight: bold;
  padding-bottom: 5px;
  color: #496350;
`;

export const TextStyle = styled.Text`
  font-size: 14px;
  text-align: center;
  color: #496350;
`;

export const BorderStyle = styled.View`
  width: 120px;
  height: 120px;
  border-radius: 120px;
  align-items: center;
  justify-content: center;
  margin-left: 7px;
  background-color: #ebebeb;
  ${Platform.select({
    ios: css`
      box-shadow: 2.5px 5px 3.5px #bfd0e3;
    `,
    android: css`
      elevation: 3;
    `,
  })};
`;

export const IconWrapper = styled.TouchableOpacity`
  top: 45px;
  left: 15px;
  position: absolute;
`;

export const IconWrapperTwo = styled.TouchableOpacity`
  top: 70px;
  left: 15px;
  position: absolute;
`;
