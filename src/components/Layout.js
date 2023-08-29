import styled from 'styled-components';

export const Layout = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(4)};
`;
