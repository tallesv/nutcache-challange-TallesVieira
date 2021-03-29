import { render, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TeamsCard } from '../../Components/TeamsCard';

describe('TeamsCard Component', () => {
  const fakeData = {
    total: 10,
    mobile: 2,
    frontend: 4,
    backend: 5,
  };
  it('it should display correct number of total employees', () => {
    const { getByTestId } = render(
      <TeamsCard
        totalEmployees={fakeData.total}
        mobileEmployees={fakeData.mobile}
        frontendEmployees={fakeData.frontend}
        backendEmployees={fakeData.backend}
      />,
    );

    const totalValueDisplay = within(getByTestId('totalValue'));

    expect(totalValueDisplay.getByText('10')).toBeInTheDocument();
  });

  it('it should display correct number of mobile employees', () => {
    const { getByTestId } = render(
      <TeamsCard
        totalEmployees={fakeData.total}
        mobileEmployees={fakeData.mobile}
        frontendEmployees={fakeData.frontend}
        backendEmployees={fakeData.backend}
      />,
    );

    const mobileValueDisplay = within(getByTestId('mobileValue'));

    expect(mobileValueDisplay.getByText('2')).toBeInTheDocument();
  });

  it('it should display correct number of frontend employees', () => {
    const { getByTestId } = render(
      <TeamsCard
        totalEmployees={fakeData.total}
        mobileEmployees={fakeData.mobile}
        frontendEmployees={fakeData.frontend}
        backendEmployees={fakeData.backend}
      />,
    );

    const frontendValueDisplay = within(getByTestId('frontendValue'));

    expect(frontendValueDisplay.getByText('4')).toBeInTheDocument();
  });

  it('it should display correct number of backend employees', () => {
    const { getByTestId } = render(
      <TeamsCard
        totalEmployees={fakeData.total}
        mobileEmployees={fakeData.mobile}
        frontendEmployees={fakeData.frontend}
        backendEmployees={fakeData.backend}
      />,
    );

    const backendValueDisplay = within(getByTestId('backendValue'));

    expect(backendValueDisplay.getByText('5')).toBeInTheDocument();
  });
});
