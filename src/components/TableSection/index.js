import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Table,
  HeadSpan,
  Th,
  NumberTh,
  HeadIconDiv,
  HeadUpDownIcon,
  TBody,
  FirstTd,
  NameSpanTag,
  MarketCapSpanTag,
  PriceSpanTag,
  PrecentDivTag,
  BodyUpDownIcon,
  RiskDiv,
  Td,
  PercentTd,
  SymbolImgTag,
  SymbolSpanTag,
  SymbolDivTag,
  PercentSpanTag,
  OverlaySpanTag,
  TableBlock,
  NoData
} from './style';
import downArrowImg from '../../assets/img/downarrow.svg';
import upArrowImg from '../../assets/img/uparrow.svg';
import { useHistory } from 'react-router-dom';

const TableSection = (props) => {
  const history = useHistory();
  const { t } = useTranslation();
  const { typeExplore, setTypeExplore, currency, isFlag } = props;
  const [sortDirections, setSortDirections] = useState({
    market_cap: false,
    set_price: false,
    week_percent_change: false,
    cumulative_change: false,
    risk: false,
    daily_percent_change: false
  })

  /******* perceent color display *******/
  const PercentDispaly = (percentVal) => {
    return (
      <>
        {parseFloat(percentVal) > 0 && <BodyUpDownIcon src={upArrowImg} />}
        {parseFloat(percentVal) < 0 && <BodyUpDownIcon src={downArrowImg} />}
        <PriceSpanTag style={{ color: setTextColor(percentVal), fontSize: isFlag ? "20px" : "14px" }}>{convert(percentVal)}</PriceSpanTag>
      </>
    )
  }

  const convert = (num) => {
    if (num === "-") return '--';
    else return `${parseFloat(num).toFixed(1)}%`;
  }

  /****** set text color *******/
  const setTextColor = (num) => {
    if (num === "-") return '#dad7e2';
    if (parseFloat(num) > 0) return '#2bb160'
    else return '#df4857'
  }

  const CurrenctSetting = () => {
    if (currency === "btc_index") return "BTC";
    if (currency === "eth_index") return "ETH"
    if (currency === "usd_index") return "$"
  }

  /****** sort function *******/
  const tableSort = (key) => {
    let _typeExplore = [...typeExplore];
    _typeExplore.sort((a, b) => {
      let sortItem1 = isNaN(parseFloat(a[currency][key])) ? -100 : parseFloat(a[currency][key])
      let sortItem2 = isNaN(parseFloat(b[currency][key])) ? -101 : parseFloat(b[currency][key])
      if (sortItem1 > sortItem2) {
        return sortDirections[key] ? -1 : 1;
      }
      if (sortItem1 < sortItem2) {
        return sortDirections[key] ? 1 : -1;
      }
      return 0;
    });
    setSortDirections({ ...sortDirections, [key]: !sortDirections[key] })
    setTypeExplore(_typeExplore)
  }

  const riskSort = (key) => {
    let _typeExplore = [...typeExplore];
    _typeExplore.sort((a, b) => {
      let sortItem1 = a[key] === '' ? 0 : 1;
      let sortItem2 = b[key] === '' ? 0 : 1;
      if (sortItem1 < sortItem2) {
        return sortDirections[key] ? -1 : 1;
      }
      return 0;
    });
    setSortDirections({ ...sortDirections, [key]: !sortDirections[key] })
    setTypeExplore(_typeExplore)
  }

  const reskBorderColor = (status) => {
    switch (status) {
      case 'Risk 1':
        return '#16C784';
      case 'Risk 3':
        return '#FF8A00';
      case 'Risk 5':
        return '#FF003D';
      default:
        return '#F6F6FA'
    }
  }

  return (
    <TableBlock>
      { typeExplore.length > 0 ?
        <Table>
          <thead>
            <tr>
              <NumberTh></NumberTh>
              <Th>
                <HeadSpan>{t('NAME')}</HeadSpan>
              </Th>
              <Th>
                <HeadIconDiv onClick={() => tableSort('market_cap')}>
                  <HeadSpan>{t('MARKET_CAP')}</HeadSpan>
                  <HeadUpDownIcon src={downArrowImg} alt="UpDownImg" />
                </HeadIconDiv>
              </Th>
              <Th>
                <HeadIconDiv onClick={() => tableSort('set_price')}>
                  <HeadSpan>{t('PRICE')}</HeadSpan>
                  <HeadUpDownIcon src={downArrowImg} alt="UpDownImg" />
                </HeadIconDiv>
              </Th>
              <Th>
                <HeadIconDiv onClick={() => tableSort(isFlag ? 'week_percent_change' : 'daily_percent_change')}>
                  <HeadSpan>1 {isFlag ? 'Day' : t('WEEK')}</HeadSpan>
                  <HeadUpDownIcon src={downArrowImg} alt="UpDownImg" />
                </HeadIconDiv>
              </Th>
              <Th>
                <HeadIconDiv onClick={() => tableSort('cumulative_change')}>
                  <HeadSpan>{t('SINCE_INCEPTION')}</HeadSpan>
                  <HeadUpDownIcon src={downArrowImg} alt="UpDownImg" />
                </HeadIconDiv>
              </Th>
              <Th>
                <HeadIconDiv onClick={() => riskSort('risk')} style={{ justifyContent: "center" }}>
                  <HeadSpan>{t('RISK')}</HeadSpan>
                  <HeadUpDownIcon src={downArrowImg} alt="UpDownImg" />
                </HeadIconDiv>
              </Th>
            </tr>

          </thead>
          {
            typeExplore.map((item, i) => (
              <TBody key={i} onClick={() => history.push(`/portfolio/${item['id']}`)}>
                <tr>
                  <NumberTh rowSpan="2"><div><div className={`num-${i + 1}`}>{i + 1}</div></div></NumberTh>
                  <FirstTd rowSpan={isFlag ? "2" : ""}>
                    <div className="d-flex align-items-center">
                      <img src={item['image']} alt={item['id']} />
                      <NameSpanTag>{item['name']}</NameSpanTag>
                    </div>
                  </FirstTd>
                  <Td>
                    <MarketCapSpanTag style={{ fontSize: isFlag ? "19px" : "14px" }}><CurrenctSetting /> {item[currency]['market_cap']}</MarketCapSpanTag>
                  </Td>
                  <Td>
                    <PriceSpanTag style={{ fontSize: isFlag ? "19px" : "14px" }}><CurrenctSetting /> {item[currency]['set_price']}</PriceSpanTag>
                  </Td>
                  <Td>
                    <PrecentDivTag>
                      {PercentDispaly(item[currency][isFlag ? 'daily_percent_change' : 'week_percent_change'])}
                    </PrecentDivTag>
                  </Td>
                  <Td>
                    <PrecentDivTag>
                      {PercentDispaly(item[currency]['cumulative_change'])}
                    </PrecentDivTag>
                  </Td>
                  <Td>
                    {
                      item['risk'] !== '' &&
                      <RiskDiv style={{ fontSize: isFlag ? "18px" : "12px", borderRadius: isFlag ? "100px" : "10px", border: `1px solid ${reskBorderColor(item['risk'])}` }}>
                        {item['risk']}
                      </RiskDiv>
                    }
                  </Td>
                </tr>
                <tr>
                  {!isFlag && <FirstTd className="pt-0 pb-0"></FirstTd>}
                  <PercentTd colSpan="5" style={{ paddingBottom: isFlag ? "28px" : "18px" }}>
                    <div className={isFlag ? "d-flex  leaderboard" : "d-flex "}>
                      {
                        item['components'].map((listItem, j) => (
                          j < (isFlag ? 4 : 5) && <SymbolDivTag key={j} style={{ width: isFlag ? '20%' : '16.6%', paddingLeft: '30px' }}>
                            <SymbolImgTag src={listItem['image']} alt={listItem['id']} />
                            <SymbolSpanTag>{listItem['symbol']}</SymbolSpanTag>
                            <PercentSpanTag>{listItem['percent_of_set']}%</PercentSpanTag>
                          </SymbolDivTag>
                        ))
                      }
                      <SymbolDivTag className="justify-content-end" style={{ width: isFlag ? '20%' : '16.6%', paddingLeft: '30px' }}>
                        <OverlaySpanTag>{item['components'].length > 4 && `+${item['components'].length - 4} more`}</OverlaySpanTag>
                      </SymbolDivTag>
                    </div>
                  </PercentTd>
                </tr>
              </TBody>
            ))
          }

        </Table> :
        <NoData>No filtered sets available.</NoData>
      }
    </TableBlock>

  )
}

export default TableSection;