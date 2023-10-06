import React from 'react';
import { Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

import Texto from './Texto';
import Gradiente from '../assets/gradiente.svg';
import BANNER from '../assets/BANNER.png';
import VoltarSVG from '../assets/voltar.svg';

const widthSize = Dimensions.get('screen').width;
const ALTURA_PADRAO = 270;

export default function Topo({ title, image = BANNER, heightSize = ALTURA_PADRAO }) {
  const styles = styleFunc(heightSize);
  return <>
    <Image source={image} style={styles.banner} />
    <Gradiente width={widthSize} height={130 / 360 * widthSize} style={styles.gradiente}/>
    <Texto style={styles.title}>{ title }</Texto>
    <TouchableOpacity 
      onPress={() => {}}
      style={styles.botaoVoltar}>
      <VoltarSVG color='white' style={styles.voltar} />
    </TouchableOpacity>
  </>
}

const styleFunc = (heightSize) => StyleSheet.create({
  banner: {
    width: "100%",
    height: heightSize,
  },
  gradiente: {
    position: 'absolute',
  },
  title: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    color: "white",
    fontWeight: "bold",
    padding: 16,
  },
  botaoVoltar: {
    position: 'absolute',
    padding: 17,
  },
  voltar: {
    width: 24,
    height: 24,
  },
});