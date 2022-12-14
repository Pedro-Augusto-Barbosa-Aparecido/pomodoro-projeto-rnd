import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { Home } from './Home';

const TabNavigator = createMaterialBottomTabNavigator();

import { THEME } from '../styles/theme';
import { ArticleNyTimes, Scroll } from 'phosphor-react-native';
import { CyclesList } from './CyclesList';

export function Routes() {
  const { colors } = THEME;
  
  return (
    <NavigationContainer>
      <TabNavigator.Navigator
        barStyle={{
          backgroundColor: "#111827",
        }}
        activeColor={colors.green[500]}
        inactiveColor={colors.gray[600]}
      >
        <TabNavigator.Screen 
          name="Home" 
          component={Home}
          options={{
            tabBarLabel: "Countdown",
            tabBarIcon: (color) => {
              return <Scroll color={color.color} size={24} />
            },
          }}
        />
        <TabNavigator.Screen 
          name="CyclesList" 
          component={CyclesList}
          options={{
            tabBarLabel: "Cycles",
            tabBarIcon: (color) => {
              return <ArticleNyTimes color={color.color} size={24} />
            },
          }}
        />
      </TabNavigator.Navigator>
    </NavigationContainer>

  );

}
