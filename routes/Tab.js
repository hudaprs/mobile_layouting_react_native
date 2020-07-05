import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Icons
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Tab = createBottomTabNavigator();

import Home from '../components/home/Home';

const HomeTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Home') {
            return <Icon name="home" size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#407BFF',
        inactiveTintColor: '#233258',
        showLabel: false,
      }}>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
};

export default HomeTab;
