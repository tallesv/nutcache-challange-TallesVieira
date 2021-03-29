import React, { useCallback, useEffect, useState } from 'react';
import { AddEmployeeModal } from '../../Components/AddEmployeeModal';
import { DeleteEmployeeModal } from '../../Components/DeleteEmployeeModal';
import { EditEmployeeModal } from '../../Components/EditEmployeeModal';
import { EmployeeTable } from '../../Components/EmployeeTable';
import { Header } from '../../Components/Header';
import { TeamsCard } from '../../Components/TeamsCard';
import { api } from '../../services/api';
import { Employee } from '../../types/Employee';

export function Dashboard(): JSX.Element {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [teamsData, setTeamsData] = useState({
    total: 0,
    mobile: 0,
    frontend: 0,
    backend: 0,
  });

  const [isAddEmployeeModalOpen, setIsAddEmployeeModalOpen] = useState(false);
  const [isDeleteEmployeeModalOpen, setIsDeleteEmployeeModalOpen] = useState(
    false,
  );
  const [isEditEmployeeModalOpen, setIsEditEmployeeModalOpen] = useState(false);

  const [employeeToDelete, setEmployeeToDelete] = useState<Employee>(
    {} as Employee,
  );
  const [employeeToEdit, setEmployeeToEdit] = useState<Employee>(
    {} as Employee,
  );

  function loadEmployees() {
    api.get('/nutemployee').then(response => {
      const employeesFromApi = response.data as Employee[];
      setEmployees(employeesFromApi);
      setTeamsData({
        total: employeesFromApi.length,
        mobile: employeesFromApi.filter(employee => employee.team === 'mobile')
          .length,
        frontend: employeesFromApi.filter(
          employee => employee.team === 'frontend',
        ).length,
        backend: employeesFromApi.filter(
          employee => employee.team === 'backend',
        ).length,
      });
    });
  }

  function handleOpenAddEmployeeModal() {
    setIsAddEmployeeModalOpen(true);
  }

  const handleCloseAddEmployeeModal = useCallback(() => {
    setIsAddEmployeeModalOpen(false);
    loadEmployees();
  }, []);

  function handleEditEmployee(emplopyee: Employee) {
    setEmployeeToEdit(emplopyee);
    setIsEditEmployeeModalOpen(true);
  }

  const handleCloseEditEmployeeModal = useCallback(() => {
    setIsEditEmployeeModalOpen(false);
    loadEmployees();
  }, []);

  function handleDeleteEmployee(emplopyee: Employee) {
    setEmployeeToDelete(emplopyee);
    setIsDeleteEmployeeModalOpen(true);
  }

  const handleCloseDeleteEmployeeModal = useCallback(() => {
    setIsDeleteEmployeeModalOpen(false);
    loadEmployees();
  }, []);

  useEffect(() => {
    loadEmployees();
  }, []);

  return (
    <>
      <Header
        onOpenAddEmployeeModal={handleOpenAddEmployeeModal}
        onOpenEditPreviouslyRegistredEmployee={() =>
          handleEditEmployee(employees[employees.length - 1])
        }
        onOpenDeletePreviouslyRegistredEmployee={() =>
          handleDeleteEmployee(employees[employees.length - 1])
        }
      />
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

      <TeamsCard
        totalEmployees={teamsData.total}
        mobileEmployees={teamsData.mobile}
        frontendEmployees={teamsData.frontend}
        backendEmployees={teamsData.backend}
      />

      <EmployeeTable
        employees={employees}
        onDeleteEmployee={employee => handleDeleteEmployee(employee)}
        onEditEmployee={employee => handleEditEmployee(employee)}
      />
    </>
  );
}
