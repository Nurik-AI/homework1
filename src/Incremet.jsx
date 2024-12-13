import React from 'react';

const Incremet = ({countIncrement}) => {
    return (
        <div>
            <button onClick={countIncrement}>
      +5
      </button>
        </div>
    );
}

export default Incremet;
