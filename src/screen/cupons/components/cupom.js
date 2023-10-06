import React, { useMemo } from "react";
import { TouchableOpacity, Text, View, Image, StyleSheet } from "react-native"
import Stars from "../../../components/stars";

const distanceKm = (distance) => {
    return `${distance} km`;
}

export default function Cupom({ model, brand, image, distance, rating, aoPressionar }) {
    const distanceInfo = useMemo(
        () => distanceKm(distance),
        [distance]
        );

    return <TouchableOpacity
            style={styles.card}
            onPress={aoPressionar}
        >
        <Image source={ image } style={styles.image} accessibilityLabel={ model } />
        <View style={styles.informacoes}>
            <View>
                <Text style={styles.model}>{ model }</Text>
                <Text style={styles.brand}>{ brand }</Text>
                <Stars
                    amount={ rating }
                />
            </View>
            <Text style={styles.distance}>{ distanceInfo }</Text>
            </View>
        </TouchableOpacity>
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#F6F6F6",
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        flexDirection: "row",

        //Android
        elevation: 4,

        //iOS
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    },
    image: {
        width: 200,
        height: 75,
        borderRadius: 10,
        marginVertical: 8,
        marginLeft: 8,
    },
    informacoes: {
        flex: 1,
        justifyContent: "space-between",
        marginLeft: 8,
        marginVertical: 8,
        marginRight: 16,
    },
    model: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: "bold",
    },
    brand: {
        fontSize: 12,
        lineHeight: 18,
        fontWeight: "500",
    },
    mileage: {
        fontSize: 12,
        lineHeight: 19,
    },
});