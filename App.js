import { Text, View } from 'react-native';
import Routes from './src/Navigations/Routes';
// import EditProfile from './src/Screens/EditProfile/EditProfile';
// import Expertise from './src/Screens/Expertise/Expertise';
// import TabNavigations from './src/Navigations/TabNavigations';



export default function App() {
  return (
    <View style={{flex:1}}>
    {/* <TabNavigations/> */}
    {/* <Expertise/> */}
    {/* <EditProfile/> */}
    <Routes/>
    </View>
  );
}

