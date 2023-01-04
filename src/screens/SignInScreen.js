import { Image, StyleSheet, Text, View } from 'react-native';
import Input, { KeyboardTypes, ReturnKeyTypes } from '../components/Input';
import SafeInputView from '../components/SafeInputView';

const SignInScreen = () => {
  return (
    <SafeInputView>
      <View style={styles.container}>
        <Image source={require('../../assets/main.png')} />

        <Input
          title={'이메일'}
          placeholder="mail@mail.com"
          keyboardType={KeyboardTypes.EMAIL}
          returnKeyType={ReturnKeyTypes.Next}
        />
        <Input title={'비밀번호'} secureTextEntry />
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
