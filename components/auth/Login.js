import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {globalStyles} from '../../styles/global';

const Login = () => {
  return (
    <View style={globalStyles.container}>
      {/* Header */}
      <View style={styles.loginHeader}>
        <Image
          source={require('../../assets/img/LandingHeader.png')}
          style={styles.loginImage}
        />
      </View>

      {/* Body */}
      <View style={styles.loginBody}>
        <Text style={styles.loginTitle}>Masuk</Text>
        <Text style={styles.loginSubTitle}>
          Silahkan isi Username dan Kata Sandi anda
        </Text>

        <View style={globalStyles.mt4}>
          <TextInput placeholder="Username" style={styles.input} />
          <TextInput placeholder="Kata Sandi" style={styles.input} />

          <Text style={styles.mb4} />

          <TouchableOpacity style={globalStyles.btn}>
            <Text style={globalStyles.btnText}>Masuk</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.loginFooter}>
        <Text style={styles.loginFooterText}>APK Version 1.0.0</Text>
        <Text style={styles.loginFooterText}>
          (C) 2020. PT. Triputra Agro Persada
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginHeader: {
    flex: 1,
  },
  loginBody: {
    flex: 6,
  },
  loginFooter: {
    flex: 1,
  },
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
    height: 40,
    paddingHorizontal: 30,
    fontSize: 16,
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
});

export default Login;
