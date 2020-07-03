import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import Home from '../components/home/Home';
import HarvestPlan from '../components/harvest/HarvestPlan';

const HomeTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="HarvestPlan" component={HarvestPlan} />
    </Tab.Navigator>
  );
};

export default HomeTab;
