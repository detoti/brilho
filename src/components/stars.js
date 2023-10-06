import React, { useState } from "react";
import { View , StyleSheet } from "react-native";
import Star from "./star";

export default function Stars({
    amount: initialAmount,
    editable = false,
    big = false,
}) {
    const [ amount, setQuantidade ] = useState(initialAmount);

    const RenderEstrelas = () => {
        const starList = [];
        for (let i = 0; i < 5; i++) {
            starList.push(
                <Star
                key={i}
                onPress={() => setQuantidade(i + 1)}
                disabled={!editable}
                filled={i < amount}
                big={big}
                />
            );
        }
        return starList;
    }
    return <View style={styles.stars}>
        <RenderEstrelas />
        </View>
}

const styles = StyleSheet.create({
    stars: {
        flexDirection: "row",
    },
});