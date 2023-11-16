import React from 'react';
import navigationStrings from '../constants/navigationStrings';
import * as Screens from '../Screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '../../styles/colors';
import { Image } from 'react-native';
import imgPath from '../constants/imgPath';
import TabNavigations from './TabNavigations';

const Tab = createBottomTabNavigator();

const BottomTabs = ()=>{
    return(
        <Tab.Navigator screenOptions={{headerShown: false,
        tabBarShowLabel:false,
        tabBarStyle:{
            position:'absolute',
            // backgroundColor:colors.yellow,
        }}}>
             <Tab.Screen name={navigationStrings.HOME} component={Screens.Home}
            options={{tabBarIcon:({})=>{
                return(
                    <Image style={{height:25,  width:25}} source={imgPath.ic_Home}/>
                )
            }}}/>
              <Tab.Screen name={navigationStrings.TABS} component={TabNavigations}
            options={{tabBarIcon:({})=>{
                return(
                    <Image style={{height:23,  width:23}} source={imgPath.ic_Notes}/>
                )
            }}}/>
            <Tab.Screen name={navigationStrings.CHATS} component={Screens.Chats}
            options={{tabBarIcon:({})=>{
                return(
                    <Image style={{height:20,  width:20}} source={imgPath.ic_Mesg}/>
                )
            }}}/>
          
             <Tab.Screen name={navigationStrings.EDITPROFILE} component={Screens.EditProfile}
            options={{tabBarIcon:({focused})=>{
                return(
                    <Image style={{height:25, width:25}} source={imgPath.ic_Profile}/>
                )
            }}}/>
           
        </Tab.Navigator>
    )
}
export default BottomTabs