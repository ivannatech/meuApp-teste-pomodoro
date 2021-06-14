import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #00aeff;
`;

export const Timer = styled.Text`
  margin-top: -160px;
  font-size: 45px;
  font-weight: bold;
  color: #fff;
`;

export const BtnArea = styled.View`
  flex-direction: row;
  margin-top: 130px;
  height: 40px;
`;

export const Btn = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #fff;
  height: 40px;
  margin: 17px;
  border-radius: 9px;
`;

export const BtnText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #00aeff;
`;
export const LastArea = styled.View`
  margin-top: 40px;
`;

export const RunningText = styled.Text`
  font-size: 23px;
  color: #fff;
  font-style: italic;
`;
