import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import HomeScreen from './screen/HomeScreen';
import tw from "twrnc"

export default function App() {
  return (
    <Provider store={store}>
    <SafeAreaView >
     <HomeScreen />
   
    </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
