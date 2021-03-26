import React from 'react';
import { StyleSheet, Text,View } from 'react-native';
import Colors from "../constans/Colors";



const ErrorText = ({error}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{error}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    text: {
        fontSize:14,
        color:Colors.ERROR
    },
    container: {
        marginTop:10,
        height:20
    }
});

export default ErrorText;