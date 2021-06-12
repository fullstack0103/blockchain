import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import upArrowImg from '../../assets/img/uparrow.svg';
import './style.scss';

const LiquidityGeneration = () => {
  const [generationAmout, setGenerationAmount] = useState(10);
  const [balanceAmount, setBalanceAmount] = useState(8);
  const [isBalance, setIsBalance] = useState(false);

  return (
    <div className="liquidity-generation-page">
      <PageHeader title="Liquidity generation" />

      {/* liquidity genration section */}
      <div className="liquidity-generation-section">
        <div className="container">
          <div className="shadow-round-block section-content">
            <div className="title-section d-flex justify-content-between flex-wrap">
              <h1>Liquidity generation</h1>
              <h1>10 days remaining</h1>
            </div>

            {/* range section */}
            <RangeBlock amount={generationAmout} setAmount={setGenerationAmount} />

            {/* total price section */}
            <div className="today-price-section d-flex justify-content-between flex-wrap">
              <h1>Today’s price</h1>
              <h1>1 M<span className="gradient-text">AI</span> = 0.01 ETH</h1>
            </div>

            {/* tomorrow priece section */}
            <div className="tomorrow-priece-section d-flex justify-content-between flex-wrap">
              <p className="mb-0">Tomorrow’s price</p>
              <div className="d-flex align-items-center">
                <img src={upArrowImg} alt="upArrow" />
                <span>10%</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Enter amount for liquidity event section */}
      <div className="input-amount-section">
        <div className="container">
          <div className="shadow-round-block">
            <h2 className="title">Enter amount for the liquidity event</h2>
            <p className="description mb-0">This will be the amount of ETH for participating in the liquidity generation event</p>
            <div className="d-flex input-number-section">
              <div className="w-100">
                <input
                  type="number"
                  className="input-num"
                  name="input"
                  defaultValue="100"
                />
              </div>
              <button className="fill-btn" onClick={() => setIsBalance(true)}>Deposit</button>
            </div>
            <p className="rang-limit mb-0">~ 1000 M<span className="gradient-text">AI</span></p>
          </div>
        </div>
      </div>

      {/* balance section */}
      {
        isBalance &&
        <div className="balance-section">
          <div className="container">
            <div className="shadow-round-block">
              <div className="title-section d-flex justify-content-between flex-wrap">
                <h1>Your balance</h1>
                <div>100 ETH ~ 5000 M<span className="gradient-text">AI</span></div>
              </div>
              <RangeBlock amount={balanceAmount} setAmount={setBalanceAmount} />
              <div className="btn-section d-flex justify-content-center flex-wrap">
                <div>
                  <button className="fill-btn">Refund</button>
                </div>
                <div>
                  <button className="disable-btn">Claim</button>
                  <p>available in 10 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

// range block section
const RangeBlock = (props) => {
  const { amount } = props;

  return (
    <div className="range-section">
      <input
        type="range"
        min="0"
        max="14.3"
        step="1"
        defaultValue={amount}
        disabled
        datatype={amount}
        name="range"
        className="range"
        style={{ backgroundImage: `-webkit-gradient(linear, 0% 0%, ${amount === 14 ? 100 : amount / 14.3 * 100}% 50%, color-stop(100%, #5C53D6), color-stop(100%, #F6F6FA))` }}
      />
      <div className="w-100 position-relative percent-unit-section">
        <div style={{ left: '0%' }}><div>0</div></div>
        <div style={{ left: `${100 / 14.3 * 1 + 0.5}%`, zIndex: amount < 1 ? '20' : '5' }}><div className={amount === '1' ? 'selected' : 'unit'}>1<span className="month">&nbsp;day</span></div></div>
        <div style={{ left: `${100 / 14.3 * 2 + 0.5}%`, zIndex: amount < 2 ? '20' : '5' }}><div className={amount === '2' ? 'selected' : 'unit'}>2<span className="month">&nbsp;days</span></div></div>
        <div style={{ left: `${100 / 14.3 * 3 + 0.5}%`, zIndex: amount < 3 ? '20' : '5' }}><div className={amount === '3' ? 'selected' : 'unit'}>3<span className="month">&nbsp;days</span></div></div>
        <div style={{ left: `${100 / 14.3 * 4}%`, zIndex: amount < 4 ? '20' : '5' }}><div className={amount === '4' ? 'selected' : 'unit'}>4<span className="month">&nbsp;days</span></div></div>
        <div style={{ left: `${100 / 14.3 * 5}%`, zIndex: amount < 5 ? '20' : '5' }}><div className={amount === '5' ? 'selected' : 'unit'}>5<span className="month">&nbsp;days</span></div></div>
        <div style={{ left: `${100 / 14.3 * 6}%`, zIndex: amount < 6 ? '20' : '5' }}><div className={amount === '6' ? 'selected' : 'unit'}>6<span className="month">&nbsp;days</span></div></div>
        <div style={{ left: `${100 / 14.3 * 7 - 0.5}%`, zIndex: amount < 7 ? '20' : '5' }}><div className={amount === '7' ? 'selected' : 'unit'}>7<span className="month">&nbsp;days</span></div></div>
        <div style={{ left: `${100 / 14.3 * 8 - 0.5}%`, zIndex: amount < 8 ? '20' : '5' }}><div className={amount === '8' ? 'selected' : 'unit'}>8<span className="month">&nbsp;days</span></div></div>
        <div style={{ left: `${100 / 14.3 * 9 - 0.5}%`, zIndex: amount < 9 ? '20' : '5' }}><div className={amount === '9' ? 'selected' : 'unit'}>9<span className="month">&nbsp;days</span></div></div>
        <div style={{ left: `${100 / 14.3 * 10 - 1}%`, zIndex: amount < 10 ? '20' : '5' }}><div className={amount === '10' ? 'selected' : 'unit'}>10<span className="month">&nbsp;days</span></div></div>
        <div style={{ left: `${100 / 14.3 * 11 - 1}%`, zIndex: amount < 11 ? '20' : '5' }}><div className={amount === '11' ? 'selected' : 'unit'}>11<span className="month">&nbsp;days</span></div></div>
        <div style={{ left: `${100 / 14.3 * 12 - 1}%`, zIndex: amount < 11 ? '20' : '5' }}><div className={amount === '12' ? 'selected' : 'unit'}>12<span className="month">&nbsp;days</span></div></div>
        <div style={{ left: `${100 / 14.3 * 13 - 1}%`, zIndex: amount < 11 ? '20' : '5' }}><div className={amount === '13' ? 'selected' : 'unit'}>13<span className="month">&nbsp;days</span></div></div>
        <div style={{ left: `${97}%`, zIndex: amount < 12 ? '20' : '5' }}><div className={amount === '14' ? 'selected' : 'unit'}>14<span className="month">&nbsp;days</span></div></div>
      </div>
    </div>
  )
}

export default LiquidityGeneration;