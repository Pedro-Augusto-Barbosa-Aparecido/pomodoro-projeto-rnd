import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { Home } from './Home';

const TabNavigator = createMaterialBottomTabNavigator();

import { THEME } from '../styles/theme';

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
            tabBarIcon: (color) => {
              return <MaterialCommunityIcons name='home' color={color.color} size={20} />
            },
          }}
        />
      </TabNavigator.Navigator>
    </NavigationContainer>

  );

}
