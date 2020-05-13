import React from 'react';

function UserInput(props) {
    return (
        <div>
            <p> User Input Component</p>
            <input type="text" onChange={props.userNameChangeHandler} value={props.userName} />
        </div>
    );
}

export default UserInput;