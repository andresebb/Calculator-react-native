import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {CalculatorScreen} from './scr/screen/CalculatorScreen';
import {styles} from './scr/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar backgroundColor="black" />
      <CalculatorScreen />
    </SafeAreaView>
  );
};

export default App;
