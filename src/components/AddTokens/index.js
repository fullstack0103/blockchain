import React, { useEffect, useState } from 'react';
import deleteIcon from '../../assets/img/delete-icon.svg';
import { coinsData } from '../../dumy';
import './style.scss';

const AddTokens = (props) => {
  const { tokenVal, setTokenVal } = props;
  const [coins, setCoins] = useState([]);
  const [searchVal, setSearchVal] = useState('');

  useEffect(() => {
    setCoins(coinsData);
  }, [])

  /****** search value change ******/
  const handleChange = (evt) => {
    setSearchVal(evt.target.value);
    const _searchData = [...coinsData]
    let filterArr = []
    filterArr = _searchData.filter(data => data.name.toLowerCase().includes(evt.target.value.toLowerCase())
      || data.symbol.toLowerCase().includes(evt.target.value.toLowerCase()))
    setCoins(filterArr);
  }

  /****** add search result ******/
  const addSearchResult = (id) => {
    setSearchVal('');
    let selectedItem = coinsData.filter(data => data['id'] === id)[0];
    const _tokenVal = [...tokenVal];
    if (tokenVal.length === 0) selectedItem['percent'] = '1';
    else {
      let fixedVal = (Math.random() * (0.01 - (1 - _tokenVal.length * 0.01)) + (1 - _tokenVal.length * 0.01)).toFixed(2);
      selectedItem['percent'] = fixedVal;
      let restVal = (1 - fixedVal).toFixed(2);
      for (let i = 0; i < _tokenVal.length; i++) {
        if (i !== _tokenVal.length - 1) {
          _tokenVal[i]['percent'] = (restVal === 0.01) ? 0.01 : (Math.random() * (0.01 - (restVal - 0.01)) + (restVal - 0.01)).toFixed(2);
          restVal = (restVal === 0.01) ? 0.01 : Math.round((restVal - parseFloat(_tokenVal[i]['percent'])) * 100) / 100;
        } else {
          _tokenVal[_tokenVal.length - 1]['percent'] = restVal
        }
      }
    }
    // if item exist, return
    let checkItem = _tokenVal.filter(data => data['id'] === selectedItem['id'])
    if (checkItem.length > 0) return;
    _tokenVal.push(selectedItem);
    setTokenVal(_tokenVal);
  }

  /****** remove a item from search result */
  const itemRemove = (id) => {
    const Item = tokenVal.slice().filter(x => x.id === id)[0];
    const _tokenVal = [...tokenVal];
    let index = _tokenVal.indexOf(Item);
    _tokenVal.splice(index, 1);
    setTokenVal(_tokenVal);
  }

  /****** set disabled status ******/
  const lockSetting = (id) => {
    const Item = tokenVal.slice().filter(x => x.id === id)[0];
    const _tokenVal = [...tokenVal];
    let index = _tokenVal.indexOf(Item);
    _tokenVal[index]['disabled'] = !_tokenVal[index]['disabled'];
    setTokenVal(_tokenVal);
  }

  /****** change rang value ******/
  const handleRangChange = (evt, id) => {
    const Item = tokenVal.slice().filter(x => x.id === id)[0];
    const _tokenVal = [...tokenVal];
    let index = _tokenVal.indexOf(Item);
    _tokenVal[`${index}`]['percent'] = parseFloat(evt.target.value).toFixed(2);
    const fixedVal = parseFloat(evt.target.value).toFixed(2);
    let restVal = (1 - fixedVal).toFixed(2);
    setTokenVal(_tokenVal);
    if (_tokenVal.length === 1) return;
    for (let i = 0; i < _tokenVal.length; i++) {
      let pos = _tokenVal.length - i + 1;
      if (_tokenVal[i]['id'] !== id && i !== _tokenVal.length - 1) {
        _tokenVal[i]['percent'] = (restVal < _tokenVal.length * 0.01) ? 0.01 : (Math.random() * (0.01 - (restVal/pos)) + (restVal/pos)).toFixed(2);
        restVal = parseFloat((restVal === 0.01) ? 0.01 : (restVal - parseFloat(_tokenVal[i]['percent'])).toFixed(2));
      } else if (_tokenVal[_tokenVal.length - 1]['id'] === id) {
        let lastVal = parseFloat(_tokenVal[_tokenVal.length - 2]['percent'])
        _tokenVal[_tokenVal.length - 2]['percent'] = restVal + lastVal
      } else {
        _tokenVal[_tokenVal.length - 1]['percent'] = restVal
      }
    }
    setTokenVal(_tokenVal)
  }

  return (
    <div className="add-tokens-section">
      <h1 className="title">Add Tokens to your set</h1>
      <p className="description">You can add or remove tokens later.</p>

      {/* search section */}
      <div className="search-section position-relative">
        <div className="w-100">
          <input type="text" placeholder="Search for tokens to add" autoComplete="off" name="search" value={searchVal} onChange={handleChange} />
        </div>
        {searchVal !== '' &&
          <div className="menu position-absolute customize-scrollbar">
            {coins.map((item, i) => (
              <div className="item d-flex align-items-center justify-content-between" key={i} onClick={() => addSearchResult(item['id'])}>
                <div className="image-name d-flex align-items-center">
                  <img src={item['image_url']} alt={item['id']} />
                  <span>{item['name']}</span>
                </div>
                <div className="symbol">{item['symbol']}</div>
              </div>
            ))}
          </div>
        }
      </div>

      {/* search result section */}
      {
        tokenVal.length > 0 ?
          <div className="search-result-section">
            <div className="search-result-head d-flex align-items-center">
              <div className="token-name">Token name</div>
              <div className="allocation">Allocation</div>
              <div className="lock-remove">Lock/ Remove</div>
            </div>
            {
              tokenVal.map((item, i) => (
                <div className="search-result-content" key={i}>
                  <div className="search-content d-flex align-items-center">
                    <div className="token-name d-flex align-items-center">
                      <img src={item['image_url']} alt={item['id']} />
                      <div className="d-flex flex-column">
                        <span className="name">{item['name']}</span>
                        <span className="symbol">{item['symbol']}</span>
                      </div>
                    </div>
                    <div className="allocation">{parseInt(item['percent'] * 100)}%</div>
                    <div className="lock-remove">
                      <span onClick={() => lockSetting(item['id'])} className="lock-icon">
                        <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.7" d="M5 10V6C5 4.67392 5.52678 3.40215 6.46447 2.46447C7.40215 1.52678 8.67392 1 10 1C11.3261 1 12.5979 1.52678 13.5355 2.46447C14.4732 3.40215 15 4.67392 15 6V10M3 10H17C18.1046 10 19 10.8954 19 12V19C19 20.1046 18.1046 21 17 21H3C1.89543 21 1 20.1046 1 19V12C1 10.8954 1.89543 10 3 10Z" stroke={item['disabled'] ? '#4F4CD1' : '#0B0A3C'} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <img src={deleteIcon} alt="lockIcon" className="delete-icon" onClick={() => itemRemove(item['id'])} />
                    </div>
                  </div>
                  <div className="search-percent">
                    <input
                      type="range"
                      min="0.01"
                      max={tokenVal.length === 1 ? 1 : 1 - tokenVal.length / 100}
                      step="0.01"
                      name={item['id']}
                      value={item['percent']}
                      disabled={item['disabled'] || false}
                      onChange={(evt) => handleRangChange(evt, item['id'])}
                      style={{ backgroundImage: `-webkit-gradient(linear, 0% 0%, ${parseFloat(item['percent'] * 100)}% 50%, color-stop(100%, #5C53D6), color-stop(100%, #FFFFFF))` }}
                    />
                  </div>
                </div>
              ))
            }

          </div> :
          <div className="empty-result d-flex justify-content-center align-items-center w-100">
            Select tokens to add
        </div>
      }
    </div>
  )
}

export default AddTokens;