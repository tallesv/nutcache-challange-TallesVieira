import React from 'react';
import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';
import { api } from '../../services/api';
import { Container } from './styles';

interface Employee {
  _id: string;
  name: string;
  birthDate: Date;
  gender: string;
  email: string;
  cpf: string;
  startDate: Date;
  team: string;
}
interface RemoveEmployeeProps {
  employee: Employee;
  isOpen: boolean;
  onRequestClose: () => void;
}

export function DeleteEmployeeModal({
  employee,
  isOpen,
  onRequestClose,
}: RemoveEmployeeProps): JSX.Element {
  async function handleDeleteEmployee() {
    await api.delete(`/nutemployee/${employee._id}`);
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container>
        <h2>Delete Employee</h2>

        <span>
          Are you sure you want to delete <b>{employee.name}</b> from the table
          ?
        </span>

        <button type="button" onClick={handleDeleteEmployee}>
          Delete
        </button>
      </Container>
    </Modal>
  );
}
