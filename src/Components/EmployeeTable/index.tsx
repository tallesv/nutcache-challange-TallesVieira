import React from 'react';
import { Container } from './styles';

interface Employee {
  _id: string;
  name: string;
  birthDate: Date;
  gender: string;
  email: string;
  cpf: string;
  startDate: Date;
  team: string;
}

interface EmployeeTableProps {
  employees: Employee[];
  onEditEmployee: (employee: Employee) => void;
  onDeleteEmployee: (employee: Employee) => void;
}

export function EmployeeTable({
  employees,
  onEditEmployee,
  onDeleteEmployee,
}: EmployeeTableProps): JSX.Element {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Birth Date</th>
            <th>Gender</th>
            <th>Email</th>
            <th>CPF</th>
            <th>Start Date</th>
            <th>Team</th>
            <th>Options</th>
          </tr>
        </thead>

        <tbody>
          {employees.map(employee => (
            <tr key={employee._id}>
              <td>{employee.name}</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(employee.birthDate),
                )}
              </td>
              <td>{employee.gender}</td>
              <td>{employee.email}</td>
              <td>{employee.cpf}</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR')
                  .format(new Date(employee.startDate))
                  .slice(3)}
              </td>
              <td>{employee.team}</td>
              <td>
                <button type="button" onClick={() => onEditEmployee(employee)}>
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => onDeleteEmployee(employee)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
