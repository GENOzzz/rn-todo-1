import { Image, Keyboard, StyleSheet, Text, View } from 'react-native';
import Input, {
  IconNames,
  KeyboardTypes,
  ReturnKeyTypes,
} from '../components/Input2';
import { useEffect, useRef, useState } from 'react';
import SafeInputView from '../components/SafeInputView';
import Button from '../components/Button';
import { BLACK, GREEN, PRIMARY } from '../colors';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setDisabled(!email || !password);
  }, [email, password]);

  const onSubmit = () => {
    Keyboard.dismiss();
    console.log(email, password);
  };

  return (
    <SafeInputView>
      <View style={styles.container}>
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
          <Button title="로그인" onPress={onSubmit} disabled={disabled} />
        </View>
      </View>
    </SafeInputView>
  );
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
