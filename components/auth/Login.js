import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import LandingHeader from '../../assets/img/LandingHeader.svg';
import Username from '../../assets/img/Username.svg';
import Password from '../../assets/img/Password.svg';

import {globalStyles} from '../../styles/global';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loggedIn = () => {
    // Check username and password.
    if (!username || !password) {
      Alert.alert('Error', 'Silahkan isi username dan password', [
        {text: 'OK'},
      ]);
    } else {
      // Check if username and password is match.
      if (username == 'admin' && password == 'admin') {
        navigation.navigate('Home');
      } else {
        Alert.alert('Error', 'Username atau Password salah', [{text: 'OK'}]);
      }
    }
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView>
        {/* Header */}
        <LandingHeader style={styles.loginImage} />

        {/* Body */}
        <Text style={styles.loginTitle}>Masuk</Text>
        <Text style={styles.loginSubTitle}>
          Silahkan isi Username dan Kata Sandi anda
        </Text>

        <View style={globalStyles.mt4}>
          <View>
            <Username style={styles.loginIcon} />
            <TextInput
              placeholder="Username"
              onChangeText={username => setUsername(username)}
              style={styles.input}
            />
          </View>

          <View style={styles.passwordInput}>
            <Password style={styles.loginIcon} />
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
    zIndex: 1,
    marginLeft: 20,
    marginTop: 10,
  },
});

export default Login;
