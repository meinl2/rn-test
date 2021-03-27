import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Colors from "../constans/Colors";


const Heading = ({children, props, style}) => {

    return (
        <Text {...props} style={[styles.text, style]}>{children}</Text>
    );
};


const styles = StyleSheet.create({
    text: {
        paddingTop:50,
        paddingBottom:50,
        fontSize: 35,
        textTransform: 'uppercase',
        color: Colors.SECONDARY
    },
});

export default Heading;