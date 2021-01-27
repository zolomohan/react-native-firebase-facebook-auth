import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default function Authentication(props) {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Facebook Authentication</Text>
      <Button title="Facebook Sign-In" onPress={props.onFacebookButtonPress} />
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
});
