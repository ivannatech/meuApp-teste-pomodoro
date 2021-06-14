import React from 'react';
import { Button, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Watch from 'react-native-vector-icons/Entypo';

//styles
import { KeyboardView, IconsView, Icons } from './styles';

export default function HomeScreen({ navigation }) {
  return (
    <KeyboardView>
      <Text>Home Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />

      <IconsView>
        <Icons>
          <Icon
            name="cookie"
            color={'#8B4513'}
            size={50}
            onPress={() => navigation.navigate('Biscoito da Sorte')}
          />
          <Text style={{ textAlign: 'center' }}>Conheça sua {'\n'} Sorte</Text>
        </Icons>
        <Icons>
          <Watch
            name="stopwatch"
            color={'#8B4513'}
            size={50}
            onPress={() => navigation.navigate('Cronômetro')}
          />
          <Text>Cronômetro</Text>
        </Icons>
        <Icons>
          <Icon
            name="star-circle"
            color={'#8B4513'}
            size={50}
            onPress={() => navigation.navigate('Cronômetro')}
          />
          <Text>item</Text>
        </Icons>
      </IconsView>

      <IconsView>
        <Icons>
          <Icon
            name="format-list-bulleted"
            color={'#6f6f6f'}
            size={50}
            onPress={() => navigation.navigate('Tarefas')}
          />
          <Text>Tarefas</Text>
        </Icons>
        <Icons>
          <Icon
            name="timer"
            color={'#DC143C'}
            size={50}
            onPress={() => navigation.navigate('Pomodoro')}
          />
          <Text>Pomodoro</Text>
        </Icons>
        <Icons>
          <Icon
            name="shield-lock"
            color={'#2196F3'}
            size={50}
            onPress={() => navigation.navigate('Gerador de Senhas')}
          />
          <Text style={{ textAlign: 'center' }}>Gerador de {'\n'} Senhas</Text>
        </Icons>
      </IconsView>

      <IconsView>
        <Icons>
          <Icon
            name="newspaper-variant"
            color={'#6f6f6f'}
            size={50}
            onPress={() => navigation.navigate('Notícias')}
          />
          <Text>Notícias</Text>
        </Icons>
      </IconsView>
    </KeyboardView>
  );
}
