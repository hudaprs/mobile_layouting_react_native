import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    flexDirection: 'column',
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
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#829CD0',
    shadowOpacity: 2,
    shadowRadius: 0,
    shadowOffset: {width: 3, height: 3},
    paddingVertical: 10,
    paddingHorizontal: 25,
    marginBottom: 20,
    elevation: 3,
  },
  boxPrimary: {
    backgroundColor: 'rgba(130, 156, 208, 0.15)',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
  },
  boxBody: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxRadioInput: {
    marginRight: 10,
  },
  boxTitle: {
    color: '#407BFF',
    fontSize: 14,
    fontFamily: 'OpenSans-Semibold',
  },
  boxSubTitle: {
    color: '#3F3F3F',
    fontSize: 12,
    fontFamily: 'OpenSans-Regular',
  },

  // Badges
  badge: {
    backgroundColor: '#000',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 2,
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
    fontSize: 10,
  },
  badgePrimary: {
    backgroundColor: '#79A2FF',
  },

  // Modals
  closeModalIcon: {
    color: '#3F3F3F',
    marginLeft: 'auto',
  },
});
