import React, { useEffect, useState } from 'react';
import PageHeader from '../../components/PageHeader';
import LeaderboardSwiper from '../../components/LeaderboardSwiper';
import { byTypeExplore } from '../../dumy';
import ExploreAllIndex from '../../components/ExploreAllIndex';

const Home = () => {
  const [typeExplore, setTypeExplore] = useState([])

  useEffect(() => {
    setTypeExplore(byTypeExplore)
  }, [])

  const tableProps = {
    typeExplore: typeExplore,
    setTypeExplore: setTypeExplore,
    isFlag: false,
    byTypeExplore: byTypeExplore
  }

  return (
    <>
      <PageHeader title="Metaindex" />
      <LeaderboardSwiper typeExplore={typeExplore} />
      <ExploreAllIndex {...tableProps} />
    </>
  )
}

export default Home;