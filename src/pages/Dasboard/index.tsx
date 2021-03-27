import React, { useState } from 'react';
import { AddEmployeeModal } from '../../Components/AddEmployeeModal';
import { DeleteEmployeeModal } from '../../Components/DeleteEmployeeModal';
import { EmployeeTable } from '../../Components/EmployeeTable';
import { Header } from '../../Components/Header';
import { Employee } from '../../redux/modules/employees/type';

export function Dashboard(): JSX.Element {
  const [isAddEmployeeModalOpen, setIsAddEmployeeModalOpen] = useState(false);
  const [isDeleteEmployeeModalOpen, setIsDeleteEmployeeModalOpen] = useState(
    false,
  );
  const [employeeToDelete, setEmployeeToDelete] = useState<Employee>(
    {} as Employee,
  );

  function handleOpenAddEmployeeModal() {
    setIsAddEmployeeModalOpen(true);
  }

  function handleCloseAddEmployeeModal() {
    setIsAddEmployeeModalOpen(false);
  }

  function handleDeleteEmployee(emplopyee: Employee) {
    setEmployeeToDelete(emplopyee);
    setIsDeleteEmployeeModalOpen(true);
  }

  function handleCloseDeleteEmployeeModal() {
    setIsDeleteEmployeeModalOpen(false);
  }

  return (
    <>
      <Header onOpenAddEmployeeModal={handleOpenAddEmployeeModal} />

      <AddEmployeeModal
        isOpen={isAddEmployeeModalOpen}
        onRequestClose={handleCloseAddEmployeeModal}
      />

      <DeleteEmployeeModal
        employee={employeeToDelete}
        isOpen={isDeleteEmployeeModalOpen}
        onRequestClose={handleCloseDeleteEmployeeModal}
      />

      <EmployeeTable
        onDeleteEmployee={employee => handleDeleteEmployee(employee)}
      />
    </>
  );
}
