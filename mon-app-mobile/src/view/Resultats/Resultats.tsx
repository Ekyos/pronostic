import { Text, View } from 'react-native';
import { Footer } from '../../components/Footer';
import ResultatsStyles from './Resultats.styles';

export default function Accueil() {
  return (
    <View style={ResultatsStyles.container}> 
      <Text> Page Resultats </Text>
      <Footer/>
    </View>
  );
}
