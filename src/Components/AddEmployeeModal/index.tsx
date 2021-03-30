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
    team: '',
  });

  function validation() {
    setEmptyFields([]);
    const errors: string[] = [];

    Object.entries(fields).forEach(fieldEntry => {
      if (
        (fieldEntry[0] !== 'team' && fieldEntry[1] === '') ||
        fieldEntry[1] === undefined ||
        fieldEntry[1] === null
      ) {
        errors.push(fieldEntry[0]);
      }
    });

    setEmptyFields(errors);
    return errors.length === 0;
  }

  function handleCloseForm() {
    setFields({
      name: '',
      birthDate: undefined,
      gender: '',
      email: '',
      cpf: '',
      startDate: undefined,
      team: '',
    });
    setEmptyFields([]);
    onRequestClose();
  }

  async function handleSubmit(formData: FormEvent) {
    formData.preventDefault();

    if (validation()) {
      await api.post('/nutemployee', fields);
      handleCloseForm();
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      ariaHideApp={false}
    >
      <button
        type="button"
        data-testid="closeModalButton"
        onClick={handleCloseForm}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container onSubmit={handleSubmit}>
        <h2>Add employee</h2>
        <input
          placeholder="* Employee name"
          name="name"
          value={fields.name}
          onChange={e => setFields({ ...fields, name: e.target.value })}
        />
        {emptyFields.includes('name') && <span>Name input is required!</span>}
        <DatePicker
          selected={fields.birthDate}
          onChange={(date: Date) => setFields({ ...fields, birthDate: date })}
          placeholderText="* Birth Date"
        />
        {emptyFields.includes('birthDate') && (
          <span>Birth Date input is required!</span>
        )}
        <select
          name="gender"
          data-testid="gender"
          value={fields.gender}
          onChange={e => setFields({ ...fields, gender: e.target.value })}
        >
          <option value="" disabled>
            * Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        {emptyFields.includes('gender') && (
          <span>Gender input is required!</span>
        )}
        <input
          placeholder="* Email"
          name="email"
          value={fields.email}
          onChange={e => setFields({ ...fields, email: e.target.value })}
        />
        {emptyFields.includes('email') && <span>Email input is required!</span>}
        <input
          placeholder="* CPF"
          name="cpf"
          value={fields.cpf}
          onChange={e => setFields({ ...fields, cpf: e.target.value })}
        />
        {emptyFields.includes('cpf') && <span>CPF input is required!</span>}
        <DatePicker
          selected={fields.startDate}
          onChange={(date: Date) => setFields({ ...fields, startDate: date })}
          placeholderText="* Start Date"
          dateFormat="MM/yyyy"
          showMonthYearPicker
        />
        {emptyFields.includes('startDate') && (
          <span>Start Date input is required!</span>
        )}
        <select
          name="team"
          data-testid="team"
          value={fields.team}
          onChange={e => setFields({ ...fields, team: e.target.value })}
        >
          <option value="">Team</option>
          <option value="mobile">Mobile</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
        </select>

        <button type="submit">Add</button>
      </Container>
    </Modal>
  );
}
