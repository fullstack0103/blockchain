import React, { useState } from 'react';
import './style.scss';
import upArrowImg from '../../assets/img/uparrow.svg';
import Chart from "react-apexcharts";
import { useEffect } from 'react';

const PortfolioChart = (props) => {
  const { fund, setPostion, position, cryptoValues } = props;
  const [dateUnit, setDateUnit] = useState('1M');
  const [xData, setXData] = useState([]);
  const [yData, setYData] = useState([]);
  let index = -1;

  useEffect(() => {
    setXData(cryptoValues['dates']);
    setYData(cryptoValues['prices']);
  }, [cryptoValues])

  const options = {
    chart: {
      id: "basic-bar",
      toolbar: {
        show: false
      },
      foreColor: '#9e9e9e',
      fill: {
        colors: ['red']
      },
      events: {
        mouseMove: function (event, chartContext, config) {
          if (config['seriesIndex'] === 0 && index !== config['dataPointIndex']) {
            setPostion(config['dataPointIndex']);
          }
        }
      }
    },
    xaxis: {
      type: 'datetime',
      categories: xData || [],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: true,
        style: {
          colors: [],
          fontSize: '20px',
          fontFamily: 'Inter',
          fontWeight: 500,
          cssClass: 'apexcharts-xaxis-label',
        },
      },
    },
    colors: ['#4F4CD1', '#4F4CD1', '#4F4CD1', '#4F4CD1', '#4F4CD1'],
    stroke: {
      show: true,
      width: 2,
    },
    markers: {
      shape: "circle",
      hover: {
        size: undefined,
        sizeOffset: 4
      }
    },
    grid: {
      show: false
    },
    yaxis: {
      show: false
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      }
    }
  }

  const series = [
    {
      name: "Price",
      data: yData || []
    }
  ]

  const totalPrice = (_fund) => {
    let totalVal = 0;
    for(const chooseItem of _fund) {
      totalVal+=parseFloat(cryptoValues['components']['prices'][chooseItem['id']][position])
    }
    return totalVal.toFixed(2);
  }

  return (
    <div className="portfolio-chart-section">
      <div className="d-flex justify-content-between align-items-center chart-detail flex-wrap">
        <div className="current-price-section d-flex flex-wrap">
          <div className="price">
            <h1>${fund['components'] && totalPrice(fund['components'])}</h1>
            <span>Current price</span>
          </div>
          <div className="percent-section d-flex align-items-center">
            <img src={upArrowImg} alt="uparrow" />
            <span>140.67%</span>
          </div>
        </div>
        <div className="date-unit-section d-flex">
          <div onClick={() => setDateUnit('1H')} className={dateUnit === "1H" ? "active" : ""}>1H</div>
          <div onClick={() => setDateUnit('1D')} className={dateUnit === "1D" ? "active" : ""}>1D</div>
          <div onClick={() => setDateUnit('1W')} className={dateUnit === "1W" ? "active" : ""}>1W</div>
          <div onClick={() => setDateUnit('1M')} className={dateUnit === "1M" ? "active" : ""}>1M</div>
          <div onClick={() => setDateUnit('1Y')} className={dateUnit === "1Y" ? "active" : ""}>1Y</div>
        </div>
      </div>
      <div className="chart-section">
        <Chart
          options={options}
          series={series}
          type="line"
          width="100%"
        />
      </div>
    </div>
  )
}

export default PortfolioChart;