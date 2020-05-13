import React from 'react';
import './UserInput.css';
function UserInput(props) {
    return (
        <div className="UserInput">
            <p> User Input Component</p>
            <input type="text" onChange={props.userNameChangeHandler} value={props.userName} />
        </div>
    );
}

export default UserInput;