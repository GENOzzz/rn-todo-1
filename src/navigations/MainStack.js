import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pressable, Text } from 'react-native';
import { PRIMARY, WHITE } from '../colors';
import ListScreen from '../screens/ListScreen';
import SignInScreen from '../screens/SignInScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import HeaderLeftButton from '../components/HeaderLeftButton';
import HeaderRightButton from '../components/HeaderRightButton';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: WHITE },
        headerTitleAlign: 'center',
        headerTintColor: PRIMARY.DEFAULT,
        headerTitleStyle: {
          fontWeight: '700',
        },
        headerLeft: HeaderLeftButton,
      }}
    >
      <Stack.Screen
        name="List"
        component={ListScreen}
        options={{
          title: 'TODO List',
          headerRight: HeaderRightButton,
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ title: '로그인', headerShown: false }}
      />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
