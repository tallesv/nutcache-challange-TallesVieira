import React from 'react';

import { Container, Content, ButtonsBox } from './styles';

interface HeaderProps {
  onOpenAddEmployeeModal: () => void;
  onOpenEditPreviouslyRegistredEmployee: () => void;
  onOpenDeletePreviouslyRegistredEmployee: () => void;
}

export function Header({
  onOpenAddEmployeeModal,
  onOpenEditPreviouslyRegistredEmployee,
  onOpenDeletePreviouslyRegistredEmployee,
}: HeaderProps): JSX.Element {
  return (
    <Container>
      <Content>
        <h1>Nutcache Challenge</h1>
        <ButtonsBox>
          <button type="button" onClick={onOpenAddEmployeeModal}>
            Add employee
          </button>
          <button type="button" onClick={onOpenEditPreviouslyRegistredEmployee}>
            Edit previously registred employee
          </button>
          <button
            type="button"
            onClick={onOpenDeletePreviouslyRegistredEmployee}
          >
            Delete previously registred employee
          </button>
        </ButtonsBox>
      </Content>
    </Container>
  );
}
