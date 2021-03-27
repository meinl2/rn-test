import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";
import Colors from "../constans/Colors";
import PropTypes from 'prop-types';

const Input = ({style, placeholder, value, setValue, keyboardType, secureTextEntry, icon}) => {

    return (
        <View style={styles.container}>
            <Icon style={styles.icon} name={icon} size={26} color={Colors.SECONDARY} solid/>
            <TextInput
                style={[styles.textInput, style]}
                placeholder={placeholder}
                placeholderTextColor={Colors.SECONDARY}
                value={value}
                onChangeText={text => setValue(text)}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderBottomWidth: 1,
        borderBottomColor: Colors.SECONDARY
    },
    textInput: {
        width: '90%',
        height: 50,
        fontSize: 26,
        color: Colors.SECONDARY
    },
    icon: {
        width: '10%',
        marginRight: 10
    }
});

Input.propType = {
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
    keyboardType: PropTypes.oneOf(["default", "number-pad", "decimal-pad", "numeric", "email-address", "phone-pad"]),
    secureTextEntry: PropTypes.bool,
    placeholderTextColor: PropTypes.string,
    icon: PropTypes.string.isRequired
};

Input.defaultProps = {
    placeholder: '',
    keyboardType: 'default',
    secureTextEntry: false
};
export default Input;