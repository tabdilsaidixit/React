import React from 'react';

const UserOutput = (props) => {
    return (
        <div>
            <p> User Output Component</p>
            <p> User name is: {props.userName}</p>
        </div>
    );
}

export default UserOutput;