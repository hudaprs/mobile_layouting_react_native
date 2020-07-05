import React, {Fragment} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

// Icons
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import {globalStyles} from '../../styles/global';

const HomeSubMenu = () => {
  return (
    <Fragment>
      <View style={[globalStyles.box, styles.homeSubMenuContainer]}>
        <View style={styles.homeSubMenuItem}>
          <TouchableOpacity>
            <Icon name="user" style={styles.homeSubMenuIcon} size={24} />
          </TouchableOpacity>
          <Text style={styles.homeSubMenuTitle}>Summary{'\n'}Pemanen</Text>
        </View>
        <View style={styles.homeSubMenuItem}>
          <TouchableOpacity>
            <Icon name="dollar" style={styles.homeSubMenuIcon} size={24} />
          </TouchableOpacity>
          <Text style={styles.homeSubMenuTitle}>Denda{'\n'}Panen</Text>
        </View>
        <View style={styles.homeSubMenuItem}>
          <TouchableOpacity>
            <Icon name="list" style={styles.homeSubMenuIcon} size={24} />
          </TouchableOpacity>
          <Text style={styles.homeSubMenuTitle}>Luasan{'\n'}Wilayah</Text>
        </View>
        <View style={styles.homeSubMenuItem}>
          <TouchableOpacity>
            <Icon name="list-alt" style={styles.homeSubMenuIcon} size={24} />
          </TouchableOpacity>
          <Text style={styles.homeSubMenuTitle}>Angkut{'\n'}Buah</Text>
        </View>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  homeSubMenuContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  homeSubMenuItem: {
    alignItems: 'center',
    textAlign: 'center',
  },
  homeSubMenuIcon: {
    color: '#F9686A',
  },
  homeSubMenuTitle: {
    textAlign: 'center',
    fontSize: 12,
  },
});

export default HomeSubMenu;
