import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

const Card = ({url} ) => {

    return (
        <View style={styles.card}>
            <Image source={{url}} style={styles.cardImage}/>
        </View>
    );
};


const styles = StyleSheet.create({
    card: {
        flex:0.5,
        padding:20,
        borderRadius:10,
        shadowRadius:20,
        shadowColor:'#000',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ffffff'
    },
    cardImage: {
        width:'100%',
        flex:1,
        resizeMode:'stretch'
    }
});


export default Card;