import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from "../constans/Colors";
import PropTypes from "prop-types";

const ErrorText = ({error}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{error}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Colors.ERROR
    },
    container: {
        marginTop: 10,
        height: 20
    }
});

ErrorText.propType = {
    error: PropTypes.string
};

ErrorText.defaultProps = {
    error: 'Something went wrong :('
};


export default ErrorText;