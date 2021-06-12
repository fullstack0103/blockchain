import React from 'react';
import closeIcon from '../../assets/img/closeIcon.svg';
import './style.scss';

const AddDetails = (props) => {
  const { details, setDetails, userImg, setUserImg, isDetail } = props;

  // input type="file" tag ref
  const inputRef = React.useRef(null);

  /****** change input value ******/
  const handleChange = (evt) => {
    setDetails({ ...details, [evt.target.name]: evt.target.value })
  }

  /******* get baseImg from input tag ******/
  const getBaseImg = e => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        setUserImg(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }

  /***** Open image upload section ******/
  const openImageUpload = () => {
    inputRef.current.click();
    // else setIsOpen(true);
  }

  return (
    <div className="add-details-section">
      <h1 className="title">Add Details</h1>

      {/* create name for index */}
      <div className="detail-item-section">
        <h2 className="sub-title">Create a name for your index</h2>
        <p className="description">Great index names are unique, short, and easy to remember. They must be 32 characters or less.</p>
        <div className="input-section" style={{ border: !isDetail && details['name'] === '' && "1px solid #FF003D" }}>
          <input type="text" name="name" autoComplete="off" className="input-name" value={details['name']} onChange={handleChange} placeholder="e.g Ethereum Volatility Index" />
        </div>
        {!isDetail && details['name'] === '' && <p className="text-right mb-0 error-msg">You have to input your Index!</p>}
      </div>

      {/* create symbol for index */}
      <div className="detail-item-section">
        <h2 className="sub-title">Create a symbol for your index</h2>
        <p className="description">Symbols are a 3 to 5 character name to represent your trading pool, e.g. ETH or BTC.</p>
        <div className="input-section" style={{ border: !isDetail && details['symbol'] === '' && "1px solid #FF003D" }}>
          <input type="text" name="symbol" autoComplete="off" className="input-name" value={details['symbol']} onChange={handleChange} placeholder="EVOLI" />
        </div>
        {!isDetail && details['symbol'] === '' && <p className="text-right mb-0 error-msg">You have to input your Symbol!</p>}
      </div>

      {/* create price for index */}
      <div className="detail-item-section">
        <h2 className="sub-title">Upload index logo</h2>
        {
          userImg === '' ?
            //image upload button
            <div className="user-img-upload-section">
              <button className="fill-btn" onClick={openImageUpload}><UploadIcon />Upload image</button>
              <input type="file" name="userIndexImg" accept="image/*" ref={inputRef} id="userIndexImg" onChange={getBaseImg} />
            </div> :
            // selected image preview
            <div className="user-index-img">
              <img src={userImg} alt="userIndexImg" />
              <img src={closeIcon} alt="closeImg" className="close-icon" onClick={(() => setUserImg(''))} />
            </div>
        }
        {!isDetail && userImg === '' && <p className="text-right mb-0 error-msg">You have to select your Index Logo!</p>}
      </div>
    </div>
  )
}

// upload icon
const UploadIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-upload" viewBox="0 0 16 16">
      <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
      <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
    </svg>
  )
}

export default AddDetails;