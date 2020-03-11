import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GalioProvider, Button } from 'galio-framework';

import materialTheme from './constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default function App() {
  return (
    <GalioProvider theme={materialTheme}>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <Button>primary</Button>
        <Button color="info">info</Button>
        <Button color="success">success</Button>
        <Button color="warning">warning</Button>
        <Button color="error">error</Button>
      </View>
    </GalioProvider>
  );
}
