import React from 'react';

import { Container, Content } from './styles';

export function Header(): JSX.Element {
  return (
    <Container>
      <Content>
        <button type="submit">Add employee</button>
      </Content>
    </Container>
  );
}
