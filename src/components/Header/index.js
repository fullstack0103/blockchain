import React, { useState } from 'react';
import LogoImg from '../../assets/img/logo.png';
import Sign from '../../assets/img/sign.svg';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import SignModal from '../Modal/SignModal';
import {
  HeaderContainer,
  Logo,
  HeaderMenu,
  MenuItem,
  Button,
  EmptyDiv,
  MenuIconBlock,
  MobileImg,
  MobileMenu,
  MobileItem,
  OverLay,
  SignInBlock
} from './style';

const Header = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState(window.location.pathname);

  const linkTo = (url) => {
    setIsMobileMenu(false)
    history.push(url)
  }

  const openModal = () => {
    setIsOpen(true);
  }

  /***** desktop menu click event ******/
  const desktopLinkTo = (url) => {
    setSelectedPage(url);
    history.push(url)
  }

  return (
    <div>
      <EmptyDiv />
      <HeaderContainer className="container">
        <MenuIconBlock onClick={() => setIsMobileMenu(true)}>
          <MenuIcon />
        </MenuIconBlock>
        <Logo src={LogoImg} alt="logo" onClick={() =>desktopLinkTo('/')} />
        <SignInBlock src={Sign} />
        <HeaderMenu>
            <MenuItem className={selectedPage === '/liquidity' ? 'active' : 'item'} onClick={() => desktopLinkTo('/liquidity')}>LGE</MenuItem>
            <MenuItem className={selectedPage === '/stake' ? 'active' : 'item'} onClick={() => desktopLinkTo('/stake')}>{t('STAKE')}</MenuItem>
            <MenuItem className={selectedPage === '/leaderboard' ? 'active' : 'item'} onClick={() => desktopLinkTo('/leaderboard')}>{t('LEADERBOARD')}</MenuItem>
            <MenuItem className={selectedPage === '/create' ? 'active' : 'item'} onClick={() => desktopLinkTo('/create')}>{t('CREATE_INDEX')}</MenuItem>
            <MenuItem className={selectedPage === '/governance' ? 'active' : 'item'} onClick={() => desktopLinkTo('/governance')}><span className="comming-soon">comming soon</span>{t('GOVERNANCE')}</MenuItem>
          <Button onClick={openModal} className="white-btn">{t('WALLET')}</Button>
        </HeaderMenu>
        {
          isMobileMenu &&
          <>
            <OverLay onClick={() => setIsMobileMenu(false)} />
          </>
        }
        <MobileMenu style={{ width: isMobileMenu && '75%' }}>
          <div>
            <MobileImg src={LogoImg} alt="logo" onClick={() => linkTo('/')} />
            <MobileItem onClick={() => linkTo('/liquidity')}>
              <span>LGE</span>
            </MobileItem>
            <MobileItem onClick={() => linkTo('/stake')}>
              <span>{t('STAKE')}</span>
            </MobileItem>
            <MobileItem onClick={() => linkTo('/leaderboard')}>
              <span>{t('LEADERBOARD')}</span>
            </MobileItem>
            <MobileItem onClick={() => linkTo('/create')}>
              <span>{t('CREATE_INDEX')}</span>
            </MobileItem>
            <MobileItem onClick={() => linkTo('/governance')}>
              <span>{t('GOVERNANCE')}</span>
            </MobileItem>
          </div>
        </MobileMenu>
      </HeaderContainer>
      <SignModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
    </div>
  )
}

const MenuIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="#1d144f" className="bi bi-list" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
    </svg>
  )
}

export default Header;