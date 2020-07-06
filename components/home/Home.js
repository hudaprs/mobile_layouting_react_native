import React, {Fragment} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';

// SVG
import HomeBackground from '../../assets/img/home/HomeBackground.svg';
import HomeNotification from '../../assets/img/home/HomeNotification.svg';
import Hamburger from '../../assets/img/Hamburger.svg';

// Components
import HomeSubMenu from './HomeSubMenu';
import HomeItem from './HomeItem';

// Global Styles
import {globalStyles} from '../../styles/global';

// Dimensions
let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

const Home = ({navigation}) => {
  return (
    <Fragment>
      <View style={{backgroundColor: '#fff', flex: 1, padding: 24}}>
        <HomeBackground
          style={{
            position: 'absolute',
            justifyContent: 'center',
            alignSelf: 'center',
          }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.homeHeader}>
            {/* Bell Icon */}
            <TouchableOpacity>
              <HomeNotification />
            </TouchableOpacity>

            {/* Hamburger Icon */}
            <TouchableOpacity>
              <Hamburger />
            </TouchableOpacity>
          </View>

          {/* Home Image Photo */}
          <View style={styles.homeImage}>
            <TouchableOpacity onPress={() => navigation.navigate('Harvester')}>
              <Image
                source={require('../../assets/img/home/ImageOne.png')}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>

          {/* Bio */}
          <View style={styles.homeBio}>
            <Text style={styles.homeBioTitle}>Hello,</Text>
            <Text style={styles.homeBioName}>Débora Barbosa</Text>
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
    flex: 1,
    padding: 24,
    flexDirection: 'column',
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
    borderRadius: 2,
    width: 36,
    height: 36,
  },
  homeBio: {
    marginTop: 20,
  },
  homeBioTitle: {
    fontFamily: 'Poppins-SemiBold',
    color: '#233258',
    opacity: 0.4,
    fontSize: 18,
  },
  homeBioName: {
    fontFamily: 'Poppins-SemiBold',
    color: '#233258',
    opacity: 0.7,
    fontSize: 24,
  },
});

export default Home;
