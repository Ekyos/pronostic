import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp  } from '@react-navigation/native';
import footerStyles from './Footer.styles';
import { RootStackParamList } from '../../navigation/navigation';

const Footer = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={footerStyles.footer}>
        <View style={footerStyles.banner}>
            <TouchableOpacity style={footerStyles.bannerItem} onPress={() => navigation.navigate('Pronos')}>
              <Image source={require('../../../assets/images/ballon.jpg')} style={footerStyles.icon} />
              <Text style={footerStyles.bannerText}>Pronos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={footerStyles.bannerItem} onPress={() => navigation.navigate('Resultats')}>
              <Image source={require('../../../assets/images/score.jpg')} style={footerStyles.icon} />
              <Text style={footerStyles.bannerText}>Résultats</Text>
            </TouchableOpacity>
            <TouchableOpacity style={footerStyles.bannerItem} onPress={() => navigation.navigate('Classement')}>
              <Image source={require('../../../assets/images/trophy.jpg')} style={footerStyles.icon} />
              <Text style={footerStyles.bannerText}>Classement</Text>
            </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;