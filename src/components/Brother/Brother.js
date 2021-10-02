import React from 'react';

const Brother = (props) => {
    const {house} = props;
    return (
        <div>
            <h2>This is Brother</h2>
            <small>House: {house}</small>
        </div>
    );
};

export default Brother;