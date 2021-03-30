import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { EditEmployeeModal } from '../../Components/EditEmployeeModal';

const mockedOnRequestClose = jest.fn();

describe('EditEmployeeModal Component', () => {
  const fakeEmployee = {
    _id: '1',
    name: 'Jon Doe',
    gender: 'Male',
    email: 'nutcache@nutcache.com',
    cpf: '22231213',
    birthDate: new Date('2013-03-01T01:10:00'),
    startDate: new Date('2013-03-01T01:10:00'),
    team: 'frontend',
  };
  it('should be able to close modal', () => {
    const { getByTestId } = render(
      <EditEmployeeModal
        employee={fakeEmployee}
        isOpen
        onRequestClose={mockedOnRequestClose}
      />,
    );

    const closeModalButton = getByTestId('closeModalButton');
    fireEvent.click(closeModalButton);
    expect(mockedOnRequestClose).toHaveBeenCalled();
  });

  it('should be able to display required inputs errors', () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(
      <EditEmployeeModal
        employee={fakeEmployee}
        isOpen
        onRequestClose={mockedOnRequestClose}
      />,
    );

    const nameInput = getByPlaceholderText('* Employee name');
    const genderInput = getByTestId('gender');
    const emailInput = getByPlaceholderText('* Email');
    const cpfInput = getByPlaceholderText('* CPF');
    const editEmployeeButton = getByText('Edit');

    fireEvent.change(nameInput, { target: { value: '' } });
    fireEvent.change(genderInput, { target: { value: '' } });
    fireEvent.change(emailInput, { target: { value: '' } });
    fireEvent.change(cpfInput, { target: { value: '' } });

    fireEvent.click(editEmployeeButton);

    expect(getByText('Name input is required!')).toBeInTheDocument();
    expect(getByText('Gender input is required!')).toBeInTheDocument();
    expect(getByText('Email input is required!')).toBeInTheDocument();
    expect(getByText('CPF input is required!')).toBeInTheDocument();
  });
});
