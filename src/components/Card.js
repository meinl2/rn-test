import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import PropTypes from "prop-types";

const Card = ({url}) => {
    return (
        <View style={styles.card}>
            <Image source={{url}} style={styles.cardImage}/>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 0.5,
        paddingHorizontal: 20,
        paddingVertical:70,
        borderRadius: 10,
        shadowRadius: 20,
        shadowColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    cardImage: {
        width: '100%',
        flex: 1,
        resizeMode: 'stretch'
    }
});

Card.propType = {
    url: PropTypes.string.isRequired
};

export default Card;