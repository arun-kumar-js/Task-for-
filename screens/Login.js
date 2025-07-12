import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Montserrat, Poppins } from 'react-native-paper';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


const Login = () => {
  const [secureText, setSecureText] = useState(true);
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      {/* Background images */}
      <View style={StyleSheet.absoluteFillObject}>
        <Image
          source={require('../assets/image/top.png')}
          style={{ width: '100%', height: '50%', resizeMode: 'stretch' }}
        />
        <Image
          source={require('../assets/image/bottom.png')}
          style={{ width: '100%', height: '50%', resizeMode: 'stretch' }}
        />
      </View>

      {/* main content */}
      <SafeAreaView
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 180,
        }}
      >
        <Image
          source={require('../assets/image/logo.png')}
          style={{
            width: 66,
            height: 67,
            opacity: 1,
            transform: [{ rotate: '0deg' }],
          }}
        />

        <Text
          style={{
            fontFamily: 'Montserrat-Bold',
            fontSize: 30,
            lineHeight: 30,
            letterSpacing: -0.17,
            fontWeight: 'bold',
          }}
        >
          Login
        </Text>
        <Text
          style={{
            fontFamily: 'Montserrat-Regular',
            fontSize: 18,
            lineHeight: 24,
            color: '#000000',
            textAlign: 'center',
            marginTop: 8,
            fontWeight: '300',
          }}
        >
          Please enter your Email & Password
        </Text>
        {/* email */}
        <View
          style={{
            flexDirection: 'row',
            borderRadius: 12,
            borderWidth: 1,
            borderColor: '#D8CFCF',
            padding: 12,
            alignItems: 'flex-start',
            marginTop: 20,
            backgroundColor: '#ffff',
            width: '80%',
          }}
        >
          <View
            style={{
              paddingTop: 5,
              paddingRight: 10,
              marginRight: 10,
              borderRightWidth: 1,
              borderColor: '#E0E0E0',
              justifyContent: 'center',
            }}
          >
            <Image
              source={require('../assets/image/email.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: '#FEAB5B',
                paddingTop: 1,
              }}
            />
          </View>

          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 12,
                color: '#999',
                marginBottom: 2,
                fontFamily: 'Montserrat-Regular',
              }}
            >
              Your Email
            </Text>
            <TextInput
              style={{
                fontSize: 16,
                color: '#000',
                fontFamily: 'Montserrat-SemiBold',
                padding: 0,
              }}
            />
          </View>
        </View>
        {/* password */}
        <View
          style={{
            flexDirection: 'row',
            borderRadius: 12,
            borderWidth: 1,
            borderColor: '#D8CFCF',
            padding: 12,
            alignItems: 'flex-start',
            marginTop: 20,
            backgroundColor: '#ffff',
            width: '80%',
          }}
        >
          <View
            style={{
              paddingTop: 5,
              paddingRight: 10,
              marginRight: 10,
              borderRightWidth: 1,
              borderColor: '#E0E0E0',
              justifyContent: 'center',
            }}
          >
            <Image
              source={ require('../assets/image/lock.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: '#FEAB5B',
                paddingTop: 1,
              }}
            />
          </View>

          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 12,
                color: '#999',
                marginBottom: 2,
                fontFamily: 'Montserrat-Regular',
              }}
            >
              Your Password
            </Text>
            <TextInput
              secureTextEntry={secureText}
              style={{
                fontSize: 16,
                color: '#000',
                fontFamily: 'Montserrat-SemiBold',
                padding: 0,
              }}
            />
          </View>
          <TouchableOpacity
            onPress={() => setSecureText(!secureText)}
            style={{ justifyContent: 'center', paddingLeft: 8 }}
          >
            <Image
              source={require('../assets/image/Eye.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: '#8B8B8B',
              }}
            />
          </TouchableOpacity>
        </View>
        {/* Forgot password */}
        <TouchableOpacity
          onPress={() => {
            // handle forgot password press
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color: '#0052BB',
              marginTop: 12,
              textAlign: 'center',
              fontFamily: 'Poppins-Regular',
              paddingLeft: 200,
            }}
          >
            Forgot password?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: '#0a59d6',
            borderRadius: 6,
            paddingVertical: 16,
            paddingHorizontal: 24,
            marginTop: 35,
            width: '80%',
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('Home')}
        >
          <View>
            <Text
              style={{
                fontSize: 17,
                color: '#fff',
                fontFamily: 'Montserrat',
                fontWeight: '500',
              }}
            >
              Patient Login {'>'}
            </Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default Login;
