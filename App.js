import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Landing from './components/landings/Landing';

const App = () => {
  return (
    <View style={styles.container}>
      <Landing />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
