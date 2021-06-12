import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Content,
  Title,
  Description
} from './style';

const PageHeader = (props) => {
  const { t } = useTranslation();
  const { title } = props;

  return (
    <Content className="container">
      <div>
        <Title>{title}</Title>
        <Description>{t('EXPLORE_THE_TOP_PERFORMING_INDEX_AND_TRADES_METAINDEX')}</Description>
      </div>
    </Content>
  )
}

export default PageHeader;