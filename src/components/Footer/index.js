import React from 'react'
import {
  Content,
  SocialIconSection,
  FooterMenuItem,
  FooterTerm
} from './style';
import { useTranslation } from 'react-i18next';
import facebookImg from '../../assets/img/facebook.svg';
import instragramImg from '../../assets/img/instragram.svg';
import twitterImg from '../../assets/img/twitter.svg';
import linkdinImg from '../../assets/img/linkdin.svg';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Content>
      <div className="d-flex">
        <SocialIconSection href="#">
          <img src={facebookImg} alt="facebook" />
        </SocialIconSection>
        <SocialIconSection href="#">
          <img src={linkdinImg} alt="linkdin" />
        </SocialIconSection>
        <SocialIconSection href="#">
          <img src={instragramImg} alt="instragram" />
        </SocialIconSection>
        <SocialIconSection href="#">
          <img src={twitterImg} alt="twitter" />
        </SocialIconSection>
      </div>
      <div className="d-flex">
        <FooterMenuItem>{t('INFO')}</FooterMenuItem>
        <FooterMenuItem>{t('SUPPORT')}</FooterMenuItem>
        <FooterMenuItem>{t('LANGUAGE')}</FooterMenuItem>
      </div>
      <div className="d-flex">
        <FooterTerm>{t('TERMS_OF_USE')}</FooterTerm>
        <FooterTerm>{t('PRIVACY_POLICY')}</FooterTerm>
      </div>
    </Content>
  )
}

export default Footer;