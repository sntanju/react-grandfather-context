import React from 'react';
import Aunt from '../Aunt/Aunt';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';

const GrandFather = (props) => {
    const {house} = props;
    return (
        <div>
            <h2>This is GrandFather</h2>
            <h5>House: {house}</h5>
            <div style={{display:'flex'}}>
            <Father house={house}></Father>
            <Uncle house={house}></Uncle>
            <Aunt house={house}></Aunt>
            </div>
        </div>
    );
};

export default GrandFather;