import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Authentication(props) {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Facebook Authentication</Text>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={props.onFacebookButtonPress}>
        <Text style={styles.buttonText}>Facebook Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    marginBottom: 30,
  },
  loginButton: {
    backgroundColor: '#4267B2',
    color: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 50
  },
  buttonText: {
    color: '#fff',
    fontSize: 20
  }
});
