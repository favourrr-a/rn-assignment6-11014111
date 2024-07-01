import { View } from 'react-native';

// Custom components
import Header from '../components/home-screen/Header';

// Styles
import { appStyles } from '../styles/appStyles';
import { homeScreenStyles } from '../styles/home-screen/homeScreenStyles';

export default function HomeScreen() {
    return(
        <View style = {appStyles.container}>
            <View style = {homeScreenStyles.container}>
                <Header/>
            </View>
        </View>
    )
}