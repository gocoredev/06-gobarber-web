import React from 'react';
import * as S from './styles'

interface TolltipProps {
    title: string;
    className?: string;
}

const Tooltip: React.FC<TolltipProps> = ({title, children, className}) => {
  return (
  <S.Container className={className}>
      {children}
      <span>{title}</span>
  </S.Container>)
}
export default Tooltip;
