import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';

import closeImg from '../../assets/close.svg';

import { Container } from './styles';
import { api } from '../../services/api';
import 'react-datepicker/dist/react-datepicker.css';

interface AddEmployeeProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

type Fields = {
  name: string;
  gender: string;
  birthDate: Date | undefined;
  email: string;
  cpf: string;
  startDate: Date | undefined;
  team: string;
};

export function AddEmployeeModal({
  isOpen,
  onRequestClose,
}: AddEmployeeProps): JSX.Element {
  const [emptyFields, setEmptyFields] = useState<string[]>([]);
  const [fields, setFields] = useState<Fields>({
    name: '',
    birthDate: undefined,
    gender: '',
    email: '',
    cpf: '',
    startDate: undefined,
    team: '-',
  });

  async function handleSubmit(formData: FormEvent) {
    formData.preventDefault();

    await api.post('/nutemployee', fields);
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
      <Container onSubmit={handleSubmit}>
        <h2>Add employee</h2>

        <input
          placeholder="Employee name"
          name="name"
          value={fields.name}
          onChange={e => setFields({ ...fields, name: e.target.value })}
        />
        <span>Error</span>
        <DatePicker
          className="datePicker"
          selected={fields.birthDate}
          onChange={(date: Date) => setFields({ ...fields, birthDate: date })}
          placeholderText="Birth Date"
        />
        <select
          name="gender"
          value={fields.gender}
          onChange={e => setFields({ ...fields, gender: e.target.value })}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input
          placeholder="Email"
          name="email"
          value={fields.email}
          onChange={e => setFields({ ...fields, email: e.target.value })}
        />
        <input
          placeholder="CPF"
          name="cpf"
          value={fields.cpf}
          onChange={e => setFields({ ...fields, cpf: e.target.value })}
        />
        <DatePicker
          className="datePicker"
          selected={fields.startDate}
          onChange={(date: Date) => setFields({ ...fields, startDate: date })}
          placeholderText="Start Date"
        />
        <select
          value={fields.team}
          onChange={e => setFields({ ...fields, team: e.target.value })}
        >
          <option value="-">-</option>
          <option value="mobile">Mobile</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
        </select>

        <button type="submit">Add</button>
      </Container>
    </Modal>
  );
}
