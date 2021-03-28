import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Input from "../components/Input";
import Heading from "../components/Heading";
import FilledButton from "../components/FilledButton";
import ErrorText from "../components/ErrorText";
import {userSchema} from "../validations/UserValidation";

const AuthScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(true);

    const formValidation = async () => {
        let form = {
            email,
            // password
        };
        const isValid = await userSchema.isValid(form);
        setIsValid(isValid);
        isValid && goToSwiper();
    };

    const goToSwiper = () => {
        navigation.navigate('Swiper');
    };

    return (
        <View style={styles.container}>
            <Heading style={styles.heading}>Sign in</Heading>
            <Input icon={'user'} value={email} setValue={setEmail} placeholder="E-mail" keyboardType="email-address"/>
            {!isValid && <ErrorText error={'Invalid email address'}/>}
            <FilledButton onPress={formValidation} style={styles.button} title="Sign in"/>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 25,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        marginTop: 50
    }
});

export default AuthScreen;