import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WHITE } from './colors';
import SignInScreen from './screens/SignInScreen';
import AuthStack from './navigations/AuthStack';
import { useState } from 'react';
import MainStack from './navigations/MainStack';
import UserContext, { UserProvider } from './contexts/UserContext';
import Navigation from './navigations/Navigation';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <UserProvider>
      <StatusBar style="dark" />
      <Navigation />
    </UserProvider>
  );
};

export default App;
