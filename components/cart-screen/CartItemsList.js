import { ScrollView } from 'react-native';
import { useCart } from '../../contexts/cartContext';

// Custom components
import CartItem from './CartItem';

// Styles
import { cartItemsListStyles } from '../../styles/cart-screen/cartItemsListStyles';

export default function CartItemsList(){
    const { cartItems } = useCart();

    return (
        <ScrollView showsVerticalScrollIndicator = {true} style = {cartItemsListStyles.container}>
            {
                cartItems.map(cartItem => (
                    <CartItem key = {cartItem.id} product = {cartItem}/>
                ))
            }
        </ScrollView>
    );
}