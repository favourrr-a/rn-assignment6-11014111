import { NavigationContainer } from '@react-navigation/native';

import { CartContextProvider } from './contexts/cartContext';
import DrawerNav from './navigation';

export default function App() {
  return (
    <NavigationContainer>
      <CartContextProvider>
        <DrawerNav/>
      </CartContextProvider>
    </NavigationContainer>
  );
}
