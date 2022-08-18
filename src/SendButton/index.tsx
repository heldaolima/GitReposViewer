import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';


export function SendButton(props: TouchableOpacityProps) {
  return (
    <TouchableOpacity style={styles.button} {...props}>
        <Text style={styles.text}>Pesquisar</Text>
    </TouchableOpacity>
  );
}