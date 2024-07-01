import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Styles
import { appStyles } from './styles/appStyles';

export default function App() {
  return (
    <View style = {appStyles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
