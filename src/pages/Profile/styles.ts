import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.ScrollView.attrs({
  flex: 1,
  contentContainerStyle: {
    paddingHorizontal: 30,
    paddingBottom: 40,
  },
})``;

export const BackButton = styled.TouchableOpacity`
  margin-top: 30px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0px 24px;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 32px;
`;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 93px;
  align-self: center;
`;
