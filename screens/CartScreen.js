import { View } from 'react-native';

// Custom components
import CartScreenHeader from '../components/cart-screen/CartScreenHeader';
import CheckoutHeader from '../components/cart-screen/CheckoutHeader';

// Styles
import { appStyles } from '../styles/appStyles';
import { cartScreenStyles } from '../styles/cart-screen/cartScreenStyles';

export default function CartScreen() {
    return(
        <View style = {appStyles.container}>
            <View style = {cartScreenStyles.container}>
                <CartScreenHeader/>
                <CheckoutHeader/>
            </View>
        </View>
    )
}