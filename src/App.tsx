import { registerRootComponent } from 'expo';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { RecoilRoot } from 'recoil';

import List from './components/List';
import Create from './components/Create';
import firebaseInit from './utils/firebaseInit';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === '入力') {
          iconName = focused ? 'brush' : 'brush-outline';
        } else if (route.name === '一覧') {
          iconName = focused ? 'menu' : 'menu-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#E4A400',
      inactiveTintColor: 'gray',
    }}
  >
    <Tab.Screen name="一覧" component={List} />
    <Tab.Screen name="入力" component={Create} />
  </Tab.Navigator>
);

const App = () => {
  firebaseInit();

  return (
    <RecoilRoot>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </RecoilRoot>
  );
};

export default App;
registerRootComponent(App);
