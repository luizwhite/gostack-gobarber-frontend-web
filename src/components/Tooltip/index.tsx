import React from 'react';

import { Container } from './styles';

interface TooltipProps {
  title: string;
  className?: string;
  style?: object;
}

const Tooltip: React.FC<TooltipProps> = ({
  title,
  children,
  className,
  style,
}) => (
  <Container {...{ className, style }}>
    <span>{title}</span>
    {children}
  </Container>
);

export default Tooltip;
