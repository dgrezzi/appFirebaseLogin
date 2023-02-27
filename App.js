import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthProvider from './src/contexts/auth'
import Routes from './src/routes'

export default function app() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor={'#eee'} barStyle='dark-content' />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  )
}
