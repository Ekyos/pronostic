import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PronosView } from './view/Pronos';
import { ResultatsView } from './view/Resultats';
import { ClassementView } from './view/Classement';
import { Footer } from './components/Footer';
import { RootStackParamList } from './navigation/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Pronos">
          <Stack.Screen name="Pronos" component={PronosView} />
          <Stack.Screen name="Resultats" component={ResultatsView} />
          <Stack.Screen name="Classement" component={ClassementView} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});