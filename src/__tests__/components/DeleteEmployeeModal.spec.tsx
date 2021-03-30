import { fireEvent, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import mockAxios from 'jest-mock-axios';
import { DeleteEmployeeModal } from '../../Components/DeleteEmployeeModal';

const mockedOnRequestClose = jest.fn();

describe('DeleteEmployeeModal Component', () => {
  afterEach(() => {
    // cleaning up the mess left behind the previous test
    mockAxios.reset();
  });

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
      <DeleteEmployeeModal
        employee={fakeEmployee}
        isOpen
        onRequestClose={mockedOnRequestClose}
      />,
    );

    const closeModalButton = getByTestId('closeModalButton');
    fireEvent.click(closeModalButton);
    expect(mockedOnRequestClose).toHaveBeenCalled();
  });

  it('shoul be able to delete employee', async () => {
    const { getByText } = render(
      <DeleteEmployeeModal
        employee={fakeEmployee}
        isOpen
        onRequestClose={mockedOnRequestClose}
      />,
    );

    const deleteEmployeeButton = getByText('Delete');
    fireEvent.click(deleteEmployeeButton);

    await waitFor(() => {
      expect(mockAxios.delete).toHaveBeenCalledWith(
        `/nutemployee/${fakeEmployee._id}`,
      );
    });
  });
});
