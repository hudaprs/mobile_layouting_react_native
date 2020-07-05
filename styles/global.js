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
  btnOutLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    padding: 20,
    borderColor: '#000',
    borderRadius: 6,
    paddingVertical: 10,
  },
  btnOutLineText: {
    color: '#000',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
  btnOutLinePrimary: {
    borderColor: '#407BFF',
  },
  btnOutLineTextPrimary: {
    color: '#407BFF',
  },

  // Boxes
  box: {
    resizeMode: 'cover',
    borderRadius: 8,
    shadowColor: '#829CD0',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {width: 2, height: 2},
    paddingVertical: 10,
    paddingHorizontal: 25,
    marginBottom: 20,
  },
});
