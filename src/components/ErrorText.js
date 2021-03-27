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


ErrorText.propType = {
    error: PropTypes.string
};

ErrorText.defaultProps = {
    error: 'Something went wrong ^('
};

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        color: Colors.ERROR
    },
    container: {
        marginTop: 10,
        height: 20
    }
});


export default ErrorText;