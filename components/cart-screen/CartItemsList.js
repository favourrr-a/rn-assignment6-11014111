import { ScrollView } from 'react-native';

// Custom components
import CartItem from './CartItem';

// Styles
import { cartItemsListStyles } from '../../styles/cart-screen/cartItemsListStyles';

// Assets
import productImage from '../../assets/products-images/dress1.jpg';

export default function CartItemsList(){

    const cartItems = [
        {
            id: 1,
            image: productImage,
            category: 'OFFICE WEAR',       
            name: 'Nice dress',
            price: 100
        },
        {
            id: 2,
            image: productImage,
            category: 'OFFICE WEAR',
            name: 'Product 2',
            price: 200
        },
        {
            id: 3,
            image: productImage,
            category: 'OFFICE WEAR',
            name: 'Product 3',
            price: 300
        },
        {
            id: 4,
            image: productImage,
            category: 'OFFICE WEAR',
            name: 'Product 4',
            price: 400
        },
        {
            id: 5,
            image: productImage,
            category: 'OFFICE WEAR',
            name: 'Product 5',
            price: 500
        },
        {
            id: 6,
            image: productImage,
            category: 'OFFICE WEAR',
            name: 'Product 6',
            price: 600
        },
        {
            id: 7,
            image: productImage,
            category: 'OFFICE WEAR',
            name: 'Product 7',
            price: 700
        },
        {
            id: 8,
            image: productImage,
            category: 'OFFICE WEAR',
            name: 'Product 8',
            price: 800
        },
        {
            id: 9,
            image: productImage,
            category: 'OFFICE WEAR',
            name: 'Product 9',
            price: 900
        },
        {
            id: 10,
            image: productImage,
            category: 'OFFICE WEAR',
            name: 'Product 10',
            price: 1000
        }
    ];

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