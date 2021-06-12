import React, { useContext, useEffect, useState } from 'react';
import { SubTitle } from '../Shared/CommonStyle'
import { useTranslation } from 'react-i18next';
import {
  Content,
  FilterSection,
  AssetFilter,
  Filterby,
  AssetSection,
  CurrencyUnit,
  CurrencyChange,
  FilterBlock,
  Item
} from './style';
import TableSection from '../TableSection';
import { Currency } from '../../global/Context/AppContext';
import { coinsData } from '../../dumy';

const ExploreAllIndex = (props) => {
  const { typeExplore, setTypeExplore, isFlag, byTypeExplore } = props;
  const { t } = useTranslation();
  const [currency, setCurrency] = useContext(Currency);
  const [filterList, setFilterList] = useState([]);
  const [dropDown, setDropDown] = useState(false);
  const [isChecked, setIsChecked] = useState({});

  useEffect(() => {
    setFilterList(coinsData);
  }, [])

  useEffect(() => {
    document.addEventListener("click", closeSelect);
    return () => document.removeEventListener("click", closeSelect);
  }, [dropDown])

  const closeSelect = (evt) => {
    if (!evt.target.closest(".assetDropdown")) setDropDown(false);
  }

  /****** table props variables ******/
  const tableProps = {
    typeExplore: typeExplore,
    setTypeExplore: setTypeExplore,
    currency: currency,
    isFlag: isFlag
  }

  /****** Currency change function ******/
  const currencyChangeFunc = (index) => {
    setCurrency(index);
  }

  /***** check box change ******/
  const handleChecked = (evt) => {
    setIsChecked({...isChecked, [evt.target.name]: evt.target.checked});
  }

  useEffect(() => {
    let allCheck = allCheckFunc();
    if(allCheck) setTypeExplore(byTypeExplore)
    else {
      let _filterList = byTypeExplore.filter(list => filterFunc(list));
      setTypeExplore(_filterList)
    }
  }, [isChecked])

  /****** all check ******/
  const allCheckFunc = () =>{
    for(const key in isChecked) {
      if(isChecked[key] === true) return false
    }
    return true;
  }

  /****** asset filter function *******/
  const filterFunc = (list) => {
    for (const item of list['components']) {
      for (const check in isChecked) {
        if(item['id'] === check && isChecked[check] === true) return true;
      }
    }
    return false;
  }

  return (
    <Content style={{ background: isFlag ? "#F6F6FA" : "#FFFFFF" }}>
      <div className="container">
        <SubTitle>{t('EXPLORE_ALL_INDEXES')}</SubTitle>
        <FilterSection>
          <AssetFilter>
            <Filterby>Filter By</Filterby>
            <AssetSection className="assetDropdown">
              <span onClick={() => setDropDown(true)}>Asset</span>
              {
                dropDown &&
                <FilterBlock>
                  {
                    filterList.map((item, i) => (
                      <Item key={i}>
                        <div className="checkbox-section">
                          <input
                            type="checkbox"
                            name={item['id']}
                            checked={isChecked[item['id']] || false}
                            onChange={handleChecked}
                          />
                        </div>
                        <div className="img-display-section">
                          <img src={item['image_url']} alt={item['id']} />
                          <span>{item['symbol']}</span>
                        </div>
                      </Item>
                    ))
                  }

                </FilterBlock>
              }
            </AssetSection>
          </AssetFilter>
          <CurrencyChange>
            <CurrencyUnit className={currency === "btc_index" ? "active ml-0" : 'ml-0'} onClick={() => currencyChangeFunc('btc_index')}>BTC</CurrencyUnit>
            <CurrencyUnit className={currency === "eth_index" ? "active" : ''} onClick={() => currencyChangeFunc('eth_index')}>ETH</CurrencyUnit>
            <CurrencyUnit className={currency === "usd_index" ? "active" : ''} onClick={() => currencyChangeFunc('usd_index')}>USD</CurrencyUnit>
          </CurrencyChange>
        </FilterSection>
        <TableSection {...tableProps} />
      </div>

    </Content>
  )
}

export default ExploreAllIndex;