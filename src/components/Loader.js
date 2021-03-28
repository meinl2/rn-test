import React from 'react';
import {ActivityIndicator} from 'react-native';
import PropTypes from "prop-types";

export const Loader = ({style, color}) => <ActivityIndicator style={style} size="large" color={color}/>;

Loader.propType = {
    color: PropTypes.string
};






