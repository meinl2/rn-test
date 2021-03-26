import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Colors from "../constans/Colors";


const FilledButton = ({title, style, onPress}) => {

    return (
        <TouchableOpacity style={[styles.container,style]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor:Colors.BRAND,
        width: '100%',
        alignItems:'center',
        justifyContent:'center',
        padding:20,
        borderRadius:10
    },
    text:{
        color:'white',
        textTransform:'uppercase',
        fontSize:20
    }
});

export default FilledButton;