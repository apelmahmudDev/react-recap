import React from 'react';

const Numbers = () => { 

    const numbers = [1, 3,4 ,5, 6, 7, 8,8];

    return (
        <div>
            <h1>Hello Numbers</h1>
            <ul>
                {numbers.map(num => <li>{num}</li>)}
            </ul>
        </div>
    );
};

export default Numbers;