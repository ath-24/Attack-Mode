

import React from 'react';
import {
  View, Text,Image

} from 'react-native';

import {

} from 'react-native/Libraries/NewAppScreen';



const App = () => {


  return (
    <View style={{
      backgroundColor: 'black',
      height: '100%',
    }}>
      <Image source={require('./assets/bg.png')} style={{
        width: '100%',
        height: '70%',
      }} />

    </View>
    
  );
};



export default App;
