import React, {useEffect} from 'react';
import LandingHeader from '../../assets/img/LandingHeader.svg';
import LandingBody from '../../assets/img/LandingBody.svg';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

let deviceWidth = Dimensions.get('window').width;

const Landing = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <LandingBody width={deviceWidth} />
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
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    marginLeft: 20,
    marginTop: 30,
    zIndex: 1,
  },
  landingText: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    color: '#407BFF',
    fontFamily: 'Poppins-Medium',
  },
});

export default Landing;
