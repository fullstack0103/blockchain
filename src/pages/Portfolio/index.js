import React, { useEffect, useState } from 'react';
import { fundData, monthChartData } from '../../dumy';
import './style.scss';
import PortfolioChart from '../../components/PortfolioChart';
import PortfolioTable from '../../components/PortfolioTable';
import UpvotesModal from '../../components/Modal/UpvotesModal';
import moment from 'moment';

const Portfolio = () => {
  const [fund, setFund] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);
  const [cryptoValues, setCryptoValues] = useState({});
  const [position, setPostion] = useState('1');

  const chartProps = {
    fund: fund,
    position: position,
    cryptoValues: cryptoValues,
    setPostion: setPostion
  }

  const tableProps = {
    fund: fund,
    position: position,
    cryptoValues: cryptoValues
  }

  useEffect(() => {
    setFund(fundData);
    setCryptoValues(monthChartData);
  }, [])

  function openModal() {
    setIsOpen(true);
  }
  
  return (
    <div className="portfolio-content">
      <div className="container">

        {/* Header detail section */}
        <div className="d-flex header-section justify-content-between flex-wrap">
          <div className="detail-section">
            <div className="d-flex align-items-center img-name-section">
              <img src={fund['image']} alt={fund['id']} />
              <span>{fund['name']}</span>
            </div>
            <div className="detail-data d-flex flex-wrap">
              <div className="d-flex flex-column">
                <span className="bold-span span">{fund['market_cap']}</span>
                <span className="span">Market Cap</span>
              </div>
              <div className="date-section d-flex flex-column">
                <span className="bold-span span">{moment(fund['created_at']).format("MMMM Do YYYY")}</span>
                <span className="span">Inception Date</span>
              </div>
              <div className="btn-section">
                <button className="white-btn">Risk 2</button>
              </div>
            </div>
          </div>
          <div className="vote-btn-section">
            <button className="fill-btn" onClick={openModal}>Buy</button>
            <button className="fill-btn">Sell</button>
          </div>
        </div>

        {/* chart section */}
        <PortfolioChart {...chartProps} />

        {/* table section */}
        <PortfolioTable {...tableProps} />

        <div className="description-section">
          <p>Lorem ipsum dolor sit amet, usu ea quem eros consul, dicunt probatus invenire ne pro, option albucius eu duo. Nisl eripuit qualisque vis ne, velit partiendo id est. In eos deserunt reformidans, per ea omnis tollit omittam, nec vidit splendide te. Vidisse tamquam instructior ea vix. Oratio gloriatur comprehensam vis te, diam utinam ea his.</p>
          <p>Ei facilis salutandi forensibus his. Ut quem imperdiet comprehensam mea, ea nec homero gloriatur, ut ipsum explicari eum. Nam et posse tincidunt sadipscing. Per eu errem populo eirmod, vis at soluta convenire aliquando.</p>
          <p>Ea sonet oratio gubergren mei, an his tation invidunt. Vix at timeam copiosae scaevola, nam te facilisis disputando. Labores graecis vim id. Decore exerci ex Lorem ipsum dolor sit amet, usu ea quem eros consul, dicunt probatus invenire ne pro, option albucius eu duo. Nisl eripuit qualisque vis ne, velit partiendo id est. In eos deserunt reformidans, per ea omnis tollit omittam, nec vidit splendide te. Vidisse tamquam instructior ea vix. Oratio gloriatur comprehensam vis te, diam utinam ea his.</p>
          <p>Ei facilis salutandi forensibus his. Ut quem imperdiet comprehensam mea, ea nec homero gloriatur, ut ipsum explicari eum. Nam et posse tincidunt sadipscing. Per eu errem populo eirmod, vis at soluta convenire aliquando.</p>
          <p>Ea sonet oratio gubergren mei, an his tation invidunt. Vix at timeam copiosae scaevola, nam te facilisis disputando. Labores graecis vim id. Decore exerci ex Lorem ipsum dolor sit amet, usu ea quem eros consul, dicunt probatus invenire ne pro, option albucius eu duo. Nisl eripuit qualisque vis ne, velit partiendo id est. In eos deserunt reformidans, per ea omnis tollit omittam, nec vidit splendide te. Vidisse tamquam instructior ea vix. Oratio gloriatu</p>
        </div>
      </div>

      {/* modal section */}
      <UpvotesModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />

    </div>
  )
}

export default Portfolio;