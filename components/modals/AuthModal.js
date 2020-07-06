import React from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

// SVG'
import WrongUsername from '../../assets/img/auth/WrongUsername';
import WrongPassword from '../../assets/img/auth/WrongPassword';
import OtorityWarning from '../../assets/img/auth/OtoryWarning';

// Dimensions
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
          {/* Header */}
          <View style={styles.authModalHeader}>
            <Icon
              name="times"
              onPress={() => setModalVisibility(false)}
              size={24}
              style={globalStyles.closeModalIcon}
            />
          </View>

          {/* Body */}
          <View style={styles.authModalBody}>
            {/* Check type of error  */}
            {data && data.type === 'invalidUsername' && (
              <WrongUsername style={globalStyles.mb1} />
            )}
            {data && data.type === 'invalidPassword' && (
              <WrongPassword style={globalStyles.mb1} />
            )}
            {data && data.type === 'invalidOtority' && (
              <OtorityWarning style={globalStyles.mb1} />
            )}

            <Text style={globalStyles.textSecondary}>
              {data && data.message}
            </Text>
            <Text style={[globalStyles.textAlternative, {textAlign: 'center'}]}>
              {data && data.messageTwo}
            </Text>
          </View>

          {/* Footer */}
          <View style={globalStyles.mt2}>
            <TouchableOpacity
              style={globalStyles.btn}
              onPress={() => setModalVisibility(false)}>
              <Text style={globalStyles.btnText}>
                {data && data.type == 'invalidOtority'
                  ? 'Yakin dan Hapus Data'
                  : 'Coba Lagi'}
              </Text>
            </TouchableOpacity>

            {/* For invalidOtority type only */}
            {data && data.type == 'invalidOtority' && (
              <TouchableOpacity style={globalStyles.mt1}>
                <Text style={[globalStyles.textPrimary, {textAlign: 'center'}]}>
                  Saya Tidak Mau Menghapus Data
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  authModal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  authModalContent: {
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 20,
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
});

export default AuthModal;
