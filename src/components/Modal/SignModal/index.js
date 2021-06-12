import React, { useState } from 'react';
import Modal from 'react-modal';
import metamasxImg from '../../../assets/img/metamasx.png';
import colnbaseImg from '../../../assets/img/Colnbase-Wallet.png';
import ledgerImg from '../../../assets/img/Ledger.png';
import walletConnectImg from '../../../assets/img/WalletConnect.png';
import './style.scss';

const UpvotesModal = (props) => {
  const { setIsOpen, modalIsOpen } = props;
  const [isLoading, setIsLoading] = useState(false);

  /****** modal close ******/
  function closeModal() {
    setIsOpen(false);
  }

  /****** Log in ******/
  const logIn = () => {
    setIsLoading(true);
    //please write to do metamask login here
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="sign-in-modal"
        overlayClassName="Overlay"
        ariaHideApp={false}
      >
        {
          isLoading ?
            <div className="loading-section">
              <div className="loading-config d-flex align-items-center justify-content-center">
                <div className="lds-spinner">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <p className="description">Please check your MetaMask extenstion to continue logging in.</p>
              <p className="ledger gradient-text text-center">Using a Ledger?</p>
            </div> :
            <div className="sign-in-content">
              <h1 className="title">Sign in</h1>
              <div className="sign-in-list-section row">
                <div className="col-md-6 sign-in-list">
                  <div className="d-flex align-items-center w-100" onClick={logIn}>
                    <img src={metamasxImg} alt="metamasxImg" />
                    <span>Metamasx</span>
                  </div>
                </div>
                <div className="col-md-6 sign-in-list">
                  <div className="d-flex align-items-center w-100">
                    <img src={colnbaseImg} alt="colnbaseImg" />
                    <span>Colnbase Wallet</span>
                  </div>
                </div>
                <div className="col-md-6 sign-in-list">
                  <div className="d-flex align-items-center w-100">
                    <img src={ledgerImg} alt="ledgerImg" />
                    <span>Ledger</span>
                  </div>
                </div>
                <div className="col-md-6 sign-in-list">
                  <div className="d-flex align-items-center w-100">
                    <img src={walletConnectImg} alt="walletConnectImg" />
                    <span>WalletConnect</span>
                  </div>
                </div>
              </div>
              <div className="divider-section"></div>
              <p className="bottom-description">
                By signing up with Metaindex, I accept the <span>terms and conditions</span> and <span>privacy policy</span>
              </p>
            </div>
        }

      </Modal>
    </div>
  )
}

export default UpvotesModal;