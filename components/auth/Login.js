import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import {globalStyles} from '../../styles/global';

const Login = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView>
        {/* Header */}
        <Image
          source={require('../../assets/img/LandingHeader.png')}
          style={styles.loginImage}
        />

        {/* Body */}
        <Text style={styles.loginTitle}>Masuk</Text>
        <Text style={styles.loginSubTitle}>
          Silahkan isi Username dan Kata Sandi anda
        </Text>

        <View style={globalStyles.mt4}>
          <View>
            <Image
              source={require('../../assets/img/AuthUsername.png')}
              style={styles.loginIcon}
            />
            <TextInput placeholder="Username" style={styles.input} />
          </View>

          <View style={styles.passwordInput}>
            <Image
              source={require('../../assets/img/AuthPassword.png')}
              style={styles.loginIcon}
            />
            <TextInput placeholder="Kata Sandi" style={styles.input} />
          </View>

          <Text style={styles.mb4} />

          <TouchableOpacity style={globalStyles.btn}>
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
    paddingHorizontal: 50,
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
  loginIcon: {
    position: 'absolute',
    width: 15,
    height: 20,
    zIndex: 1,
    marginLeft: 20,
    marginTop: 9,
  },
});

export default Login;
