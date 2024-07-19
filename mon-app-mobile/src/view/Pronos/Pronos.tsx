import { Text, View } from 'react-native';
import { Footer } from '../../components/Footer';
import PronosStyles from './Pronos.styles';

export default function Accueil() {
  return (
    <View style={PronosStyles.container}> 
      <Text> Page Pronos </Text>
      <Footer/>
    </View>
  );
}
