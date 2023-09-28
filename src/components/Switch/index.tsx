import React from 'react';
import * as S from '@radix-ui/react-switch';

import './styles.css';

export const Switch = () => (
  <S.Root className="SwitchRoot" id="airplane-mode">
    <S.Thumb className="SwitchThumb" />
  </S.Root>
);