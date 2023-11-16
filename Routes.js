import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import navigationStrings from '../constants/navigationStrings'
import * as Screens from '../Screens'
import MainStack from './MainStack'

const Stack = createNativeStackNavigator()
const Routes = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          {MainStack(Stack)}
            
            {/* <Stack.Screen name={navigationStrings.EDITPROFILE} component={Screens.EditProfile}/> */}
            {/* <Stack.Screen name={navigationStrings.EXPERTISE} component={Screens.Expertise}/> */}
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
