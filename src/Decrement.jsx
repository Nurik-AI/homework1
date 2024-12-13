import React from 'react';

const Decrement = ({countDecrement}) => {
    return (
        <div>
            <button onClick={countDecrement}>
      -5
      </button>
        </div>
    );
}

export default Decrement;
