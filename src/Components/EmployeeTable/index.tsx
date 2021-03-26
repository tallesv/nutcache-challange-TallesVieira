import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';
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

export function EmployeeTable(): JSX.Element {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    api.get('/nutemployee').then(response => setEmployees(response.data));
  }, []);

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
              <td>{employee.birthDate}</td>
              <td>{employee.gender}</td>
              <td>{employee.email}</td>
              <td>{employee.cpf}</td>
              <td>{employee.startDate}</td>
              <td>{employee.team}</td>
              <td>
                <button type="button">Edit</button>
                <button type="button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
