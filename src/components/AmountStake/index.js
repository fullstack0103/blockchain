import React from 'react';
import './style.scss';

const AmountStake = (props) => {
  const { amount, setAmount, inputVal, setInputVal, setIsGetReward, stakeData, setStakeData } = props;

  /****** inptut value change ******/
  const handleChange = (evt) => {
    let name = evt.target.name;
    if (name === "range") {
      if(evt.target.value === '0') setAmount(1)
      else setAmount(evt.target.value);
    } else {
      setInputVal(evt.target.value);
    }
  }

  /****** add stakeData ******/
  const addStakeData = () => {
    if (amount === '') return;
    const _stakeData = [...stakeData]
    const item = {};
    item['date'] = amount;
    item['price'] = inputVal;
    _stakeData.push(item);
    setStakeData(_stakeData)
    setIsGetReward(true);
  }

  return (
    <div className="amount-stake-section">
      <div className="container">
        <div className="content shadow-round-block">
          <h3 className="title">Enter amount for stake</h3>
          <p className="description mb-0">This will be the starting price of your Set in USD once it’s been created. </p>
          <div className="d-flex input-number-section">
            <div className="w-100">
              <input
                type="number"
                className="input-num"
                value={inputVal}
                onChange={handleChange}
                name="input"
              />
            </div>
            <button className="fill-btn" onClick={addStakeData}>Stake</button>
          </div>
          <div className="range-section">
            <input
              type="range"
              min="0"
              max="12.2"
              step="1"
              name="range"
              className="range"
              value={amount}
              datatype={amount}
              onChange={handleChange}
              style={{ backgroundImage: `-webkit-gradient(linear, 0% 0%, ${amount === '12' ? 100 : amount/12.2 * 100}% 50%, color-stop(100%, #5C53D6), color-stop(100%, #F6F6FA))` }}
            />
            <div className="w-100 position-relative percent-unit-section d-flex">
              <div style={{ left: '0%' }}><div>0</div></div>
              <div style={{ left: `${100 / 12.2 * 1 + 1}%`, zIndex: amount < 1 ? '20' : '5' }}><div className={amount==='1' ? 'selected' : 'unit'} onClick={() => setAmount('1')}>1<span className="month">&nbsp;month</span></div></div>
              <div style={{ left: `${100 / 12.2 * 2 + 0.5}%`, zIndex: amount < 2 ? '20' : '5' }}><div className={amount==='2' ? 'selected' : 'unit'} onClick={() => setAmount('2')}>2<span className="month">&nbsp;months</span></div></div>
              <div style={{ left: `${100 / 12.2 * 3}%`, zIndex: amount < 3 ? '20' : '5' }}><div className={amount==='3' ? 'selected' : 'unit'} onClick={() => setAmount('3')}>3<span className="month">&nbsp;months</span></div></div>
              <div style={{ left: `${100 / 12.2 * 4}%`, zIndex: amount < 4 ? '20' : '5' }}><div className={amount==='4' ? 'selected' : 'unit'} onClick={() => setAmount('4')}>4<span className="month">&nbsp;months</span></div></div>
              <div style={{ left: `${100 / 12.2 * 5}%`, zIndex: amount < 5 ? '20' : '5' }}><div className={amount==='5' ? 'selected' : 'unit'} onClick={() => setAmount('5')}>5<span className="month">&nbsp;months</span></div></div>
              <div style={{ left: `${100 / 12.2 * 6}%`, zIndex: amount < 6 ? '20' : '5' }}><div className={amount==='6' ? 'selected' : 'unit'} onClick={() => setAmount('6')}>6<span className="month">&nbsp;months</span></div></div>
              <div style={{ left: `${100 / 12.2 * 7 - 1}%`, zIndex: amount < 7 ? '20' : '5' }}><div className={amount==='7' ? 'selected' : 'unit'} onClick={() => setAmount('7')}>7<span className="month">&nbsp;months</span></div></div>
              <div style={{ left: `${100 / 12.2 * 8 - 1}%`, zIndex: amount < 8 ? '20' : '5' }}><div className={amount==='8' ? 'selected' : 'unit'} onClick={() => setAmount('8')}>8<span className="month">&nbsp;months</span></div></div>
              <div style={{ left: `${100 / 12.2 * 9 - 1}%`, zIndex: amount < 9 ? '20' : '5' }}><div className={amount==='9' ? 'selected' : 'unit'} onClick={() => setAmount('9')}>9<span className="month">&nbsp;months</span></div></div>
              <div style={{ left: `${100 / 12.2 * 10 - 1}%`, zIndex: amount < 10 ? '20' : '5' }}><div className={amount==='10' ? 'selected' : 'unit'} onClick={() => setAmount('10')}>10<span className="month">&nbsp;months</span></div></div>
              <div style={{ left: `${100 / 12.2 * 11 - 1}%`, zIndex: amount < 11 ? '20' : '5' }}><div className={amount==='11' ? 'selected' : 'unit'} onClick={() => setAmount('11')}>11<span className="month">&nbsp;months</span></div></div>
              <div style={{ left: `${97}%`, zIndex: amount < 12 ? '20' : '5' }}><div className={amount==='12' ? 'selected' : 'unit'} onClick={() => setAmount('12')}>12<span className="month">&nbsp;months</span></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AmountStake;