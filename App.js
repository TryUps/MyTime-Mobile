import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

/*const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});
*/
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Amilson é um viadão</Text>
      <Text style={styles.instructions}>Fala Meu Cumpadi</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 5,
  },
});
