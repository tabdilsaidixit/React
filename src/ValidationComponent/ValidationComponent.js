import React from 'react';
const ValidationComponent = (props) => {

    let component = null;
    component = (props.userName.length < 5) ? <p> Too short Input </p> : null;
    component = (props.userName.length > 10) ? <p> Too Long Input </p> : component;
    return component;
}

export default ValidationComponent;