import React, { useState } from 'react'
import './Calculator.css';

const Calculator = () => {
    const[result, setResult]=useState("");
    const handleClick = (event) => {
        setResult(result.toString().concat(event.target.value));
    };
    const handleClear=()=>{
        setResult("");

    }
    const handleCalculate=()=>{
        setResult(eval(result))
    }
    

  return (
    <div className='calc'>
    <h1>Calculator</h1>
   
        <div className='calculator'>
            <input type='text' placeholder='0'id='answer' value={result}/>
            <input type='button' value={'9'} className='button' onClick={handleClick}/>
            <input type='button' value={'8'} className='button' onClick={handleClick}/>
            <input type='button' value={'7'} className='button' onClick={handleClick}/>
            <input type='button' value={'6'} className='button' onClick={handleClick}/>
            <input type='button' value={'5'} className='button' onClick={handleClick}/>
            <input type='button' value={'4'} className='button' onClick={handleClick}/>
            <input type='button' value={'3'} className='button' onClick={handleClick}/>
            <input type='button' value={'2'} className='button' onClick={handleClick}/>
            <input type='button' value={'1'} className='button' onClick={handleClick}/>
            <input type='button' value={'0'} className='button' onClick={handleClick}/>
            <input type='button' value={'.'} className='button' onClick={handleClick}/>
            <input type='button' value={'+'} className='button' onClick={handleClick}/>
            <input type='button' value={'-'} className='button' onClick={handleClick}/>
            <input type='button' value={'*'} className='button' onClick={handleClick}/>
            <input type='button' value={'/'} className='button' onClick={handleClick}/>
            <input type='button' value={'%'} className='button' onClick={handleClick}/>
            <input type='button' value={'AC'} className='button button1'onClick={handleClear}/>
            <input type='button' value={'='} className='button button1' onClick={handleCalculate}/>
        </div>
        </div>
  )
}

export default Calculator