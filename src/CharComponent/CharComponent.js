import React from 'react';
import './CharComponent.css';

function CharComponent(props){
    let component = (<div className = "CharComponent" onClick={props.clickHandler}>
        <p >{props.symbol}</p>

    </div>);

    return component;

}

export default CharComponent;