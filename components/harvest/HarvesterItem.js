import React, {Fragment} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';

// Icons
import Icon from 'react-native-vector-icons/dist/FontAwesome';

// Global Styles
import {globalStyles} from '../../styles/global';

const HarvesterItem = () => {
  return (
    <Fragment>
      {/* Harvester Menu */}
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

      {/* Harvester */}
      <View style={globalStyles.mt3}>
        <View style={globalStyles.boxPrimary}>
          <View style={globalStyles.boxBody}>
            <View style={globalStyles.boxRadioInput}>
              <TouchableOpacity
                onPress={value => {
                  console.log(value);
                }}>
                <RadioForm
                  radio_props={[{value: ''}]}
                  initial={-1}
                  onPress={value => {
                    console.log(value);
                  }}
                  buttonSize={8}
                  buttonOuterSize={16}
                />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={[globalStyles.badge, globalStyles.badgePrimary]}>
                Pinjam Pemanen
              </Text>
              <Text style={globalStyles.boxTitle}>Qiu Xun</Text>
              <Text style={globalStyles.boxSubTitle}>41/4121/413/454</Text>
            </View>
            <View style={styles.addHarvest}>
              <TouchableOpacity style={styles.addIcon}>
                <Icon name="plus" size={10} style={{color: '#fff'}} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={globalStyles.boxPrimary}>
          <View style={globalStyles.boxBody}>
            <View style={globalStyles.boxRadioInput}>
              <TouchableOpacity
                onPress={value => {
                  console.log(value);
                }}>
                <RadioForm
                  radio_props={[{value: ''}]}
                  initial={-1}
                  onPress={value => {
                    console.log(value);
                  }}
                  buttonSize={8}
                  buttonOuterSize={16}
                />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={globalStyles.boxTitle}>Tongbang Jun-Seo</Text>
              <Text style={globalStyles.boxSubTitle}>41/4121/413/454</Text>
            </View>
            <View style={styles.addHarvest}>
              <TouchableOpacity style={styles.addIcon}>
                <Icon name="plus" size={10} style={{color: '#fff'}} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <TouchableOpacity style={globalStyles.btn}>
        <Text style={globalStyles.btnText}>Simpan</Text>
      </TouchableOpacity>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  // Harvester Menu
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

  // Harvester
  addHarvest: {
    marginLeft: 'auto',
  },
  addIcon: {
    backgroundColor: '#F9686A',
    color: '#fff',
    borderRadius: 2.5,
    padding: 5,
  },
});

export default HarvesterItem;
