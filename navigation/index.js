import 'react-native-gesture-handler';

import { createDrawerNavigator } from '@react-navigation/drawer';

// Screens
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';

// Styles
import { drawerNavStyles } from '../styles/drawer-nav/drawerNavStyles';
const drawerNavStyle = drawerNavStyles.drawer;
const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    <Drawer.Navigator screenOptions = {{
        headerShown:false,
        drawerActiveTintColor:'#14142b',
        drawerActiveBackgroundColor:'#f9f9f9',
        drawerStyle:{drawerNavStyle},
        }}>
      <Drawer.Screen name = "Home" component = {HomeScreen} />
      <Drawer.Screen name = "Cart" component = {CartScreen} />
    </Drawer.Navigator>
  );
}