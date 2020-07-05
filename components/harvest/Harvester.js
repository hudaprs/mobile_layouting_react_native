import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

// Components
import HarvesterItem from './HarvesterItem';

// Global Styles
import {globalStyles} from '../../styles/global';

const Harvester = () => {
  return (
    <View style={globalStyles.container}>
      {/* Harvester Header */}
      <View style={styles.harvesterHeader}>
        <View>
          <Image
            source={require('../../assets/img/ImageOne.png')}
            style={styles.image}
          />
        </View>
        <View>
          <Text style={styles.harvesterRole}>Mandor Panen</Text>
          <Text style={styles.harvesterName}>Débora Barbosa</Text>
          <Text style={styles.harvesterCode}>41/4121/413/3920</Text>
        </View>
      </View>

      {/* Harvester Body */}
      <View style={globalStyles.mt4}>
        <HarvesterItem />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Headers
  harvesterHeader: {
    flexDirection: 'row',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 2,
    marginRight: 20,
  },
  harvesterRole: {
    fontFamily: 'Poppins-Regular',
    color: '#626D87',
    fontSize: 10,
  },
  harvesterName: {
    fontFamily: 'Poppins-SemiBold',
    color: '#407BFF',
    fontSize: 18,
  },
  harvesterCode: {
    fontFamily: 'Poppins-Medium',
    color: '#626D87',
    fontSize: 12,
  },
});

export default Harvester;
