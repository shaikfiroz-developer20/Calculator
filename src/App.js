import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  return (
    <div>
      <Calculator />
    </div>
  );
}

function Calculator() {
  const [inputValue, setInputValue] = useState('');
  const [isCalculatorOn, setIsCalculatorOn] = useState(false);

  useEffect(() => {
    // Parse inputValue to an integer and update the displayed value
    // when inputValue changes
    setDisplayValue(parseInt(inputValue, 10).toString());
  }, [inputValue]);

  // A separate state to manage the displayed value
  const [displayValue, setDisplayValue] = useState('');

  const handleButtonClick = (buttonText) => {
    if (isCalculatorOn) {
      if (buttonText === "++") {
        setInputValue((prevValue) => (parseInt(prevValue, 10) + 1).toString());
      } else if (buttonText === '=') {
        evaluateExpression();
      } else {
        setInputValue((prevValue) => prevValue + buttonText);
      }
    }
  };

  const evaluateExpression = () => {
    try {
      const result = Function(`return ${inputValue}`)();
      setInputValue(result.toString());
    } catch (error) {
      setInputValue('Error');
    }
  };

  const toggleCalculator = () => {
    setIsCalculatorOn(!isCalculatorOn);
    setInputValue('');
  };

  return (
    <div className='calculator'>
      <CalcResult value={displayValue} />
      <div>
        <div className='lineoneout'>
          <div className='in2buttons'>
            <ButtonType1 name='CHECK' onClick={evaluateExpression} />
            <ButtonType1 name='DELETE' onClick={() => setInputValue('')} />
          </div>
          <div className='onac'>
            <ButtonType6  value=')' onClick={() => handleButtonClick(')')} />
            <button className='onof' onClick={toggleCalculator}>
              {isCalculatorOn ? 'OFF' : 'ON'}
            </button>
          </div>
        </div>
        <div className='cutout3'>
          <div className='vertical1'>
            <ButtonType3 value='x²' onClick={() => handleButtonClick('**2')} />
            <ButtonType3 value=' √ ' onClick={() => handleButtonClick('Math.sqrt(')} />
            <ButtonType3 value='x³' onClick={() => handleButtonClick('**3')} />
            <ButtonType3 value=' ∛' onClick={() => handleButtonClick('Math.cbrt(')} />
            <ButtonType3 value='++' onClick={() => handleButtonClick('++')} />
          </div>
          <div className='numsandoperationsout'>
            <div className='numsandoperations'>
              <ButtonType2 value='7' onClick={() => handleButtonClick('7')} />
              <ButtonType2 value='8' onClick={() => handleButtonClick('8')} />
              <ButtonType2 value='9' onClick={() => handleButtonClick('9')} />
              <ButtonType2 value='%' onClick={() => handleButtonClick('%')} />
              <ButtonType2 value='4' onClick={() => handleButtonClick('4')} />
              <ButtonType2 value='5' onClick={() => handleButtonClick('5')} />
              <ButtonType2 value='6' onClick={() => handleButtonClick('6')} />
              <ButtonType2 value='÷' onClick={() => handleButtonClick('/')} />
              <ButtonType2 value='1' onClick={() => handleButtonClick('1')} />
              <ButtonType2 value='2' onClick={() => handleButtonClick('2')} />
              <ButtonType2 value='3' onClick={() => handleButtonClick('3')} />
              <ButtonType2 value='x' onClick={() => handleButtonClick('*')} />
            </div>
            <div className='zeoplusminusequal'>
              <ButtonType2 value='0' onClick={() => handleButtonClick('0')} />
              <ButtonType2 value='00' onClick={() => handleButtonClick('00')} />
              <ButtonType4 value='-' onClick={() => handleButtonClick('-')} />
              <ButtonType2 value='cls' onClick={() => setInputValue('')} />
              <ButtonType2 value='.' onClick={() => handleButtonClick('.')} />
              <ButtonType5 value='+' onClick={() => handleButtonClick('+')} />
              <ButtonType4 value='=' onClick={evaluateExpression} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CalcResult({ value }) {
  function CalcResult(props) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    inputRef.current.setSelectionRange(props.value.length, props.value.length);
  }, [props.value]);

  return (
    <div className='out1'>
      <div className='upone'>
        <b>Calsi</b>  
      </div>
      <div className='downone'>
<input
          type='text'
          id='reverseInput'
          className='textinput'
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
readonly
          ref={inputRef}
        />
      </div>
    </div>
  
}

function ButtonType1(props) {
  return <div><button className='buttontype1' onClick={props.onClick}>{props.name}</button></div>;
}

function ButtonType2(props) {
  return <button className='Buttontype2' onClick={() => props.onClick(props.value)}>{props.value}</button>;
}

function ButtonType3(props) {
  return <button className='Buttontype3' onClick={() => props.onClick(props.value)}>{props.value}</button>;
}

function ButtonType4(props) {
  return <button className='Buttontype4' onClick={() => props.onClick(props.value)}>{props.value}</button>;
}

function ButtonType5(props) {
  return <button className='Buttontype5' onClick={() => props.onClick(props.value)}>{props.value}</button>;
}

function ButtonType6(props) {
  return (<button className='ButtonType6' onClick={() => props.onClick(props.value)}>{props.value}</button>);
}

export default App;
