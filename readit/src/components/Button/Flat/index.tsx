import React from 'react';
import { Props } from './interface';

import { Container } from './styles';

const Flat: React.FC<Props> = ({
  label,
  small = false,
  onClick,
  ...rest
}: Props) => {
  return (
    <Container onClick={onClick} small={small} {...rest}>
      {label}
    </Container>
  );
};

export default Flat;
