import React from 'react';
import {Text, View} from 'react-native';
import {BotonCalc} from '../components/BotonCalc';
import {styles} from '../theme/appTheme';

export const CalculatorScreen = () => {
  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoPequeno}>1,500.00</Text>
      <Text style={styles.resultado}>1,500.00</Text>

      <View style={styles.fila}>
        <BotonCalc valor="C" color="#9B9B9B" />
        <BotonCalc valor="+/-" color="#9B9B9B" />
        <BotonCalc valor="del" color="#9B9B9B" />
        <BotonCalc valor="/" color="#FF9427" />
      </View>
      <View style={styles.fila}>
        <BotonCalc valor="7" />
        <BotonCalc valor="8" />
        <BotonCalc valor="9" />
        <BotonCalc valor="X" color="#FF9427" />
      </View>
      <View style={styles.fila}>
        <BotonCalc valor="4" />
        <BotonCalc valor="5" />
        <BotonCalc valor="6" />
        <BotonCalc valor="-" color="#FF9427" />
      </View>
      <View style={styles.fila}>
        <BotonCalc valor="1" />
        <BotonCalc valor="2" />
        <BotonCalc valor="3" />
        <BotonCalc valor="+" color="#FF9427" />
      </View>
      <View style={styles.fila}>
        <BotonCalc valor="0" ancho />
        <BotonCalc valor="." />
        <BotonCalc valor="=" color="#FF9427" />
      </View>
    </View>
  );
};
