import React, { useState } from 'react';
import './style.scss';
import upArrowImg from '../../assets/img/uparrow.svg';

const PortfolioTable = (props) => {
  const [isMore, setIsMore] = useState(true);
  const { fund, position, cryptoValues } = props;

  return (
    <div className="portfolio-table-section">
      <table className="w-100">
        <thead>
          <tr>
            <th>Token</th>
            <th>Quantity per Index</th>
            <th>Token Price</th>
            <th>Current Price Allocation</th>
            <th>Percent Change</th>
            <th>Total price per index</th>
          </tr>
        </thead>
        <tbody>
          <tr className="first-tr-section">
            <td>
              <div className="d-flex align-items-center">
                <img src={fund['image']} alt="img" />
                <span className="span">{fund['name']}</span>
              </div>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <div className="d-flex align-items-center percent-change-section">
                <img src={upArrowImg} alt="updownImg" />
                <span className="up-down span">122.2%</span>
              </div>
            </td>
            <td className="total-price">${fund['price_usd']}</td>
          </tr>
          <tr>
            <td colSpan="6" className="underlying-token-title">Underlying Tokens</td>
          </tr>
        </tbody>
        {
          fund['components'] && fund['components'].map((item, i) => (
            isMore ? (i < 5 && <tbody className="underlying-token" key={i}>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <img src={item['image']} alt="img" />
                    <span className="span">{item['name']}</span>
                  </div>
                </td>
                <td>{cryptoValues['components']['quantities'][item['id']][`${position}`]} {item['symbol']}</td>
                <td>${cryptoValues['components']['prices'][item['id']][`${position}`]}</td>
                <td>35%</td>
                <td>
                  <div className="d-flex align-items-center percent-change-section">
                    <img src={upArrowImg} alt="updownImg" />
                    <span className="up-down span">122.2%</span>
                  </div>
                </td>
                <td className="total-price">$282.45</td>
              </tr>
              <tr className="percent-color-section">
                <td colSpan="6">
                  <div>
                    <div style={{ width: `${item['percent_of_set']}%`, background: `#${item['colors'][0]}` }}></div>
                  </div>
                </td>
              </tr>
            </tbody>) :
              <tbody className="underlying-token" key={i}>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <img src={item['image']} alt="img" />
                      <span className="span">{item['name']}</span>
                    </div>
                  </td>
                  <td>{cryptoValues['components']['quantities'][item['id']][`${position}`]} {item['symbol']}</td>
                  <td>${cryptoValues['components']['prices'][item['id']][`${position}`]}</td>
                  <td>35%</td>
                  <td>
                    <div className="d-flex align-items-center percent-change-section">
                      <img src={upArrowImg} alt="updownImg" />
                      <span className="up-down span">122.2%</span>
                    </div>
                  </td>
                  <td className="total-price">$282.45</td>
                </tr>
                <tr className="percent-color-section">
                  <td colSpan="6">
                    <div>
                      <div style={{ width: `${item['percent_of_set']}%`, background: `#${item['colors'][0]}` }}></div>
                    </div>
                  </td>
                </tr>
              </tbody>
          ))
        }
      </table>
      <div className="w-100 text-center">
        <span className="see-more" onClick={() => setIsMore(!isMore)}>See {isMore ? 'more' : 'less'}</span>
      </div>
    </div>
  )
}

export default PortfolioTable;