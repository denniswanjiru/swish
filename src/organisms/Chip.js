import React from 'react';

import Cancel from '../atoms/Cancel';
import ChipTitle from '../atoms/ChipTitle';
import ChipWrapper from '../molecules/ChipWrapper';
import cancelIcon from '../assets/icons/cancel.svg';

export default function Chip({ title, id, company, handleClick }) {
  const chipTitle = `${company} - ${title}`;

  return (
    <ChipWrapper>
      <ChipTitle>{chipTitle.length > 15 ? chipTitle.substr(0, 15) + '...' : chipTitle}</ChipTitle>
      <Cancel src={cancelIcon} alt="Cancel"  onClick={() => handleClick(id)}/>
    </ChipWrapper>
  )
}
