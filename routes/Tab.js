import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Icons
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Tab = createBottomTabNavigator();

import Home from '../components/home/Home';
import ExOne from '../components/tab/ExOne';
import ExTwo from '../components/tab/ExTwo';
import ExThree from '../components/tab/ExThree';
import ExFour from '../components/tab/ExFour';

const HomeTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let icon;

          if (route.name === 'Home') {
            icon = 'home';
          } else if (route.name === 'ExOne') {
            icon = 'list-alt';
          } else if (route.name === 'ExTwo') {
            icon = 'leaf';
          } else if (route.name === 'ExThree') {
            icon = 'truck';
          } else if (route.name === 'ExFour') {
            icon = 'list';
          }

          return <Icon name={icon} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#407BFF',
        inactiveTintColor: '#233258',
        showLabel: false,
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="ExOne" component={ExOne} />
      <Tab.Screen name="ExTwo" component={ExTwo} />
      <Tab.Screen name="ExThree" component={ExThree} />
      <Tab.Screen name="ExFour" component={ExFour} />
    </Tab.Navigator>
  );
};

export default HomeTab;
