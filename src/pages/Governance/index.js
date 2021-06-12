import React, { useEffect, useState } from 'react';
import PageHeader from '../../components/PageHeader';
import ProposalTable from '../../components/ProposalTable';
import { proposalData } from '../../dumy';

const Governance = () => {
  const [proposal, setProposal] = useState([]);

  useEffect(() => {
    setProposal(proposalData);
  }, [])

  return (
    <>
      <PageHeader title="Governance" />
      <ProposalTable proposal={proposal} />
    </>
  )
}

export default Governance;