import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AddEmployeeModal } from '../../Components/AddEmployeeModal';

const mockedOnRequestClose = jest.fn();
const mockedAxios = jest.fn(() => Promise.resolve());

jest.mock('../../services/api', () => {
  return {
    api: () => ({
      post: mockedAxios,
    }),
  };
});

describe('AddEmployeeModal Component', () => {
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

  /* it('should be able to add a employee', async () => {
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
    fireEvent.change(genderInput, { target: { value: 'Male' } });
    fireEvent.change(emailInput, { target: { value: 'johndoe@mail.com' } });
    fireEvent.change(cpfInput, { target: { value: '111.000.222-76' } });
    fireEvent.change(startDateInput, {
      target: { value: '2013-03-01T01:10:00' },
    });

    fireEvent.click(addEmployeeButton);

    await waitFor(() => {
      expect(mockedAxios).toHaveBeenCalled();
    });
  }); */
});
