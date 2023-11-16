import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import navigationStrings from "../constants/navigationStrings";
import * as Screens from '../Screens';
import { NavigationContainer } from "@react-navigation/native";
import HeaderComp from "../Components/HeaderComp";
import { View } from "react-native";

const Tab = createMaterialTopTabNavigator();

const TabNavigations = () => {
    return (
        <View style={{flex:1 }}>
            <HeaderComp text="My Bookings" showBack={false} showNotify={true}/>
      
            <Tab.Navigator screenOptions={{headerShown:false}}  >
                <Tab.Screen name={navigationStrings.UPCOMING} component={Screens.Upcoming} />
                <Tab.Screen name={navigationStrings.ONGOING} component={Screens.Ongoing} />
                <Tab.Screen name={navigationStrings.PAST} component={Screens.Past} />
            </Tab.Navigator>
   
        </View>
    )
}


export default TabNavigations;