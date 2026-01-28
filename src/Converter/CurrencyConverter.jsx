import React from 'react'
import "../Styles/CurrencyConverter.css"
import useCurrencyInfo from '../Hooks/CurrencyData'
import { useState } from 'react'

const CurrencyConverter = () => {

    const [currVal, setCurrVal] = useState(0);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("pkr");
    const [result, setResult] = useState(0);

    const convertTheCurrency = () => {
        let toAmount = currData[to];
        let finalVal = currVal * toAmount;
        setResult(Math.floor(finalVal));
    }

    const clearText = () => {
        setResult(0);
        setCurrVal(0)
    }

    const swapData = () => {
        setFrom(to);
        setTo(from);
    }

    const currData = useCurrencyInfo(from);


  return (
    <div className='currBox'>
        <p className='currConvText'>Currency Converter</p>
        <div className='currTextBox'>
            <input className='currTextArea' type="Number" value={currVal} onChange={(e) => 
                setCurrVal(e.target.value)
            } />
        </div>
        <div className='currRes'>
            <p className='res'>Amount is {result}</p>
        </div>
        <div className='optionBox'>
            <p className='optionText'>From</p>
            <select id='fromOpt' className='options' value={from} onChange={(e) => setFrom(e.target.value)} >
                {
                   currData && Object.keys(currData).map((currency) => (
                        <option value={currency} key={currency}>
                            {currency.toUpperCase()}
                        </option>
                    ))
                }
            </select>

            
            <p className='optionText'>To</p>
            <select className='options' value={to} onChange={(e) => setTo(e.target.value)}>
                {
                    currData && Object.keys(currData).map((currency) => (
                        <option key={currency} value={currency}>
                            {currency.toUpperCase()}
                        </option>
                    ))
                }
            </select>
        </div>
        <div className='btnBox'>
            <button className='btns'onClick={clearText}>Clear</button>
            <button className='btns' onClick={convertTheCurrency}>Convert</button>
            <button className='btns' onClick={swapData}>Swap</button>
        </div>
    </div>
  )
}

export default CurrencyConverter