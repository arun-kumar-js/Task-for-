import React from 'react';
import { SafeAreaView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import Welcome from './screens/Welcome';
import Shots from './screens/Shots';
import Reaction from './screens/Reaction';
import ReportReaction from './screens/ReportReaction';



const withSafeArea = (Component: React.ComponentType<any>, safeArea: boolean) => (props: any) => {
  return safeArea ? (
    <SafeAreaView style={{ flex: 1 }}>
      <Component {...props} />
    </SafeAreaView>
  ) : (
    <Component {...props} />
  );
};
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  // Import your icon images
  const icons = {
    Home: require('./assets/icon/Home.png'),
    Shots: require('./assets/icon/njection.png'),
    Reaction: require('./assets/icon/virus.png'),
    'Report': require('./assets/icon/report.png'),
  };

  // Custom wrapper for manual alignment of the bottom tab bar
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#3DCAAA',
        tabBarStyle: {
          backgroundColor: '#ffffff',
          paddingHorizontal: 15,
          paddingBottom: 10,
          paddingTop: 10,
          height: 80,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: 'absolute',
        },
        tabBarLabelStyle: { fontSize: 15 },
        headerShown: false,
        tabBarItemStyle:
          route.name === 'Report'
            ? { flex: 1.5, alignItems: 'center' }
            : { flex: 1, alignItems: 'center' },
        tabBarIcon: ({ focused, color, size }) => {
          const iconSource = icons[route.name as keyof typeof icons];
          return (
            <Image
              source={iconSource}
              style={{
                width: route.name === 'Report' ? size + 80 : size + 4,
                height: route.name === 'Report' ? size + 40 : size + 4,
                marginTop: route.name === 'Report' ? 30 : 4,
                opacity: focused ? 1 : 0.6,
                tintColor: route.name !== 'Report' ? color : undefined,
              }}
              resizeMode="contain"
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={withSafeArea(Home, true)} />
      <Tab.Screen name="Shots" component={withSafeArea(Shots, true)} />
      <Tab.Screen name="Reaction" component={withSafeArea(Reaction, true)} />
      <Tab.Screen
        name="Report"
        component={withSafeArea(ReportReaction, false)}
        options={{ tabBarLabel: () => null }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={withSafeArea(Welcome, false)}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={withSafeArea(Register, false)}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={withSafeArea(Login, false)}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
