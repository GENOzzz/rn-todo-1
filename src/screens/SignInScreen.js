import { Image, StyleSheet, Text, View } from 'react-native';
import Input, { KeyboardTypes, ReturnKeyTypes } from '../components/Input2';
import { useState } from 'react';
import SafeInputView from '../components/SafeInputView';

const SignInScreen = () => {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

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
        />
        <Input
          title={'비밀번호'}
          secureTextEntry
          value={password}
          onChangeText={(password) => setPassword(password.trim())}
        />
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
  image: {
    width: 200,
    height: 200,
  },
});

export default SignInScreen;
