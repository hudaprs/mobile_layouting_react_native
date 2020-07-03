import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Components
import Landing from './components/landings/Landing';
import Login from './components/auth/Login';
import HarvestPlan from './components/harvest/HarvestPlan';

// Navigations
import Tab from './routes/Tab';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
        <Stack.Screen name="Home" component={Tab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
