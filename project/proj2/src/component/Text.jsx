import React, { Component } from 'react';
import PropTypes from "prop-types";

export function Text({children, color, italic, underline}){
    const style={
        color : color,
        fontStyle : italic? "italic" : "normal",
        textDecoration : underline? "underline" : "none"
    };
    return <sapn style={style}>{children}</sapn>;
};

Text.PropTypes = {
    children : PropTypes.string.isRequired,
    color : PropTypes.string,
    italic : PropTypes.bool,
    underline : PropTypes.bool
};

Text.defaultProps = {
    color :  "black",
    italic : false,
    underline : false
};