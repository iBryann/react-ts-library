import React, { ButtonHTMLAttributes, ReactNode } from 'react';

import { ButtonStyle } from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <ButtonStyle {...rest}>
      {children}
    </ButtonStyle>
  );
}