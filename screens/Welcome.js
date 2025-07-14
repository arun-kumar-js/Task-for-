import { s, vs, ms, mvs } from 'react-native-size-matters';
import {
  Text,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
const Welcome = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/image/welcome.png')}
        style={styles.imageBackground}
      >
        <Text style={styles.welcomeText}>Welcome to</Text>
        <Text style={styles.appNameText}>AllergyAlly</Text>
      </ImageBackground>

      <Image
        source={require('../assets/image/welcomeBottom.png')}
        style={styles.bottomImage}
      />
      <View style={styles.bottomContainer}>
        <View>
          <Text style={styles.subtitleText}>Manage your allergies from</Text>
          <Text style={styles.highlightText}>Anywhere, at Anytime</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Image
            source={require('../assets/image/doubleArrow.png')}
            style={styles.arrowImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: ms(40),
    fontWeight: '700',
    position: 'absolute',
    top: '6%',
    fontFamily: 'Poppins',
    paddingLeft: s(20),
  },
  appNameText: {
    fontSize: ms(22),
    position: 'absolute',
    top: '12%',
    fontFamily: 'Poppins',
    fontWeight: '700',
    paddingLeft: s(22),
  },
  bottomImage: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '35%',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: mvs(20),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: s(20),
    justifyContent: 'space-between',
  },
  subtitleText: {
    fontSize: ms(20),
    fontFamily: 'Montserrat',
    color: '#FFFFFF',
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: ms(33),
  },
  highlightText: {
    fontSize: ms(24),
    fontFamily: 'Montserrat',
    color: '#FFFFFF',
    fontWeight: '700',
    fontStyle: 'normal',
  },
  arrowImage: {
    width: ms(60),
    height: ms(60),
    marginRight: s(10),
  },
});

export default Welcome;
