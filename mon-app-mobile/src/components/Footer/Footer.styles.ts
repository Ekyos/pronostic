import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    footer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#77b5fe',
        alignItems: 'center',
        paddingVertical: 20,
      },
      banner: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        paddingVertical: 10,
        backgroundColor: '#ffffff',
      },
      bannerText: {
        color: 'gray',
        fontSize: 16,
      },
      footerText: {
        color: '#fff',
        fontSize: 14,
        marginTop: 10,
      },
      icon: {
        width: 24,
        height: 24,
        marginBottom: 5,
      },
      bannerItem: {
        alignItems: 'center',
      },
  });