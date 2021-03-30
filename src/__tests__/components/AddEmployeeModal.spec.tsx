import { fireEvent, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import mockAxios from 'jest-mock-axios';
import { AddEmployeeModal } from '../../Components/AddEmployeeModal';

const mockedOnRequestClose = jest.fn();

describe('AddEmployeeModal Component', () => {
  afterEach(() => {
    // cleaning up the mess left behind the previous test
    mockAxios.reset();
  });

  it('should be able to close modal', () => {
    const { getByTestId } = render(
      <AddEmployeeModal isOpen onRequestClose={mockedOnRequestClose} />,
    );

    const closeModalButton = getByTestId('closeModalButton');
    fireEvent.click(closeModalButton);
    expect(mockedOnRequestClose).toHaveBeenCalled();
  });

  it('should be able to display required inputs errors', () => {
    const { getByText } = render(
      <AddEmployeeModal isOpen onRequestClose={mockedOnRequestClose} />,
    );

    const addEmployeeButton = getByText('Add');

    fireEvent.click(addEmployeeButton);

    expect(getByText('Name input is required!')).toBeInTheDocument();
    expect(getByText('Birth Date input is required!')).toBeInTheDocument();
    expect(getByText('Gender input is required!')).toBeInTheDocument();
    expect(getByText('Email input is required!')).toBeInTheDocument();
    expect(getByText('CPF input is required!')).toBeInTheDocument();
    expect(getByText('Start Date input is required!')).toBeInTheDocument();
  });

  it('should be able to add a employee', async () => {
    const { getByPlaceholderText, getByTestId, getByText } = render(
      <AddEmployeeModal isOpen onRequestClose={mockedOnRequestClose} />,
    );

    const nameInput = getByPlaceholderText('* Employee name');
    const birthDateInput = getByPlaceholderText('* Birth Date');
    const genderInput = getByTestId('gender');
    const emailInput = getByPlaceholderText('* Email');
    const cpfInput = getByPlaceholderText('* CPF');
    const startDateInput = getByPlaceholderText('* Start Date');

    const addEmployeeButton = getByText('Add');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(birthDateInput, {
      target: { value: '2013-03-01T01:10:00' },
    });
    fireEvent.change(genderInput, { target: { value: 'male' } });
    fireEvent.change(emailInput, { target: { value: 'johndoe@mail.com' } });
    fireEvent.change(cpfInput, { target: { value: '111.000.222-76' } });
    fireEvent.change(startDateInput, {
      target: { value: '2013-03-01T01:10:00' },
    });

    fireEvent.click(addEmployeeButton);

    await waitFor(() => {
      expect(mockAxios.post).toHaveBeenCalledWith('/nutemployee', {
        birthDate: new Date('2013-03-01T04:10:00.000Z'),
        cpf: '111.000.222-76',
        email: 'johndoe@mail.com',
        gender: 'male',
        name: 'John Doe',
        startDate: new Date('2013-03-01T04:10:00.000Z'),
        team: '',
      });
    });
  });
});
