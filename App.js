import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
const IxCoach = 'https://www.ixcoach.com'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{width: '100%', height: '95%'}}>
        <WebView 
          source={{uri: IxCoach}}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
