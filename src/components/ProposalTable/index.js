import React from 'react';
import { useHistory } from 'react-router-dom';
import './style.scss';

const ProposalTable = (props) => {
  const { proposal } = props;
  const history = useHistory();

  /****** go to Governanace Item page ******/
  const goItempage = (id) => {
    history.push(`governance/${id}`);
  }

  return (
    <div className="proposal-section">
      <div className="container">
        <div className="table-section">
          {
            proposal.map((item, i) => (
              <div className="item" onClick={() => goItempage('2')} key={i} style={{border: proposal.length === i+1 && 'none'}}>
                <div className="row">
                  <div className="col-md-7 detail-section">
                    <p className="title">{item['title']}</p>
                    <div className="d-flex align-items-center" style={{ color: item['color'] }}>
                      <div className="status-section d-flex align-items-center justify-content-center" style={{ backgroundColor: item['color'] }}><span>{item['status']}</span></div>
                      <div className="d-flex align-items-center number-section">
                        <span>{item['demension']}</span>
                        <div className="dot-section"></div>
                        <span>{item['number']}</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5 percent-section">
                    <div className="row">
                      <div className="col-md-8 color-percent">
                        <div className="d-flex align-items-center">
                          <div className="color-bar">
                            <div style={{ width: `${item['vote_percent']}%` }}></div>
                          </div>
                          <span>{item['vote_percent']}%</span>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="color-bar">
                            <div style={{ width: `${item['unvote_percent']}%` }} className="red-bar"></div>
                          </div>
                          <span>{item['unvote_percent']}%</span>
                        </div>
                      </div>
                      <div className="col-md-4 d-flex align-items-center">
                        {
                          item['status'] === 'Active' &&
                          <button className="white-btn">Vote</button>
                        }
                      </div>
                    </div>
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

export default ProposalTable;