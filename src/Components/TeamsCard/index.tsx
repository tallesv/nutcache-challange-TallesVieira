import React from 'react';
import {
  AiOutlineDatabase,
  AiOutlineDesktop,
  AiOutlineMobile,
  AiOutlinePieChart,
} from 'react-icons/ai';

import { Container, Card } from './styles';

interface TeamsCardProps {
  totalEmployees: number;
  mobileEmployees: number;
  frontendEmployees: number;
  backendEmployees: number;
}

export function TeamsCard({
  totalEmployees,
  mobileEmployees,
  frontendEmployees,
  backendEmployees,
}: TeamsCardProps): JSX.Element {
  return (
    <Container>
      <Card>
        <div>
          <h2>Total</h2>
          <AiOutlinePieChart />
        </div>

        <div data-testid="totalValue">{totalEmployees}</div>
      </Card>

      <Card>
        <div className="mobile">
          <h2>Mobile</h2>
          <AiOutlineMobile />
        </div>

        <div data-testid="mobileValue">{mobileEmployees}</div>
      </Card>

      <Card>
        <div className="frontend">
          <h2>Frontend</h2>
          <AiOutlineDesktop />
        </div>

        <div data-testid="frontendValue">{frontendEmployees}</div>
      </Card>

      <Card>
        <div className="backend">
          <h2>Backend</h2>
          <AiOutlineDatabase />
        </div>

        <div data-testid="backendValue">{backendEmployees}</div>
      </Card>
    </Container>
  );
}
