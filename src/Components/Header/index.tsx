import React from 'react';

import { Container, Content } from './styles';

interface HeaderProps {
  onOpenAddEmployeeModal: () => void;
}

export function Header({ onOpenAddEmployeeModal }: HeaderProps): JSX.Element {
  return (
    <Container>
      <Content>
        <button type="submit" onClick={onOpenAddEmployeeModal}>
          Add employee
        </button>
      </Content>
    </Container>
  );
}
