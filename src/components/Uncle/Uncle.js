import React from 'react';

const Uncle = (props) => {
    const {house} = props
    return (
        <div>
            <h2>This is Uncle</h2>
            <p>House: {house}</p>
        </div>
    );
};

export default Uncle;