import React, { useState } from 'react';
import { Button, View, Text, Image, TouchableOpacity } from 'react-native';

//styles
import {
  Container,
  Timer,
  BtnArea,
  Btn,
  BtnText,
  LastArea,
  RunningText,
} from './styles';

let timer = null;
let ss = 0;
let mm = 0;
let hh = 0;

export default function StopwatchScreen() {
  const [number, setNumber] = useState('00:00:00');
  const [buttom, setButtom] = useState('Iniciar');
  const [last, setLast] = useState(null);

  function start() {
    if (timer !== null) {
      //Stop the timer
      clearInterval(timer);
      timer = null;
      setButtom('Iniciar');
    } else {
      //Start the timer
      timer = setInterval(() => {
        ss++;

        if (ss == 60) {
          ss = 0;
          mm++;
        }
        if (mm == 60) {
          mm = 0;
          hh++;
        }

        let format =
          (hh < 10 ? '0' + hh : hh) +
          ':' +
          (mm < 10 ? '0' + mm : mm) +
          ':' +
          (ss < 10 ? '0' + ss : ss);

        setNumber(format);
      }, 1000);
      setButtom('Pausar');
    }
  }
  function clear() {
    if (timer !== null) {
      //Stop the timer
      clearInterval(timer);
      timer = null;
    }

    setLast(number);

    setNumber('00:00:00');
    ss = 0;
    mm = 0;
    hh = 0;
    setButtom('Iniciar');
  }

  return (
    <Container>
      <Image
        source={require('../../assets/crono.png')}
        style={{ tintColor: 'red' }}
      />

      <Timer>{number}</Timer>

      <BtnArea>
        <Btn onPress={start}>
          <BtnText>{buttom}</BtnText>
        </Btn>

        <Btn onPress={clear}>
          <BtnText>Zerar</BtnText>
        </Btn>
      </BtnArea>

      <LastArea>
        <RunningText>{last ? 'Último tempo: ' + last : ''}</RunningText>
      </LastArea>
    </Container>
  );
}
