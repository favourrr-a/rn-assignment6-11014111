import { View, Text } from 'react-native';

// Styles
import { appStyles } from '../styles/appStyles';
import { cartScreenStyles } from '../styles/cart-screen/cartScreenStyles';

export default function CartScreen() {
    return(
        <View style = {appStyles.container}>
            <View style = {cartScreenStyles.container}>
                <Text>I AM THE CART SCREEN</Text>
            </View>
        </View>
    )
}