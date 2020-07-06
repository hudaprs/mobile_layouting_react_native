import React from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

// Dimensions
let deviceHeight = Dimensions.get('window').height / 2;
let deviceWidth = Dimensions.get('window').width;

// Icons
import Icon from 'react-native-vector-icons/dist/FontAwesome';

// Global Styles
import {globalStyles} from '../../styles/global';

const AuthModal = ({modalVisibility, setModalVisibility, data}) => {
  return (
    <Modal visible={modalVisibility} animationType="fade" transparent={true}>
      <View style={[styles.authModal, {backgroundColor: 'rgba(0, 0, 0, .8)'}]}>
        <View style={styles.authModalContent}>
          <View style={styles.authModalHeader}>
            <Icon
              name="times"
              onPress={() => setModalVisibility(false)}
              size={24}
              style={globalStyles.closeModalIcon}
            />
          </View>
          <View style={styles.authModalBody}>
            <Text style={styles.authModalTitle}>{data && data.message}</Text>
            <Text style={styles.authModalSubTitle}>
              {data && data.messageTwo}
            </Text>
          </View>
          <View style={globalStyles.mt4}>
            <TouchableOpacity
              style={[globalStyles.btn]}
              onPress={() => setModalVisibility(false)}>
              <Text style={globalStyles.btnText}>Coba Lagi</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  authModal: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  authModalContent: {
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#829CD0',
    shadowOpacity: 2,
    shadowRadius: 2,
    elevation: 3,
    shadowOffset: {width: -3, height: -3},
    padding: 20,
    elevation: 2,
    height: deviceHeight,
    width: deviceWidth,
  },
  authModalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  authModalBody: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  authModalFooter: {},
  authModalTitle: {
    fontFamily: 'Poppins-Medium',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#233258',
  },
  authModalSubTitle: {
    fontFamily: 'Poppins-Medium',
    opacity: 0.4,
    fontSize: 12,
  },
});

export default AuthModal;
