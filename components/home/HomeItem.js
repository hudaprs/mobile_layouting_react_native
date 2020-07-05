import React, {Fragment} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// Icons
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import ArrowRight from '../../assets/img/ArrowRight';

import {globalStyles} from '../../styles/global';

const HomeItem = ({navigation}) => {
  return (
    <Fragment>
      <View style={globalStyles.box}>
        <View style={styles.homeItemContainer}>
          {/* Header */}
          <View style={styles.homeItemHeader}>
            <View>
              <Text style={styles.homeItemTitle}>Rencana Panen</Text>
              <Text style={styles.homeItemSubTitle}>Hari Ini</Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate('HarvestPlan')}>
                <ArrowRight />
              </TouchableOpacity>
            </View>
          </View>

          {/* Body */}
          <View style={styles.homeItemBody}>
            <View style={styles.homeItemBodyContent}>
              <Icon
                name="map-marker"
                size={15}
                style={styles.homeItemBodyIcon}
              />
              <Text style={styles.homeItemBodyText}> Block D20</Text>
            </View>
            <View style={styles.homeItemBodyContent}>
              <Icon name="user" size={15} style={styles.homeItemBodyIcon} />
              <Text style={styles.homeItemBodyText}>Artem Sazonov</Text>
            </View>
          </View>
        </View>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  homeItemContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },

  // Header
  homeItemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  homeItemTitle: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Poppins-SemiBold',
    color: '#626D87',
  },
  homeItemSubTitle: {
    fontFamily: 'Poppins-SemiBold',
    color: '#233258',
    opacity: 0.4,
    fontSize: 12,
  },

  // Body
  homeItemBody: {
    marginTop: 10,
  },
  homeItemBodyText: {
    marginLeft: 10,
    fontSize: 12,
    fontWeight: '400',
    color: '#626D87',
  },
  homeItemBodyContent: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
});

export default HomeItem;
