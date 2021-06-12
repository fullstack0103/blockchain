import React, { useState } from 'react';
import nextBtnImg from '../../assets/img/next-btn.svg';
import AddTokens from '../../components/AddTokens';
import AddDetails from '../../components/AddDetails';
import PublishIndex from '../../components/PublishIndex';
import './style.scss';

const CreateIndex = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [tokenVal, setTokenVal] = useState([]);
  const [details, setDetails] = useState({ name: '', symbol: '' });
  const [userImg, setUserImg] = useState('');

  // validations status variable
  const [isDetail, setIsDetail] = useState(true);

  /****** AddTokens props ******/
  const tokenProps = {
    tokenVal: tokenVal,
    setTokenVal: setTokenVal
  }

  /****** AddDetails props */
  const detailsProps = {
    details: details,
    setDetails: setDetails,
    userImg: userImg,
    setUserImg: setUserImg,
    isDetail: isDetail
  }

  /****** publish index props */
  const publishProps = {
    tokenVal: tokenVal,
    details: details,
    setCurrentStep: setCurrentStep,
    userImg: userImg
  }

  /****** go to next step ******/
  const goNextStep = () => {
    if (currentStep === 3) return;
    if (currentStep === 1 && tokenVal.length === 0) return;
    if (currentStep === 2 && (details['name'] === '' || details['symbol'] === '' || userImg === '')) { 
      setIsDetail(false);
      return;
    }
    setIsDetail(true);
    setCurrentStep(currentStep + 1);
  }

  /****** check before step *****/
  const beforeStepCheck = (index) => {
    if (index >= currentStep) return;
    setCurrentStep(index);
  }

  return (
    <div className="container">
      <div className="create-index-section mx-auto position-relative">
        <div>
          <div className="step-status-section d-flex align-items-center justify-content-center">
            <div className={currentStep === 1 ? 'active' : ''} onClick={() => beforeStepCheck(1)} style={{cursor: currentStep > 1 ? 'pointer' : 'default'}}></div>
            <div className={currentStep === 2 ? 'active' : ''} onClick={() => beforeStepCheck(2)} style={{cursor: currentStep > 2 ? 'pointer' : 'default'}}></div>
            <div className={currentStep === 3 ? 'active' : ''} onClick={() => beforeStepCheck(3)}></div>
          </div>
          {
            currentStep < 3 &&
            <div className="next-btn d-flex align-items-center justify-content-center" onClick={goNextStep}>
              <img src={nextBtnImg} alt="nextImg" />
            </div>
          }
          
          {currentStep === 1 && <AddTokens {...tokenProps} />}
          {currentStep === 2 && <AddDetails {...detailsProps} />}
          {currentStep === 3 && <PublishIndex {...publishProps} />}
        </div>
      </div>
    </div>
  )
}

export default CreateIndex;