import React from 'react';
import { EmployeeTable } from '../../Components/EmployeeTable';
import { Header } from '../../Components/Header';

export function Dashboard(): JSX.Element {
  return (
    <>
      <Header />
      <EmployeeTable />
    </>
  );
}
