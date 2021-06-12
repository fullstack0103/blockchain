import styled from 'styled-components';

export const BetweenDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AroundDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const H1 = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
`;

export const WhiteBtn = styled.button`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  background: linear-gradient(85.93deg, #4F4CD1 -1.39%, #B989F8 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
  border: 1px solid #B989F8;
  transition: 0.2s;
  &: hover {
    background: linear-gradient(85.93deg, #4F4CD1 -1.39%, #B989F8 100%);
    border: none !important;
    -webkit-text-fill-color: white;
    border: 1px solid #0B0A3C;
    box-shadow: 0 6px 12px 0 rgba(35, 1, 221, 0.25);
  }
`;

export const SubTitle = styled.h2`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;
  color: #0B0A3C;
  margin-bottom: 40px;
`;

export const Span = styled.span`
  font-family: Inter;
  font-style: normal;
  font-size: 16px;
  color: #0B0A3C;
`;

export const FillButton = styled.button`
  transition: 0.2s;
  border: none;
  outline: none;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #FFFFFF;
  border-radius: 100px;
  background: linear-gradient(85.93deg, #4F4CD1 -1.39%, #B989F8 100%);
  &: hover {
    background: linear-gradient(85.93deg, #4F4CD1 -1.39%, #B989F8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border: 1px solid #B989F8;
    box-shadow: 0 6px 12px 0 rgb(35 1 221 / 25%);
  }
`;