import React from 'react';
import LandingHeader from '../../assets/img/LandingHeader.svg';
import LandingBody from '../../assets/img/LandingBody.svg';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';

const Landing = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LandingBody style={styles.image} />
      <LandingHeader style={styles.imageHeader} />
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
    backgroundColor: '#fff',
  },
  image: {
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
    minHeight: 100,
    fontFamily: 'Poppins-Medium',
  },
});

export default Landing;
