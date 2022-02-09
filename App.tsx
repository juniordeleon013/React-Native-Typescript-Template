
import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { MyAppNavigation } from './src/navigation/AppNavigation';


const App = () => {

  return (
    <View style={{ flex: 1 }}>
      <MyAppNavigation />
    </View>
  );
};

export default App;
