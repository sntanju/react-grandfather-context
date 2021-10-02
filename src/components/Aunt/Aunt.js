import React, { useContext } from 'react';
import { RingContext } from '../../App';

const Aunt = () => {
   
    const { ornaments, house }= useContext(RingContext);
    return (
        <div>
            <h2>This is Aunt</h2>
            <p>House: {house}</p>
            <p>{ornaments}</p>
        </div>
    );
};

export default Aunt;