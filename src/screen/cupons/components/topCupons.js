import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

import Cupom from './cupom';
import Banner from './banner';
import useCupons from '../../../hooks/useCupom';
import useText from '../../../hooks/useText';

export default function TopCuponsScreen() {
    const list = useCupons();

    // Ordenar a lista pelo campo 'condition' em ordem decrescente
    const sortedList = [...list].sort((cupom1, cupom2) => cupom2.rating - cupom1.rating);

    // Pegar apenas os 3 melhores cupons
    const top3Cars = sortedList.slice(0, 3);

    const { cupomTitle } = useText();

    const TopList = () => {
        return (
            <>
                <Banner />
                <Text style={styles.title}>{cupomTitle}</Text>
            </>
        );
    }

    return (
        <FlatList
            data={top3Cars}
            renderItem={({ item }) => (
                <Cupom {...item} aoPressionar={() => {}} />
            )}
            keyExtractor={({ model }) => model}
            ListHeaderComponent={TopList}
            style={styles.list}
        />
    );
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#464646',
    }
});