import React from 'react';
import {ActivityIndicator} from 'react-native';
import PropTypes from "prop-types";
import ErrorText from "./ErrorText";


export const Loader = ({style, color}) => <ActivityIndicator style={style} size="large" color={color}/>;

ErrorText.propType = {
    color: PropTypes.string
};






