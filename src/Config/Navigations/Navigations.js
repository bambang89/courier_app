import React from 'react';
import {
  Dimensions,
  SafeAreaView
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

/**
 * Login Menu
 */
import Login from 'CourierKupesan/src/Pages/Login/Login';

/**
 * Pages List
 */
// Main Menu
import Home from 'CourierKupesan/src/Pages/Home/Home';
import Wallet from 'CourierKupesan/src/Pages/Wallet/Wallet';
import Notification from 'CourierKupesan/src/Pages/Notification/Notification';
import Other from 'CourierKupesan/src/Pages/Other/Other';

//Other menu
import History from 'CourierKupesan/src/Pages/History/History';
import Detail from 'CourierKupesan/src/Pages/History/Detail';
import ChangePassword from 'CourierKupesan/src/Pages/ChangePassword/ChangePassword';
import Chat from 'CourierKupesan/src/Pages/Chat/Chat';

import Cart from 'CourierKupesan/src/Pages/Cart/Cart';
import Details from 'CourierKupesan/src/Pages/Details/Details';

const Stack = createStackNavigator();
// const MainMenu = createStackNavigator();
const bottomTab = createBottomTabNavigator();

function secondStack(){
  return(
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={Login}/>
    </Stack.Navigator>
  );
}

function tabBottom(){
  return(
    <bottomTab.Navigator>
      <bottomTab.Screen 
        name="Pesanan" 
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name={'cart-outline'} size={25} color={color} />
          }
        }}
      />
      <bottomTab.Screen 
        name="Saldo" 
        component={Wallet}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name={'wallet-outline'} size={25} color={color} />
          }
        }}
      />
      <bottomTab.Screen 
        name="Notifikasi" 
        component={Notification}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name={'notifications-outline'} size={25} color={color} />
          }
        }}
      />
      <bottomTab.Screen 
        name="Lainnya" 
        component={Other}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name={'apps-outline'} size={25} color={color} />
          },
          tabBarVisible:false
        }}
      />
    </bottomTab.Navigator>
  );
}

const MainNavigation = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator  headerMode='none' headerShown={false} navi screenOptions={{
          headerShown: false,
          headerStatusBarHeight: 0
        }}>
          <Stack.Screen name="Login" component={secondStack} />
          <Stack.Screen name="Home" component={tabBottom}/>
          <Stack.Screen name="History" component={History}/>
          <Stack.Screen name="Detail" component={Detail}/>
          <Stack.Screen name="Chat" component={Chat}/>
          <Stack.Screen name="ChangePassword" component={ChangePassword}/>
          {/* add your another screen here using -> Stack.Screen */}
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default MainNavigation;
