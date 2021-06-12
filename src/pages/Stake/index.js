import React, { useState } from 'react'
import PageHeader from '../../components/PageHeader';
import StakeRewardAmount from '../../components/StakeRewardAmount';
import GetReward from '../../components/GetReward';
import AmountStake from '../../components/AmountStake';
import './style.scss';

const Stake = () => {
  const [amount, setAmount] = useState('1')
  const [inputVal, setInputVal] = useState('100');
  const [isGetReward, setIsGetReward] = useState(false);
  const [stakeData, setStakeData] = useState([]);

  const amountStakeProps = {
    amount: amount,
    setAmount: setAmount,
    inputVal: inputVal,
    setInputVal: setInputVal,
    setIsGetReward: setIsGetReward,
    setStakeData: setStakeData,
    stakeData: stakeData
  }

  return (
    <div className="stake-section">
      <PageHeader title="Stake" />
      <AmountStake {...amountStakeProps} />
      { isGetReward && <GetReward stakeData={stakeData} /> }
      <StakeRewardAmount amount={amount} />
    </div>
  )
}

export default Stake;