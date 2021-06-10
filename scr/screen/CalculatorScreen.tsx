import React from 'react';
import {Text, View} from 'react-native';
import {BotonCalc} from '../components/BotonCalc';
import {styles} from '../theme/appTheme';
import {useCalculadora} from '../hooks/useCalculadora';

export const CalculatorScreen = () => {
  const {
    numero,
    numeroAnterior,
    calcular,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    limpiar,
    positivoNegativo,
    borrarUltimoNumero,
    armarNumero,
  } = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      )}

      <Text
        numberOfLines={1}
        adjustsFontSizeToFit={true}
        style={styles.resultado}>
        {numero}
      </Text>

      <View style={styles.fila}>
        <BotonCalc valor="C" color="#9B9B9B" accion={limpiar} />
        <BotonCalc valor="+/-" color="#9B9B9B" accion={positivoNegativo} />
        <BotonCalc valor="del" color="#9B9B9B" accion={borrarUltimoNumero} />
        <BotonCalc valor="/" color="#FF9427" accion={btnDividir} />
      </View>
      <View style={styles.fila}>
        <BotonCalc valor="7" accion={armarNumero} />
        <BotonCalc valor="8" accion={armarNumero} />
        <BotonCalc valor="9" accion={armarNumero} />
        <BotonCalc valor="X" color="#FF9427" accion={btnMultiplicar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc valor="4" accion={armarNumero} />
        <BotonCalc valor="5" accion={armarNumero} />
        <BotonCalc valor="6" accion={armarNumero} />
        <BotonCalc valor="-" color="#FF9427" accion={btnRestar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc valor="1" accion={armarNumero} />
        <BotonCalc valor="2" accion={armarNumero} />
        <BotonCalc valor="3" accion={armarNumero} />
        <BotonCalc valor="+" color="#FF9427" accion={btnSumar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc valor="0" ancho accion={armarNumero} />
        <BotonCalc valor="." accion={armarNumero} />
        <BotonCalc valor="=" color="#FF9427" accion={calcular} />
      </View>
    </View>
  );
};
