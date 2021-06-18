import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import Clipboard from 'expo-clipboard';

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export default function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [size, setSize] = useState(5);

  function generatePass() {
    let pass = '';
    for (let i = 0, n = charset.length; i < size; i++) {
      pass += charset.charAt(Math.floor(Math.random() * n));
    }
    setPassword(pass);
  }

  function copyPass() {
    Clipboard.setString(password);
    alert('Senha copiada com sucesso!');
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Text style={styles.title}>
        Escolha a quantidade de caracteres e {'\n'} gere uma nova senha
      </Text>

      <Image
        source={require('../../assets/logo-padlock.png')}
        style={styles.logo}
      />

      <Text style={styles.number}>{size} Caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={5}
          maximumValue={15}
          minimumTrackTintColor="#ff0000"
          maximumTrackTintColor="#000"
          value={size}
          onValueChange={(valor) => setSize(valor.toFixed(0))}
        />
      </View>

      <TouchableOpacity style={styles.buttom} onPress={generatePass}>
        <Text style={styles.buttomText}>Gerar senha</Text>
      </TouchableOpacity>

      {password !== '' && (
        <View style={styles.area}>
          <Text style={styles.password} onLongPress={copyPass}>
            {' '}
            {password}{' '}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginRight: 60,
    marginBottom: 20,
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3f3ff',
  },
  logo: {
    marginBottom: 30,
    width: 200,
    height: 200,
  },
  number: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  title: {
    marginTop: 30,
    fontSize: 20,
    textAlign: 'center',
    color: '#121212',
    fontStyle: 'italic',
  },
  area: {
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    width: '90%',
    borderRadius: 7,
  },
  buttom: {
    backgroundColor: '#FA6C30',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    // marginBottom: 10,
  },
  buttomText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  password: {
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
  },
});
