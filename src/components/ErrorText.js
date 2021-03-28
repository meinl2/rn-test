import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Colors from "../constans/Colors";
import PropTypes from "prop-types";

const ErrorText = ({error}) => <Text style={styles.text}>{error}</Text>;

const styles = StyleSheet.create({
    text: {
        color: Colors.ERROR,
        marginTop: 10
    }
});

ErrorText.propType = {
    error: PropTypes.string
};

ErrorText.defaultProps = {
    error: 'Something went wrong :('
};


export default ErrorText;