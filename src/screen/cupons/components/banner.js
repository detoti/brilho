import React from "react";
import { Text, View, StyleSheet } from 'react-native';

import { loadBanner } from "../../../services/loadData";

class Banner extends React.Component {
    state = {
        banner: {
            welcome: '',
            subTitle: '',
        }
    }

    updateBanner() {
        const retorno = loadBanner();
        this.setState({ banner: retorno })
    }

    componentDidMount() {
        this.updateBanner();
    }

    render () {
        return <View style={styles.banner}>
        <Text style={styles.welcome}>{ this.state.banner.welcome }</Text>
        <Text style={styles.subTitle}>{ this.state.banner.subTitle }</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    banner: {
        backgroundColor: "#F6F6F6",
        padding: 16,
    },
    image: {
        width: 70,
        height: 28,
    },
    welcome: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
        color: "#464646",
    },
    subTitle: {
        fontSize: 16,
        lineHeight: 26,
        color: "#A3A3A3",
    },
});

export default Banner;