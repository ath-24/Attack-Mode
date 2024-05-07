import React from 'react';
import {
  View, Text, Image

} from 'react-native';

const LandingScreen= () => {

  return (
      <View style={{
        backgroundColor: 'black',
        height: '100%',
      }}>
        <Image source={require('./../assets/bg.png')} style={{       /* yahaan (./../assets/bg.png)yeh path mere lappy mei chl gya, tere mei (./assets/bg.png) yeh lga le yaad se, varna error ayega */
          width: '100%',
          height: '80%',
        }} />
        <Image source={require('./../assets/logo.png')} style={{
          height: 233,
          width: 200,
          alignSelf: 'center',
          // marginTop: '100',
          marginTop: 100,
          flex: 1,
          position: 'absolute',
        }} />
        <Text style={{
        color:'#FFFFFF', 
        fontSize:18,
        
      }}
        >
        Effortlessly Manage Your Tasks: Add, Edit, and Track Progress Seamlessly on the Go.
        </Text>
      </View>
  
    );
  };
export default LandingScreen;