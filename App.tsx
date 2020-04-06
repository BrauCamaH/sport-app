import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GalioProvider, Button } from 'galio-framework';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createConnection, getRepository } from 'typeorm/browser';
import {
  Athlete,
  Record,
  LiquidsBeforeExercise,
  LiquidsDuringExercise,
  LiquidsAfterExercise,
  TwoHoursBefore,
  FourHoursBefore
} from './models';

import HomeScreen from './screens/HomeScreen';
import materialTheme from './constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default function App() {
  const [conected, setConected] = useState(false);
  const connect = () => {
    return createConnection({
      database: 'test',
      // eslint-disable-next-line global-require
      driver: require('expo-sqlite'),
      entities: [
        Athlete,
        Record,
        LiquidsAfterExercise,
        LiquidsDuringExercise,
        LiquidsBeforeExercise,
        TwoHoursBefore,
        FourHoursBefore
      ],
      synchronize: true,
      type: 'expo'
    });
  };

  const runConnection = async () => {
    try {
      await connect();
      setConected(true);
    } catch (error) {
      setConected(false);
    }
  };

  useEffect(() => {
    runConnection();
  }, []);

  return (
    <GalioProvider theme={materialTheme}>
      <Navigation />
    </GalioProvider>
  );
}
