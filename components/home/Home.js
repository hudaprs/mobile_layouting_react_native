import React from 'react';
import {View, Text, Button} from 'react-native';

import {globalStyles} from '../../styles/global';

const Home = ({navigation}) => {
  return (
    <View style={globalStyles.container}>
      <Text>Homepage</Text>
    </View>
  );
};

export default Home;
