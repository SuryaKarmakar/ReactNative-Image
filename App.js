import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Image from local storage</Text>
      <Image
        style={styles.logo}
        source={require('./src/images/logo.png')} />
      
      <Text>Image from url link</Text>
      <Image
        style={styles.logo}
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} />

      <Image
        style={styles.logo}
        // blurRadius={2}
        // defaultSource={require('./src/images/logo.png')}
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        // onLoad={() => alert('yes')}  
        />  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    height :100,
    width :100,
    margin:10
  }
});
