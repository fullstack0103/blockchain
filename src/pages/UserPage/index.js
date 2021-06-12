import React from 'react';
// import uparrowImg from '../../assets/img/uparrow.svg';
import downarrowImg from '../../assets/img/downarrow.svg'
import './style.scss';

const UserPage = () => {
  return (
    <div className="user-page-section">
      <div className="head-content">
        <div className="container">
          <div className="total-balance-section shadow-round-block">
            <div className="d-flex align-items-center justify-content-between flex-wrap">
              <div>
                <h1>$0.00</h1>
                <p className="mb-0">My total index balance</p>
              </div>
              <div className="d-flex flex-wrap">
                <button className="white-btn">Receive</button>
                <button className="white-btn">Send</button>
              </div>
            </div>
            <p></p>
          </div>
          <h2 className="title">Welcome to Metaindex!</h2>
          <p className="description">Start here if you’re looking for a simple way to get started.</p>
          <div className="shadow-round-block table-section">
            <table>
              <thead>
                <tr>
                  <th>Indexes</th>
                  <th>Change (24 HR)</th>
                  <th>Balance</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <img src="https://set-core.s3.amazonaws.com/img/portfolios/eth_wbtc_lp_yield_set.svg" alt="img" />
                      <span>ETH 12 Day EMA</span>
                    </div>
                  </td>
                  <td className="change">
                    <div className="d-flex align-items-center">
                      <img src={downarrowImg} alt="img" />
                      <span style={{ color: '#FF003D' }}>-0.5%</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      $3,3
                    </div>
                  </td>
                  <td>
                    <div>
                      0.005
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* bottom content */}
      <div className="bottom-content">
        <div className="container">
          <div className="shadow-round-block table-section">
            <table>
              <thead>
                <tr>
                  <th>Wallet balance</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <img src="https://set-core.s3.amazonaws.com/img/portfolios/eth_wbtc_lp_yield_set.svg" alt="img" />
                      <span>Bitcoin</span>
                    </div>
                  </td>
                  <td>
                    <div>
                    $3,345.41
                    </div>
                  </td>
                  <td>
                    <div>
                    1.9876544
                    </div>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <img src="https://set-core.s3.amazonaws.com/img/social_trader_set_icons/procryptosignals-eth-ta-set.png" alt="img" />
                      <span>ETH TA Set II</span>
                    </div>
                  </td>
                  <td>
                    <div>
                    $4,218.45
                    </div>
                  </td>
                  <td>
                    <div>
                    1.9876544
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserPage;