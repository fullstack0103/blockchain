import styled from 'styled-components';
import { AroundDiv } from '../Shared/CommonStyle';

export const Content = styled.div`
  width: 340px;
  background: #FFFFFF;
  box-shadow: 0px 15px 29px rgba(217, 217, 236, 0.519477);
  border-radius: 50px;
  padding: 24px 24px;
  position: relative;
  transition: 0.2s;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left:auto;
  margin-right:auto;
  &: hover {
    transform: scale(1.07);
  }
  cursor: pointer;
`;

export const Divider = styled.div`
  border: 1px solid #E5E5EA;
`;

export const CardHeaderSection = styled.div`
  display:flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-bottom: 34px;
`;

export const Img = styled.img`
  width: 49px;
  height: 49px;
`;

export const Description = styled.p`
  margin: 10px 0px 0px 0px;
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #0B0A3C;
`;

export const PercentSection = styled(AroundDiv)`
  padding: 15px 0px;
`;

export const PercentItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UpArrow = styled.img`
  width: 12px;
  height: 6px;
`;

export const Percent = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  margin-left: 5px;
`;

export const PercentDescription = styled.span`
  font-family: Inter;
  font-style: italic;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
  margin-left: 16px;
`;

export const CardFooterSection = styled.div`
  padding-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Detail = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const DetailSpanTag = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 12px;
  color: #0B0A3C;
`;

export const DetailImgTag = styled.img`
  width: 30px;
  height: 30px;
  margin: 5px 0px;
`;

export const MedalSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 0px;
  right: 45px;
`;

export const MedalHeader = styled.img`
  width: 28.48px;
  height: 29.64px;
`;

export const MedalFooter = styled.div`
  width: 27.5px;
  height: 27.5px;
  background-size: cover;
  background-position: center;
  background-image:url(${({backgroundImg}) => backgroundImg || ''});
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -3px;
  font-family: Inter;
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  color: #FFFFFF;
`;