import { useState } from "react";
import GetCurrency from "./hooks/GetCurrency";
import InputBox from "./components/InputBox";

function App() {
  const [amount,setAmount] = useState(0)
  const [fromCurrency,setFromCurrency] = useState('inr')
  const [toCurrency,setToCurrency] = useState('usd')
  const [convertedAmount,setConvertedAmount] = useState(0)

  const currencyInfo = GetCurrency(fromCurrency)
  console.log(currencyInfo)

  const options = Object.keys(currencyInfo);
  console.log(currencyInfo)

  const swap = ()=>{
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
    const temp = amount
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

const convert=()=>{
  setConvertedAmount(amount*currencyInfo[toCurrency])
}

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundColor:'green'
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                onAmountChange={(amount)=>setAmount(amount)}
                onCurrencyChange={(currency)=>setFromCurrency(currency)}
                currencyOptions={options}
                selectCurrency={fromCurrency}
        
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                onAmountChange={(amount)=>setConvertedAmount(amount)}
                onCurrencyChange={(currency)=>setToCurrency(currency)}
                currencyOptions={options}
                selectCurrency={toCurrency}
                disableAmount={true}
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;