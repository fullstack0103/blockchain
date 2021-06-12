import React, { useEffect, useState } from 'react';
import ExploreAllIndex from '../../components/ExploreAllIndex';
import PageHeader from '../../components/PageHeader';
import { byTypeExplore } from '../../dumy';

const Leaderboard = () => {
  const [typeExplore, setTypeExplore] = useState([])

  useEffect(() => {
    setTypeExplore(byTypeExplore)
  }, [])

  const tableProps = {
    typeExplore: typeExplore,
    setTypeExplore: setTypeExplore,
    isFlag: true,
    byTypeExplore: byTypeExplore
  }

  return (
    <>
      <PageHeader title="Leaderboard" />
      <ExploreAllIndex {...tableProps} />
    </>
  )
}

export default Leaderboard;