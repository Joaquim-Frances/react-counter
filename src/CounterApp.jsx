import React, { useState } from 'react';
import PropTypes from "prop-types";


const CounterApp = ({value = 0}) =>{

    const [ counter, setCounter ]  = useState( 0 );

    const handleAdd = ()=> setCounter( counter + 1);

    const handleReset = ()=>  setCounter( value );

    const handleSubstract = ()=> setCounter( counter - 1 );
      
    return( 
            <div>
                <h1>Counter App</h1>
                <h2> { counter }</h2>
                <button onClick= { handleAdd } >+1</button>
                <button onClick= { handleReset } >Reset</button>
                <button onClick= { handleSubstract } >-1</button>
            </div>
        )

}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
};

export default CounterApp;