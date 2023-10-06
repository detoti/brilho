import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

import star from "../assets/star.png";
import starGray from "../assets/starGray.png";

export default function Star({
    onPress,
    disabled = true,
    filled,
    big = false,
}) {
    const styles = stylesFunc(big);
    const getImagem = () => {
        if ( filled ) {
            return star;
        }
        return starGray;
    }

    return <TouchableOpacity 
        onPress={ onPress }
        disabled={ disabled }
    >
    <Image source={getImagem()} style={styles.star} />
</TouchableOpacity>
}

const stylesFunc = (big) => StyleSheet.create({
    star: {
        width: big ? 36 : 12,
        height: big ? 36 : 12,
        marginRight: 2,
    },
});