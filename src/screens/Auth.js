import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Input from "../components/Input";
import Heading from "../components/Heading";
import FilledButton from "../components/FilledButton";
import ErrorText from "../components/ErrorText";
import {userSchema} from "../Validations/UserValidation";

const Auth = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(true);


    const login = async () => {
        let form = {
            email,
            // password
        };
        const isValid = await userSchema.isValid(form);
        setIsValid(isValid);
        isValid && navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <Heading style={styles.heading}>login</Heading>
            <Input icon={'user'}  value={email} setValue={setEmail} placeholder="E-mail" keyboardType="email-address" />
            {!isValid && <ErrorText error={'Invalid email'}/>}
            <FilledButton onPress={login} style={styles.button} title="login"/>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        paddingHorizontal:25,
        flex:1,
        paddingTop:150,
        alignItems:'center'
    },
    heading: {
        paddingBottom:150,
        textTransform:'uppercase'
    },
    button:{
        marginTop:20
    }
});

export default Auth;