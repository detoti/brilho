import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../screen/home/home'
import TopCuponsScreen from "../screen/cupons/components/topCupons";

const Tab = createBottomTabNavigator();

export default function AppRotas() {
    return <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='Cupons' component={Home} />
          <Tab.Screen name='Melhores Cupons' component={TopCuponsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
}