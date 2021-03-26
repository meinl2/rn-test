import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Heading from "../components/Heading";


const Home = ({navigation}) => {

    return (
        <View style={styles.container}>
            <Heading style={styles.heading}>Home</Heading>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        paddingHorizontal:25,
        flex:1,
        paddingTop:50,
        alignItems:'center'
    },
    heading: {
        paddingBottom:150,
        textTransform:'uppercase'
    },

});

export default Home;