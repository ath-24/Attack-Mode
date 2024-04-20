

import React from 'react';
import {
  View, Text, Image

} from 'react-native';



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
      <Image source={require('./assets/logo.png')} style={{
        height: 233,
        // width: 200,
        // alignSelf: 'center',
        // marginTop: '100',
        // flex: 1,
        // position: 'absolute',
      }} />

    </View>

  );
};



export default App;
