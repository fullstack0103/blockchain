import React from 'react'
import {
  Content,
  SeeAll
} from './style';
import LeaderboardItem from '../LeaderboardItem';
import { SubTitle, BetweenDiv } from '../Shared/CommonStyle';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const LeaderboardSwiper = (props) => {
  const { t } = useTranslation();
  const { typeExplore } = props;

  return (
    <>
      {
        typeExplore.length > 0 &&
        <Content>
          <BetweenDiv className="container">
            <SubTitle>{t('LEADERBOARD')}</SubTitle>
            <SeeAll><Link to="/leaderboard">{t('SEE_ALL')}</Link></SeeAll>
          </BetweenDiv>
          <div className="container">
            <div className="row">
              {
                typeExplore.map((item, i) => (
                  i < 3 && <LeaderboardItem data={item} key={i} index={i + 1} className="col-md-4 col-sm-6" />
                ))
              }
            </div>

          </div>
        </Content>
      }
    </>
  )
}

export default LeaderboardSwiper;