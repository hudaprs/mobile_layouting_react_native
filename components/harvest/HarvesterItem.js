import React, {Fragment} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

// Icons
import Icon from 'react-native-vector-icons/dist/FontAwesome';

// Global Styles
import {globalStyles} from '../../styles/global';

const HarvesterItem = () => {
  return (
    <Fragment>
      <View style={styles.harvesterMenu}>
        <View>
          <Text style={styles.harvesterMenuTitle}>Pilih Pemanen</Text>
          <Text style={styles.harvesterMenuSubTitle}>2 Pemanen</Text>
        </View>
        <View>
          <TouchableOpacity
            style={[globalStyles.btnOutLine, globalStyles.btnOutLinePrimary]}>
            <Icon
              name="plus"
              size={20}
              color={'#407BFF'}
              style={{marginRight: 10}}
            />
            <Text
              style={[
                globalStyles.btnOutLineText,
                globalStyles.btnOutLineTextPrimary,
              ]}>
              Tambah Pemanen
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={globalStyles.btn}>
        <Text style={globalStyles.btnText}>Simpan</Text>
      </TouchableOpacity>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  harvesterMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  harvesterMenuTitle: {
    color: '#626D87',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
  },
  harvesterMenuSubTitle: {
    color: '#626D87',
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
});

export default HarvesterItem;
