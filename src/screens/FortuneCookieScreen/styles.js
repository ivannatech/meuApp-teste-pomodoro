import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.Text`
  margin-bottom: 15px;
  font-size: 20px;
  color: #121212;
  font-style: italic;
  text-align: center;
`;
export const Image = styled.Image`
  margin-top: 20px;
  width: 230px;
  height: 230px;
`;
export const PhraseText = styled.Text`
  font-size: 20px;
  color: #dd7b22;
  margin: 30px;
  font-style: italic;
  text-align: center;
`;
export const Button = styled.TouchableOpacity`
  width: 230px;
  height: 50px;
  border-color: #dd7b22;
  border-width: 2px;
  border-radius: 25px;
`;

export const BtnArea = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const BtnText = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: #dd7b22;
`;

export const ResetButton = styled.TouchableOpacity`
  margin-top: 15px;
  width: 230px;
  height: 50px;
  border-color: #121212;
  border-width: 2px;
  border-radius: 25px;
`;

export const ResetBtnText = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: #121212;
`;
