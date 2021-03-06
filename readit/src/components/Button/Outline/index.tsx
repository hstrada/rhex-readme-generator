import React from 'react';

import { Container } from './styles';

import { Props } from './interface';

const Outline: React.FC<Props> = ({ onClick, label, ...rest }: Props) => {
  return (
    <Container onClick={onClick} {...rest}>
      {label}
    </Container>
  );
};

export default Outline;
