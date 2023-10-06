import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Texto({ children, style }) {
  let styles = styles.regularText;
  
  if(style?.fontWeight === 'bold') {
    styles = styles.boldText;
  }

  return <Text style={[style, styles]}>{ children }</Text>
}

const styles = StyleSheet.create({
  regularText: {
    // fontFamily: 'MontserratRegular',
    fontWeight: 'normal',
  },
  boldText: {
    // fontFamily: 'MontserratBold',
    fontWeight: 'bold',
  }
});