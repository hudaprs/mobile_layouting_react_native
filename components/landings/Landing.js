import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

// SVG
import LandingHeader from '../../assets/img/landing/LandingHeader.svg';
import LandingBody from '../../assets/img/landing/LandingBody.svg';

let deviceWidth = Dimensions.get('window').width;

const Landing = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <LandingBody width={deviceWidth} />
      </TouchableOpacity>
      <LandingHeader style={styles.imageHeader} />
      <Text style={styles.landingText}>Selamat Datang!</Text>
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
