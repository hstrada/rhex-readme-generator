import styled from 'styled-components';

import { DefaultContainer } from '../Default/styles';

export const Container = styled(DefaultContainer)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.tertiary};
  &:hover {
    background-color: #085ddd;
  }
`;
