import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FilledButton from "../components/FilledButton";
import Heading from "../components/Heading";
import Colors from "../constans/Colors";

const TotalScreen = ({navigation, route}) => {
    const {countSwipedRight, countSwipedLeft, gameOver} = route.params;

    const onPressMore = () => {
        navigation.navigate('Swiper');
    };

    const onPressSingOut = () => {
        navigation.navigate('Auth');
    };

    return (
        <View style={styles.container}>
            <Heading style={styles.heading}>Total</Heading>
            <Text style={[styles.totalText, styles.like]}>Like: {countSwipedRight}</Text>
            <Text style={[styles.totalText, styles.dislike]}>Dislike: {countSwipedLeft}</Text>

            {!gameOver && <FilledButton style={{marginTop: 20}} title='more' onPress={onPressMore}/>}
            <FilledButton style={{marginTop: 20}} title='Sing Out' onPress={onPressSingOut}/>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 25,
        flex: 0.8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    totalText: {
        fontSize: 40,
        textTransform: 'uppercase'
    },
    like: {
        color: Colors.SUCCESS
    },
    dislike: {
        color: Colors.ERROR
    }
});

export default TotalScreen;