import React, { FC, HTMLAttributes, ReactNode } from 'react';

export interface ThingProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const Thing: FC<ThingProps> = ({ children }) => {
  return <div>{children || `the snozzberries taste like snozzberries`}</div>;
};
