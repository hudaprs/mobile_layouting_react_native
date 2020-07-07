import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  BackHandler,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

// SVG
import LandingHeader from '../../assets/img/landing/LandingHeader.svg';
import Username from '../../assets/img/auth/Username.svg';
import Password from '../../assets/img/auth/Password.svg';

// Components
import AuthModal from '../modals/AuthModal';

// Global Styles
import {globalStyles} from '../../styles/global';

const Login = ({navigation, route}) => {
  const [modalVisibility, setModalVisibility] = useState('');
  const [modalData, setModalData] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const otorityError = true;

  // Disable back button, for preventing go to splash screen
  const backAction = () => {
    BackHandler.exitApp();
    return true;
  };

  useFocusEffect(
    useCallback(() => {
      BackHandler.addEventListener('hardwareBackPress', backAction);
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', backAction);
      };
    }, []),
  );

  const loggedIn = () => {
    // Uncomment this if you want to check otority error
    // if (otorityError == true) {
    //   setModalVisibility(true);
    //   setModalData({
    //     type: 'invalidOtority',
    //     message: 'Perubahan Otorisasi',
    //     messageTwo:
    //       'Kamu login beda ofdeling & data akan dihapus. Yakin ingin melanjutkan?',
    //   });
    // }

    // Simple credentials check
    // This for testing only
    if (!username || !password) {
      setModalVisibility(true);
      setModalData({type: 'invalidCreds', message: 'Isi semua form'});
    } else {
      // Check if username and password is match.
      if (username == 'admin' && password == 'admin') {
        navigation.navigate('Home');
      } else if (username != 'admin') {
        setModalVisibility(true);
        setModalData({
          type: 'invalidUsername',
          message: 'Username Salah',
          messageTwo: 'Coba cek ulang Username kamu ya',
        });
      } else if (password != 'admin') {
        setModalVisibility(true);
        setModalData({
          type: 'invalidPassword',
          message: 'Password Salah',
          messageTwo: 'Coba cek ulang Password kamu ya',
        });
      } else if (otorityError == true) {
        setModalVisibility(true);
        setModalData({
          type: 'invalidOtority',
          message: 'Password Salah',
          messageTwo: 'Coba cek ulang Password kamu ya',
        });
      } else {
        setModalVisibility(true);
      }
    }
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView>
        {/* MOdals */}
        <AuthModal
          modalVisibility={modalVisibility}
          setModalVisibility={setModalVisibility}
          data={modalData}
        />

        {/* Header */}
        <LandingHeader style={styles.loginImage} />

        {/* Body */}
        <Text style={styles.loginTitle}>Masuk</Text>
        <Text style={styles.loginSubTitle}>
          Silahkan isi Username dan Kata Sandi anda
        </Text>

        <View style={globalStyles.mt4}>
          <View>
            <Username style={styles.loginIcon} width={20} height={20} />
            <TextInput
              placeholder="Username"
              onChangeText={username => setUsername(username)}
              style={styles.input}
            />
          </View>

          <View style={styles.passwordInput}>
            <Password style={styles.loginIcon} width={20} height={20} />
            <TextInput
              placeholder="Kata Sandi"
              secureTextEntry={true}
              style={styles.input}
              onChangeText={password => setPassword(password)}
            />
          </View>

          <Text style={styles.mb4} />

          <TouchableOpacity style={globalStyles.btn} onPress={loggedIn}>
            <Text style={globalStyles.btnText}>Masuk</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.loginFooter}>
        <Text style={styles.loginFooterText}>APK Version 1.0.0</Text>
        <Text style={styles.loginFooterText}>
          (C) 2020. PT. Triputra Agro Persada
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loginTitle: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '400',
    fontSize: 36,
    alignSelf: 'flex-start',
    marginTop: 60,
    color: '#233258',
  },
  loginSubTitle: {
    fontFamily: 'Poppins-Medium',
    opacity: 0.4,
  },
  input: {
    flex: 1,
    height: 40,
    paddingVertical: 5,
    paddingHorizontal: 50,
    fontSize: 18,
    marginBottom: 15,
    backgroundColor: '#F0F5FF',
    borderRadius: 6,
    opacity: 0.8,
  },

  loginFooterText: {
    opacity: 0.25,
    color: '#233258',
    textAlign: 'center',
  },
  loginIcon: {
    position: 'absolute',
    zIndex: 1,
    marginLeft: 20,
    marginTop: 10,
  },
});

export default Login;
