import styled from 'styled-components';
import { Span } from '../Shared/CommonStyle';

export const Table = styled.table`
  background: #FFFFFF;
  width: 100%;
  border-radius: 50px;
  margin-top: 25px;
`;

export const TBody = styled.tbody`
  border-top: 1px solid #E0D8F4;
  transition: 0.2s !important;
  cursor: pointer !important;
  &: hover {
    transform: scale(1.01);
  }
  @media (max-width: 768px) {
    &: hover {
      transform: scale(1);
    }
  }
`;

export const Th = styled.th`
  padding: 25px 30px;
`;

export const HeadSpan = styled(Span)`
  opacity: 0.7;
`;

export const HeadIconDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const HeadUpDownIcon = styled.img`
  width: 11px;
  height: 7px;
  margin-left: 5px;
`;

export const FirstTd = styled.td`
  min-height: 65px;
  padding: 19px 30px 14px 30px;
  & img {
    width: 40px;
    height: 40px;
  }
`;

export const NameSpanTag = styled(Span)`
  font-weight: bold;
  margin-left: 19px;
`;

export const MarketCapSpanTag = styled(Span)`
  font-size: 14px;
`;

export const PriceSpanTag = styled(Span)`
  font-weight: bold;
  font-size: 14px;
`;

export const PrecentDivTag = styled.div`
  display: flex;
  align-items: center;
`;

export const BodyUpDownIcon = styled.img`
  width: 11.5px;
  height: 6px;
  margin-right: 7px;
`;

export const Td = styled.td`
  padding: 28px 30px 14px 30px;
`;

export const PercentTd = styled.td`
  padding: 0px 30px 18px 0px;
  &>div {
    padding: 6px 18px 6px 0px;
    &.leaderboard {
      background: #F6F6FA;
      border-radius: 1000px;
    }
  }
`;

export const SymbolDivTag = styled.div`
  display: flex;
  align-items: center;
`;

export const SymbolSpanTag = styled(Span)`
  font-weight: bold;
  font-size: 14px;
  margin-left: 5px;
`;

export const SymbolImgTag = styled.img`
  width: 28px;
  height: 28px;
`;

export const PercentSpanTag = styled(Span)`
  font-size: 14px;
  margin-left: 5px;
  @media (max-width: 576px) {
    margin-right: 15px;
  }
`;

export const OverlaySpanTag = styled(Span)`
  font-weight: bold;
  font-size: 14px;
  margin-left: 15px;
`;

export const TableBlock = styled.div`
  box-shadow: 0px 15px 29px rgba(217, 217, 236, 0.519477);
  border-radius: 50px;
  @media (max-width: 768px) {
    overflow: auto;
  }
`;

export const RiskDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 15px;
  background: #F6F6FA;
  border-radius: 10px;
  font-weight: 500;
  font-size: 12px;
  color: #000000;
  white-space: nowrap;
`;

export const NumberTh = styled.th`
  padding-left: 15px;
  & > div {
    width: 39px;
    height: 39px;
    display: flex;
    align-items: center;
    justify-content: center;
    & > div {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      font-weight: 900;
      font-size: 16px;
      color: #000000;
      &.num-1 {
        width: 100%;
        height: 100%;
        background: #FAD557;
        background: linear-gradient(90deg, #FCB12B 50%, #FAD557 50%);
        color: white;
        font-size: 25px;
      }
      &.num-2 {
        width: 33px;
        height: 33px;
        background: linear-gradient(90deg, #FCB12B 50%, #FAD557 50%);
        color: white;
        font-size: 20px;
      }
      &.num-3 {
        width: 28px;
        height: 28px;
        background: linear-gradient(90deg, #FCB12B 50%, #FAD557 50%);
        color: white;
      }
    }
    
  }
`;

export const NoData = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  font-weight: 600;
  background-color: white;
  border-radius: 50px;
`;