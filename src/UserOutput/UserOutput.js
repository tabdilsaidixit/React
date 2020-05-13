import React from 'react';

class UserOutput extends React.Component {
    render() {
        return (
            <div>
                <p> User Output Component</p>
                <p> User name is: {this.props.userName}</p>
            </div>
        );
    }
}

export default UserOutput;