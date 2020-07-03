import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },

  // Margins
  mt4: {
    marginTop: 40,
  },
  mt3: {
    marginTop: 30,
  },
  mt2: {
    marginTop: 20,
  },
  mt1: {
    marginTop: 10,
  },

  mb4: {
    marginBottom: 40,
  },
  mb3: {
    marginBottom: 30,
  },
  mb2: {
    marginBottom: 20,
  },
  mb1: {
    marginBottom: 10,
  },

  // Buttons
  btn: {
    backgroundColor: '#407BFF',
    height: 40,
    borderRadius: 6,
  },
  btnText: {
    marginTop: 8,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    color: '#fff',
  },
});
