import 'react-native-gesture-handler';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Components
import Landing from './components/landings/Landing';
import Login from './components/auth/Login';
import HarvestPlan from './components/harvest/HarvestPlan';
import Harvester from './components/harvest/Harvester';

// Icons
import Hamburger from './assets/img/Hamburger.svg';
import ArrowLeft from './assets/img/ArrowLeft.svg';

// Navigations
import Tab from './routes/Tab';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: '#3F3F3F',
          headerTitleStyle: {
            fontSize: 18,
            fontFamily: 'Poppins-Medium',
          },
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerBackImage: () => <ArrowLeft />,
        }}>
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Tab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HarvestPlan"
          component={HarvestPlan}
          options={{
            title: 'Rencana Panen',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Harvester"
          component={Harvester}
          options={{
            title: 'Pemanen',
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
