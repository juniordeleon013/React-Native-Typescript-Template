
import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { MyAppNavigation } from './src/navigation/AppNavigation';
import { AuthState } from './src/domain/authcontext/AuthContext';


const App = () => {

  return (
    <View style={{ flex: 1 }}>
      <AuthState>
        <MyAppNavigation />
      </AuthState>
    </View>
  );
};

export default App;
