import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { appStyles } from './styles/app_styles';

export default function App() {
  let mainText = 'Empty2';

  return (
    <View style={appStyles.container}>
      <Text>{mainText}</Text>
      <StatusBar style="auto" />
    </View>
  );
}


