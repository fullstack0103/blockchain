import styled from 'styled-components';
import { BetweenDiv } from '../Shared/CommonStyle'

export const HeaderContainer = styled(BetweenDiv)`
  padding: 6px 15px;
  @media (max-width: 768px) {
    padding: 6px 13px;
    background-color: #FFFFFF;
    z-index: 900 !important;
    max-width: 100vw;
    width: 100vw;
    position: fixed !important;
    top: 0px !important;
    left: 0px !important;
  }
`;

export const Logo = styled.img`
  cursor: pointer;
  margin: 0;
  height: 52px;
  width: auto;
`;

export const HeaderMenu = styled(BetweenDiv)`
  display: flex;
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }
  }
`;

export const MenuItem = styled.span`
  margin-right: 27px;
  position: relative;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #0B0A3C;
  transition: 0.2s;
  &: hover {
    color: #2D2CE5;
  }
  &::before {
    position: absolute;
    bottom: -3px !important;
    height: 2px;
    content: '';
    background-color: #4F4CD1 !important;
    width: 0px;
    left: 0 !important;
    right: 0 !important;
    -webkit-transition: 0.2s;
    transition: 0.2s;
  }
  &.active::before {
    width: 100% !important;
  }
  & > .comming-soon {
    position: absolute;
    left: 0px;
    top: -12px;
    font-weight: 500;
    font-size: 9px;
    color: #0B0A3C !important;
    width: 100%;
    text-align: right;
  }
`;

export const Button = styled.button`
  width: 104px;
  height: 36px;
`;

export const EmptyDiv = styled.div`
    width: 100%;
    height: 64px;
    display: none;
    @media (max-width: 768px) {
        display: block;
    }
`;

export const MenuIconBlock = styled.div`
    display: none;
    width: 30px;
    height: 30px;
    @media (max-width: 768px) {
        display: flex;
        juistify-content: center;
        align-items: center;
    }
`;

export const MobileMenu = styled.div`
    & > div {
        padding: 1.8em 1.8em 1.8em 1.8em;
        font-size: 1.15em;
    }
    position: fixed;
    right: inherit;
    z-index: 1100;
    width: 0%;
    height: 100%;
    transition: all 0.5s ease 0s;
    top: 0px;
    left: 0px;
    overflow: auto;
    background: rgb(255, 255, 255);
`;

export const MobileImg = styled.img`
    padding-bottom: 25px;
    width: 100%;
`;

export const MobileItem = styled.div`
    padding: 24px 24px 24px 0px;
    border-bottom: 1px solid #efefef;
    & > span {
        font-weight: 500 !important;
        font-size: 24px !important;
        margin-top: 24px !important;
        margin-bottom: 24px !important;
        transition: 0.2s;
    }
`;

export const OverLay = styled.div`
    position: fixed;
    z-index: 1000;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    opacity: 1;
    transition: opacity 0.3s ease 0s;
    top: 0px;
    left: 0px;
`;

export const SignInBlock = styled.img`
    width:24px;
    height: 24px;
    display: none;
    @media (max-width: 768px) {
        display: block;
    }
`;