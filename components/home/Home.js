import React, {Fragment} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

// SVG
import HomeBackground from '../../assets/img/home/HomeBackground.svg';
import HomeNotification from '../../assets/img/home/HomeNotification.svg';

// Components
import HomeSubMenu from './HomeSubMenu';
import HomeItem from './HomeItem';

// Global Styles
import {globalStyles} from '../../styles/global';

const Home = ({navigation}) => {
  return (
    <Fragment>
      <View style={styles.homeContainer}>
        <HomeBackground resizeMode={'cover'} style={styles.backgroundImage} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.homeHeader}>
            {/* Photo Profile */}
            <TouchableOpacity onPress={() => navigation.navigate('Harvester')}>
              <Image
                source={require('../../assets/img/home/ImageOne.png')}
                style={styles.image}
              />
            </TouchableOpacity>

            {/* Hamburger Icon */}
            <TouchableOpacity>
              <View style={styles.redDotNotification} />
              <HomeNotification />
            </TouchableOpacity>
          </View>

          {/* Home Sub Menu */}
          <View style={globalStyles.mt4}>
            <HomeSubMenu />
          </View>

          {/* Home Item */}
          <View style={globalStyles.mt2}>
            <HomeItem navigation={navigation} />
          </View>
        </ScrollView>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 24,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
  },
  homeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  homeImage: {
    marginTop: 30,
  },
  image: {
    borderRadius: 12,
    width: 50,
    height: 50,
  },
  redDotNotification: {
    backgroundColor: '#F9686A',
    position: 'absolute',
    right: 1,
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
    zIndex: 1,
  },
});

export default Home;
