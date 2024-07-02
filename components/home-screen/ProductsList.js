import { View, FlatList, Dimensions } from 'react-native';

// Custom components
import ProductCard from './ProductCard';

// Styles
import { productsListStyles } from '../../styles/home-screen/productsListStyles';

// Assets
import productImage from '../../assets/products-images/dress1.jpg';

export default function ProductsList(){
    const numColumns = 2;

    const products = [
        {
            id: 1,
            image: productImage,
            category: 'Church wear',       
            name: 'Product 1',
            price: 100
        },
        {
            id: 2,
            image: productImage,
            category: 'Church wear',
            name: 'Product 2',
            price: 200
        },
        {
            id: 3,
            image: productImage,
            category: 'Church wear',
            name: 'Product 3',
            price: 300
        },
        {
            id: 4,
            image: productImage,
            category: 'Church wear',
            name: 'Product 4',
            price: 400
        },
        {
            id: 5,
            image: productImage,
            category: 'Church wear',
            name: 'Product 5',
            price: 500
        },
        {
            id: 6,
            image: productImage,
            category: 'Church wear',
            name: 'Product 6',
            price: 600
        },
        {
            id: 7,
            image: productImage,
            category: 'Church wear',
            name: 'Product 7',
            price: 700
        },
        {
            id: 8,
            image: productImage,
            category: 'Church wear',
            name: 'Product 8',
            price: 800
        },
        {
            id: 9,
            image: productImage,
            category: 'Church wear',
            name: 'Product 9',
            price: 900
        },
        {
            id: 10,
            image: productImage,
            category: 'Church wear',
            name: 'Product 10',
            price: 1000
        }
    ];
    const renderItem = ({ item }) => (
        <View style={productsListStyles.item}>
            <ProductCard product={item} />
        </View>
    );

    return (
        <FlatList
            data={products}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={numColumns}
            columnWrapperStyle={productsListStyles.row}
            contentContainerStyle={{ width: '100%' }}
            showsVerticalScrollIndicator={false}
            style={productsListStyles.container}
        />
    );
}