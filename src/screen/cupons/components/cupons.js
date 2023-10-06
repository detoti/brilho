import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

import Cupom from './cupom';
import Banner from './banner'
import useCupom from '../../../hooks/useCupom';
import useText from '../../../hooks/useText';

export default function Cupons({}) {
    const list = useCupom();
    const { cuponsTitle } = useText();

    const TopList = () => {
        return (
            <>
                <Banner />
                <Text style={styles.title}>{cuponsTitle}</Text>
            </>
        );
    }

    return (
        <FlatList
            data={list}
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
