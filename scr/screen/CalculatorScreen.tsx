import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {BotonCalc} from '../components/BotonCalc';
import {styles} from '../theme/appTheme';

export const CalculatorScreen = () => {
  const [numero, setNumero] = useState('100');
  const [numeroAnterior, setNumeroAnterior] = useState('0');

  const limpiar = () => {
    setNumero('0');
  };

  const armarNumero = (numeroTexto: string) => {
    // No aceptar doble punto
    if (numero.includes('.') && numeroTexto === '.') return;

    if (numero.startsWith('0') || numero.startsWith('-0')) {
      // Punto decimal
      if (numeroTexto === '.') {
        setNumero(numero + numeroTexto);

        // Evaluar si es otro cero, y hay un punto
      } else if (numeroTexto === '0' && numero.includes('.')) {
        setNumero(numero + numeroTexto);

        // Evaluar si es diferente de cero y no tiene un punto
      } else if (numeroTexto !== '0' && !numero.includes('.')) {
        setNumero(numeroTexto);

        // Evitar 0000.0
      } else if (numeroTexto === '0' && !numero.includes('.')) {
        setNumero(numero);
      } else {
        setNumero(numero + numeroTexto);
      }
    } else {
      setNumero(numero + numeroTexto);
    }
  };

  const positivoNegativo = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };

  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoPequeno}>1,500.00</Text>
      <Text
        numberOfLines={1}
        adjustsFontSizeToFit={true}
        style={styles.resultado}>
        {numero}
      </Text>

      <View style={styles.fila}>
        <BotonCalc valor="C" color="#9B9B9B" accion={limpiar} />
        <BotonCalc valor="+/-" color="#9B9B9B" accion={positivoNegativo} />
        <BotonCalc valor="del" color="#9B9B9B" accion={limpiar} />
        <BotonCalc valor="/" color="#FF9427" accion={limpiar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc valor="7" accion={armarNumero} />
        <BotonCalc valor="8" accion={armarNumero} />
        <BotonCalc valor="9" accion={armarNumero} />
        <BotonCalc valor="X" color="#FF9427" accion={limpiar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc valor="4" accion={armarNumero} />
        <BotonCalc valor="5" accion={armarNumero} />
        <BotonCalc valor="6" accion={armarNumero} />
        <BotonCalc valor="-" color="#FF9427" accion={limpiar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc valor="1" accion={armarNumero} />
        <BotonCalc valor="2" accion={armarNumero} />
        <BotonCalc valor="3" accion={armarNumero} />
        <BotonCalc valor="+" color="#FF9427" accion={limpiar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc valor="0" ancho accion={armarNumero} />
        <BotonCalc valor="." accion={armarNumero} />
        <BotonCalc valor="=" color="#FF9427" accion={limpiar} />
      </View>
    </View>
  );
};
