import React, { useState } from 'react';
import { AddEmployeeModal } from '../../Components/AddEmployeeModal';
import { DeleteEmployeeModal } from '../../Components/DeleteEmployeeModal';
import { EditEmployeeModal } from '../../Components/EditEmployeeModal';
import { EmployeeTable } from '../../Components/EmployeeTable';
import { Header } from '../../Components/Header';
import { Employee } from '../../redux/modules/employees/type';

export function Dashboard(): JSX.Element {
  const [isAddEmployeeModalOpen, setIsAddEmployeeModalOpen] = useState(false);
  const [isDeleteEmployeeModalOpen, setIsDeleteEmployeeModalOpen] = useState(
    false,
  );
  const [isEditEmployeeModalOpen, setIsEditEmployeeModalOpen] = useState(false);
  const [updateEmployeeTable, setUpdateEmployeeTable] = useState(false);

  const [employeeToDelete, setEmployeeToDelete] = useState<Employee>(
    {} as Employee,
  );
  const [employeeToEdit, setEmployeeToEdit] = useState<Employee>(
    {} as Employee,
  );

  function handleOpenAddEmployeeModal() {
    setIsAddEmployeeModalOpen(true);
  }

  function handleCloseAddEmployeeModal() {
    setIsAddEmployeeModalOpen(false);
    setUpdateEmployeeTable(!updateEmployeeTable);
  }

  function handleEditEmployee(emplopyee: Employee) {
    setEmployeeToEdit(emplopyee);
    setIsEditEmployeeModalOpen(true);
  }

  function handleCloseEditEmployeeModal() {
    setIsEditEmployeeModalOpen(false);
    setUpdateEmployeeTable(!updateEmployeeTable);
  }

  function handleDeleteEmployee(emplopyee: Employee) {
    setEmployeeToDelete(emplopyee);
    setIsDeleteEmployeeModalOpen(true);
  }

  function handleCloseDeleteEmployeeModal() {
    setIsDeleteEmployeeModalOpen(false);
    setUpdateEmployeeTable(!updateEmployeeTable);
  }

  return (
    <>
      <Header onOpenAddEmployeeModal={handleOpenAddEmployeeModal} />

      <AddEmployeeModal
        isOpen={isAddEmployeeModalOpen}
        onRequestClose={handleCloseAddEmployeeModal}
      />

      <EditEmployeeModal
        employee={employeeToEdit}
        isOpen={isEditEmployeeModalOpen}
        onRequestClose={handleCloseEditEmployeeModal}
      />

      <DeleteEmployeeModal
        employee={employeeToDelete}
        isOpen={isDeleteEmployeeModalOpen}
        onRequestClose={handleCloseDeleteEmployeeModal}
      />

      <EmployeeTable
        onDeleteEmployee={employee => handleDeleteEmployee(employee)}
        onEditEmployee={employee => handleEditEmployee(employee)}
        onUpdateTable={updateEmployeeTable}
      />
    </>
  );
}
