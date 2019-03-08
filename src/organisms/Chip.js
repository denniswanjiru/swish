import React from 'react';

import Cancel from '../atoms/Cancel';
import ChipTitle from '../atoms/ChipTitle';
import ChipWrapper from '../molecules/ChipWrapper';
import cancelIcon from '../assets/icons/cancel.svg';

export default function Chip() {
  return (
    <ChipWrapper>
      <ChipTitle>Software Engine...</ChipTitle>
      <Cancel src={cancelIcon} alt="Cancel" />
    </ChipWrapper>
  )
}
