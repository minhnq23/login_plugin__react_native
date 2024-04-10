/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {NativeModules} from 'react-native';
const {LoginModule} = NativeModules;

function App(): React.JSX.Element {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  let str = '';
  React.useEffect(() => {
    console.log('LoginModule: ', LoginModule);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.textTitle}>Đăng nhập</Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="email"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="password"
      />
      <Button
        title="Đăng Nhập"
        onPress={async () => {
          console.log(email + ': ' + password);
          str = await LoginModule.loginMethod(email, password);
          console.log('hehe: ', str); 
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  textTitle: {
    fontSize: 25,
    fontWeight: '500',
    color: 'black',
  },
  title: {
    paddingHorizontal: 10,
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;
