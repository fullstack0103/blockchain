import styled from 'styled-components';
import { BetweenDiv, Span } from '../Shared/CommonStyle';

export const Content = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const FilterSection = styled(BetweenDiv)`
  flex-direction: row;
  margin-bottom: 25px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const AssetFilter = styled.div`
  display: flex;
  align-items: center;
`;

export const Filterby = styled(Span)`
  opacity: 0.5;
`;

export const AssetSection = styled(Span)`
  font-weight: bold;
  cursor: pointer;
  margin-left: 27px;
`;

export const CurrencyChange = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const CurrencyUnit = styled(Span)`
  margin-left: 20px;
  transition: 0.2s;
  height: 20px;
  cursor: pointer;
  position: relative;
  &:before {
    position: absolute;
    bottom: -4px !important;
    height: 2px;
    content: '';
    background-color: #4F4CD1 !important;
    width: 0px;
    left: 0 !important;
    right: 0 !important;
    transition: 0.2s;
  }
  &.active {
    font-weight: bold;
    &:before {
      width: 100%;
    }
  }
`;

export const FilterBlock = styled.div`
  padding: 13px 10px 25px 10px;
  position: absolute;
  background: #FFFFFF;
  box-shadow: 0px 15px 29px rgba(217, 217, 236, 0.519477);
  border-radius: 20px;
  width: 317px;
  z-index: 10;
  overflow: hidden;
`;

export const Item = styled.label`
  transition: all 0.3s;
  width: 100%;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  margin-bottom: 0px;
  cursor: pointer;
  & > .checkbox-section {
    display: flex;
    align-items: center;
    margin-right: 25px;
    input {
      width: 23px;
      height: 23px;
    }
  }
  & > .img-display-section {
    display: flex;
    align-items: center;
    > img {
      width: 28px;
      height: 28px;
    }
    > span {
      margin-left: 10px;
      font-weight: normal;
      font-size: 14px;
    }
  }

  &:hover {
    background: rgba(0,0,0,.05);
    color: rgba(0,0,0,.95);
  }
`;