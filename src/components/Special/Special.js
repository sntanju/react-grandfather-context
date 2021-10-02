import React, { useContext } from 'react';
import { RingContext } from '../../App';

const Special = (props) => {

    const {ornaments, house} = useContext(RingContext);
    console.log(ornaments);

    return (
        <div>
            <h2>This is Special</h2>   
            <p>{ornaments}</p>  
            <p>{house}</p>
        </div>
    );
};

export default Special;