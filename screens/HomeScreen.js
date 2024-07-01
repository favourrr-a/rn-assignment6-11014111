import { View, Text } from 'react-native';

// Styles
import { appStyles } from '../styles/appStyles';
import { homeScreenStyles } from '../styles/home-screen/homeScreenStyles';

export default function HomeScreen() {
    return(
        <View style = {appStyles.container}>
            <View style = {homeScreenStyles.container}>
                <Text> I AM THE HOME SCREEN </Text>
            </View>
        </View>
    )
}