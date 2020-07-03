import React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';

const Landing = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/img/LandingBody.png')}
        style={styles.image}
      />
      <Image
        source={require('../../assets/img/LandingHeader.png')}
        style={styles.imageHeader}
      />
      <Text
        style={styles.landingText}
        onPress={() => navigation.navigate('Login')}>
        Selamat Datang!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  imageHeader: {
    position: 'absolute',
    marginLeft: 35,
    marginTop: 30,
    zIndex: 1,
  },
  landingText: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    color: '#407BFF',
    marginBottom: 50,
  },
});

export default Landing;
