import React from 'react';
import './style.scss';

const GovernanceItem = () => {
  return (
    <div className="governance-item-section">
      <div className="container">
        <div className="row item-info-section">
          <div className="col-md-8">
            <div className="shadow-round-block detail-section">
              <div className="d-flex align-items-center img-detail">
                <img src="https://set-core.s3.amazonaws.com/img/social_trader_set_icons/defi_pulse_index_set.svg" alt="img" />
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center justify-content-center status-section">
                      <span>Active</span>
                    </div>
                    <span className="title-section">Create Medium Cap Oracle Category & Deploy ORLCS Index</span>
                  </div>
                  <div className="id-section">0xef65...5fe45</div>
                </div>
              </div>

              <div className="percent-color-section">
                <div className="d-flex align-items-center">
                  <span className="name">Agree</span>
                  <div className="percent-bar-section">
                    <div className="agree-bar h-100" style={{width: "100%"}}></div>
                  </div>
                  <span className="percent">10/100</span>
                </div>
                <div className="d-flex align-items-center">
                  <span className="name">Disagree</span>
                  <div className="percent-bar-section">
                    <div className="disagree-bar h-100" style={{width: '0%'}}></div>
                  </div>
                  <span className="percent">100</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="shadow-round-block btn-section h-100">
              <div className="d-flex align-items-center btn-group">
                <button className="fill-btn">Agree</button>
                <button className="fill-btn">Disagree</button>
              </div>
              <div className="weight-section">
                <span>Weight:</span>
                <span>Nan NDX</span>
              </div>
              <div className="impact-section">
                <span>Impact:</span>
                <span>%</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* description section */}
        <div className="description-section shadow-round-block">
          <h3 className="title">Details</h3>
          <p>Lorem ipsum dolor sit amet, usu ea quem eros consul, dicunt probatus invenire ne pro, option albucius eu duo. Nisl eripuit qualisque vis ne, velit partiendo id est. In eos deserunt reformidans, per ea omnis tollit omittam, nec vidit splendide te. Vidisse tamquam instructior ea vix. Oratio gloriatur comprehensam vis te, diam utinam ea his.</p>
          <p>Ei facilis salutandi forensibus his. Ut quem imperdiet comprehensam mea, ea nec homero gloriatur, ut ipsum explicari eum. Nam et posse tincidunt sadipscing. Per eu errem populo eirmod, vis at soluta convenire aliquando.</p>
          <p>Ea sonet oratio gubergren mei, an his tation invidunt. Vix at timeam copiosae scaevola, nam te facilisis disputando. Labores graecis vim id. Decore exerci ex Lorem ipsum dolor sit amet, usu ea quem eros consul, dicunt probatus invenire ne pro, option albucius eu duo. Nisl eripuit qualisque vis ne, velit partiendo id est. In eos deserunt reformidans, per ea omnis tollit omittam, nec vidit splendide te. Vidisse tamquam instructior ea vix. Oratio gloriatur comprehensam vis te, diam utinam ea his.</p>
          <p>Ei facilis salutandi forensibus his. Ut quem imperdiet comprehensam mea, ea nec homero gloriatur, ut ipsum explicari eum. Nam et posse tincidunt sadipscing. Per eu errem populo eirmod, vis at soluta convenire aliquando.</p>
          <p>Ea sonet oratio gubergren mei, an his tation invidunt. Vix at timeam copiosae scaevola, nam te facilisis disputando. Labores graecis vim id. Decore exerci ex Lorem ipsum dolor sit amet, usu ea quem eros consul, dicunt probatus invenire ne pro, option albucius eu duo. Nisl eripuit qualisque vis ne, velit partiendo id est. In eos deserunt reformidans, per ea omnis tollit omittam, nec vidit splendide te. Vidisse tamquam instructior ea vix. Oratio gloriatu</p>
        </div>
      </div>
    </div>
  )
}

export default GovernanceItem;