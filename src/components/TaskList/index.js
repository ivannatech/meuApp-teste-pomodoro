import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, CheckBox } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

//styles
import { Container, Text, DeleteItem } from './styles';

function TaskList({ data, handleDelete }) {
  return (
    <Animatable.View useNativeDriver animation="bounceIn">
      <Container>
        <View style={{ flexDirection: 'row' }}>
          <Text>{data.task}</Text>
        </View>
        <DeleteItem onPress={() => handleDelete(data)}>
          <Ionicons name="ios-trash" size={30} color="#FA6C30" />
        </DeleteItem>
      </Container>
    </Animatable.View>
  );
}

export default TaskList;
