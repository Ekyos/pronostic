import { Text, View } from 'react-native';
import ClassementStyles from './Classement.styles';
import { Footer } from '../../components/Footer';

export default function Accueil() {
  return (
    <View style={ClassementStyles.container}> 
      <Text> Page Classement</Text>
      <Footer />
    </View>
  );
}
