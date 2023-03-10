import { Alert, Image, Keyboard, StyleSheet, Text, View } from 'react-native';
import Input, {
  IconNames,
  KeyboardTypes,
  ReturnKeyTypes,
} from '../components/Input2';
import { useContext, useEffect, useRef, useState } from 'react';
import SafeInputView from '../components/SafeInputView';
import Button from '../components/Button';
import { BLACK, GREEN, PRIMARY } from '../colors';
import { signIn } from '../api/auth';
import PropTypes from 'prop-types';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import UserContext, { useUserContext } from '../contexts/UserContext';

const SignInScreen = () => {
  const insets = useSafeAreaInsets();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useUserContext();

  useEffect(() => {
    setDisabled(!email || !password);
  }, [email, password]);

  const onSubmit = async () => {
    if (!isLoading && !disabled) {
      try {
        setIsLoading(true);
        Keyboard.dismiss();
        const data = await signIn(email, password);
        setIsLoading(false);
        setUser(data);
      } catch (error) {
        Alert.alert('로그인 실패', error, [
          { text: '확인', onPress: () => setIsLoading(false) },
        ]);
      }
    }
  };

  return (
    <SafeInputView>
      <View
        style={[
          styles.container,
          { paddingTop: insets.top, paddingBottom: insets.bottom },
        ]}
      >
        <Image source={require('../../assets/main.png')} />

        <Input
          title={'이메일'}
          placeholder="mail@mail.com"
          keyboardType={KeyboardTypes.EMAIL}
          returnKeyType={ReturnKeyTypes.Next}
          value={email}
          onChangeText={(email) => setEmail(email.trim())}
          iconName={IconNames.EMAIL}
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <Input
          ref={passwordRef}
          title={'비밀번호'}
          secureTextEntry
          value={password}
          onChangeText={(password) => setPassword(password.trim())}
          iconName={IconNames.PASSWORD}
          onSubmitEditing={onSubmit}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="로그인"
            onPress={onSubmit}
            disabled={disabled}
            isLoading={isLoading}
          />
        </View>
      </View>
    </SafeInputView>
  );
};

SignInScreen.propTypes = {
  navigation: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 30,
    paddingHorizontal: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default SignInScreen;
