import React from 'react';
import './style.scss';

const StakeRewardAmount = (props) => {
  const { amount } = props;

  return (
    <div className="average-reward-section">
      <div className="container">
        <div className="shadow-round-block">
          <div className="d-flex align-items-center justify-content-between flex-wrap">
            <div className="title-section">
              <h2>Average stake reward amount</h2>
              <p className="gradient-text mb-0">For {amount} months</p>
            </div>
            <div className="percent">
              10%
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StakeRewardAmount;