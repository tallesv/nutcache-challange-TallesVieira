import React from 'react';
import { Container } from './styles';

export function EmployeeTable(): JSX.Element {
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
          <tr>
            <td>Talles</td>
            <td>20/02/2000</td>
            <td>Masculino</td>
            <td>talles@mail.com</td>
            <td>70788594486</td>
            <td>20/02/2020</td>
            <td>Front end</td>
            <td>
              <button type="button">Edit</button>
              <button type="button">Delete</button>
            </td>
          </tr>

          <tr>
            <td>Talles</td>
            <td>20/02/2000</td>
            <td>Masculino</td>
            <td>talles@mail.com</td>
            <td>70788594486</td>
            <td>20/02/2020</td>
            <td>Front end</td>
            <td className="options">
              <button type="button">Edit</button>
              <button type="button">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
