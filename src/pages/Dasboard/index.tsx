import React, { useState } from 'react';
import { AddEmployeeModal } from '../../Components/AddEmployeeModal';
import { EmployeeTable } from '../../Components/EmployeeTable';
import { Header } from '../../Components/Header';

export function Dashboard(): JSX.Element {
  const [isAddEmployeeModalOpen, setIsAddEmployeeModalOpen] = useState(false);

  function handleOpenAddEmployeeModal() {
    setIsAddEmployeeModalOpen(true);
  }

  function handleCloseAddEmployeeModal() {
    setIsAddEmployeeModalOpen(false);
  }

  return (
    <>
      <Header onOpenAddEmployeeModal={handleOpenAddEmployeeModal} />

      <AddEmployeeModal
        isOpen={isAddEmployeeModalOpen}
        onRequestClose={handleCloseAddEmployeeModal}
      />

      <EmployeeTable />
    </>
  );
}
