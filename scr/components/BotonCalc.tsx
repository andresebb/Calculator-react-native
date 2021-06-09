import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Boton {
  valor: string;
  color?: string;
  ancho?: boolean;
}

export const BotonCalc = ({color = '#2B2B2B', valor, ancho = false}: Boton) => {
  return (
    <View
      style={{
        ...styles.boton,
        backgroundColor: color,
        width: ancho ? 180 : 80,
      }}>
      <Text
        style={{
          ...styles.botonTexto,
          color: color === '#9B9B9B' ? 'black' : 'white',
        }}>
        {valor}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  boton: {
    width: 80,
    height: 80,
    backgroundColor: '#2D2D2D',
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  botonTexto: {
    textAlign: 'center',
    padding: 10,
    color: 'white',
    fontSize: 30,
  },
});
