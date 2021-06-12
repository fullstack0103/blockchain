import React from 'react';
import './style.scss';

const GetReward = (props) => {
  const { stakeData } = props;

  return (
    <div className="get-reward-section">
      <div className="container">
        <div className="content shadow-round-block">
          <h3 className="title">Get your reward in</h3>
          {
            stakeData && stakeData.length > 0 && stakeData.map((item, i) => (
              <div className="row" key={i}>
                <div className="col-md-6 time-section">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center flex-column">
                      <div className="date">{item['date']}</div>
                      <div className="date-unit">MONTHS</div>
                    </div>
                    <div className="d-flex align-items-center flex-column">
                      <div className="date">0</div>
                      <div className="date-unit">DAYS</div>
                    </div>
                    <div className="d-flex align-items-center flex-column">
                      <div className="date">0</div>
                      <div className="date-unit">HOURS</div>
                    </div>
                    <div className="d-flex align-items-center flex-column">
                      <div className="date">0</div>
                      <div className="date-unit">MINUTES</div>
                    </div>
                  </div>
                  <div className="w-100 percent-bar-section">
                    <div className="percent-bar h-100" style={{ width: `${parseInt(item['date'])/12 * 100}%` }}></div>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-center  btn-section">
                  <div className="cover-section d-flex align-items-center justify-content-center">
                    <p className="text-center">{item['price']} M<span className="gradient-text">AI</span></p>
                    <button className="disable-btn">Claim</button>
                  </div>
                </div>
              </div>
            ))
          }

        </div>
      </div>
    </div>
  )
}

export default GetReward;