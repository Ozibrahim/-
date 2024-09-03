import React, { useState } from 'react'
import '../css/Currency.css'
import { PiArrowFatRight } from "react-icons/pi";
import axios from 'axios';

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest"
let API_KEY = "fca_live_WWPGtf5Z3bZdNNES829D92wGnf4VXyiGZQBxsKW3"


function Currency() {

    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('TRY');
    const [result, setResult] = useState(0);
    const exchange= async()=>{
        // console.log(amount)
        // console.log(fromCurrency)
        // console.log(toCurrency)
        // console.log(result)
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
        const result =(response.data.data[toCurrency]*amount).toFixed(2);
        setResult(result)
    }



    return (
        <div className='currency-div'>
            <div className='currency-head'>
                <h3>Döviz Kuru Uygulaması</h3>
            </div>
            <div className='currency-calculate'>
                <input type="number" className='amount' value={amount} onChange={(e)=>setAmount(e.target.value)} />
                <select onChange={(e)=>setFromCurrency(e.target.value)} className='from-currency-option'>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>
                </select>

                <PiArrowFatRight style={{ fontSize: '50px', color: 'fff', marginRight: '10px' }} />

                <select onChange={(e)=>setToCurrency(e.target.value)} className='to-currency-option'>
                    <option>TRY</option>
                    <option>USD</option>
                    <option>EUR</option>
                </select>
                <input value={result} onChange={(e)=>setResult(e.target.value)} type="number" className='result' />

            </div>
            <div>
                <button onClick={exchange} className='exchange-btn'>Çevir</button>
            </div>

        </div>
    )
}

export default Currency