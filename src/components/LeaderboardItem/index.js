import React from 'react';
import {
  Content,
  Divider,
  Img,
  CardHeaderSection,
  Description,
  PercentSection,
  PercentItem,
  UpArrow,
  PercentDescription,
  Percent,
  CardFooterSection,
  Detail,
  DetailSpanTag,
  DetailImgTag,
  MedalSection,
  MedalHeader,
  MedalFooter
} from './style';
import uparrowImg from '../../assets/img/uparrow.svg';
import downarrowImg from '../../assets/img/downarrow.svg';
import medalHeaderImg from '../../assets/img/medalHeader.svg';
import medalFooterImg from '../../assets/img/medalFooter.svg';
import readMoreImg from '../../assets/img/readMore.svg';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

const LeaderboardItem = (props) => {
  const { data, index } = props;
  const { t } = useTranslation();
  const history = useHistory();

  return (
    <Content onClick={() => history.push(`/portfolio/${data['id']}`)}>
      <MedalSection>
        <MedalHeader src={medalHeaderImg} alt="medalHeader" />
        <MedalFooter backgroundImg={medalFooterImg}>{index}</MedalFooter>
      </MedalSection>
      <CardHeaderSection>
        <Img src={data['image']} alt={data['name']} />
        <Description>{data['name']}</Description>
      </CardHeaderSection>
      <Divider />
      <PercentSection>
        <PercentItem>
          <div className="d-flex align-items-center">
            <UpArrow src={parseFloat(data['btc_index']['daily_percent_change']) > 0 ? uparrowImg : downarrowImg} alt="uparrow" />
            <Percent style={{ color: parseFloat(data['btc_index']['daily_percent_change']) > 0 ? '#16C784' : '#FF003D' }}>{data['btc_index']['daily_percent_change']}</Percent>
          </div>
          <PercentDescription>{t('TODAY')}</PercentDescription>
        </PercentItem>
        <PercentItem>
          <div className="d-flex align-items-center">
            <UpArrow src={parseFloat(data['btc_index']['cumulative_change']) > 0 ? uparrowImg : downarrowImg} alt="uparrow" />
            <Percent style={{ color: parseFloat(data['btc_index']['cumulative_change']) > 0 ? '#16C784' : '#FF003D' }}>{data['btc_index']['cumulative_change']}</Percent>
          </div>
          <PercentDescription>{t('SINCE_CREATION')}</PercentDescription>
        </PercentItem>
      </PercentSection>
      <Divider />
      <CardFooterSection>
        {
          data['components'].map((item, i) => (
            i < 4 &&
            <Detail key={i}>
              <DetailSpanTag>{item['percent_of_set']}%</DetailSpanTag>
              <DetailImgTag src={item['image']} alt="detailImage" />
              <DetailSpanTag>{item['symbol']}</DetailSpanTag>
            </Detail>
          ))
        }
        <Detail>
          <DetailSpanTag>12%</DetailSpanTag>
          <DetailImgTag src={readMoreImg} alt="detailImage" />
          <DetailSpanTag>{t('OTHERS')}</DetailSpanTag>
        </Detail>
      </CardFooterSection>
    </Content>
  )
}

export default LeaderboardItem;