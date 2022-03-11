import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import First from './First';
import Second from './Second';

const Stack = createStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FirstScreen" component={First}/>
        <Stack.Screen name="SecondScreen" component={Second}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;