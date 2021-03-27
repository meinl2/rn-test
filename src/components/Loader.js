import React from 'react';
import {ActivityIndicator} from 'react-native';
import Colors from "../constans/Colors";


export const Loader = ({style}) => <ActivityIndicator style={style} size="large" color={Colors.BRAND}/>;


