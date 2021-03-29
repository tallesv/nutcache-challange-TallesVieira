import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { Header } from '../../Components/Header';

const mockedOpenAddEmployeeModal = jest.fn();
const mockedOpenEditEmployeeModal = jest.fn();
const mockedOpenDeleteEmployeeModal = jest.fn();

describe('Header Component', () => {
  it('sould open add employee modal', () => {
    const { getByText } = render(
      <Header
        onOpenAddEmployeeModal={mockedOpenAddEmployeeModal}
        onOpenEditPreviouslyRegistredEmployee={mockedOpenEditEmployeeModal}
        onOpenDeletePreviouslyRegistredEmployee={mockedOpenDeleteEmployeeModal}
      />,
    );
    const addEmployeeButton = getByText('Add employee');

    fireEvent.click(addEmployeeButton);

    expect(mockedOpenAddEmployeeModal).toHaveBeenCalled();
  });

  it('sould open edit employee modal', () => {
    const { getByText } = render(
      <Header
        onOpenAddEmployeeModal={mockedOpenAddEmployeeModal}
        onOpenEditPreviouslyRegistredEmployee={mockedOpenEditEmployeeModal}
        onOpenDeletePreviouslyRegistredEmployee={mockedOpenDeleteEmployeeModal}
      />,
    );
    const editEmployeeButton = getByText('Edit previously registred employee');

    fireEvent.click(editEmployeeButton);

    expect(mockedOpenEditEmployeeModal).toHaveBeenCalled();
  });

  it('sould open delete employee modal', () => {
    const { getByText } = render(
      <Header
        onOpenAddEmployeeModal={mockedOpenAddEmployeeModal}
        onOpenEditPreviouslyRegistredEmployee={mockedOpenEditEmployeeModal}
        onOpenDeletePreviouslyRegistredEmployee={mockedOpenDeleteEmployeeModal}
      />,
    );
    const deleteEmployeeButton = getByText(
      'Delete previously registred employee',
    );

    fireEvent.click(deleteEmployeeButton);

    expect(mockedOpenDeleteEmployeeModal).toHaveBeenCalled();
  });
});
