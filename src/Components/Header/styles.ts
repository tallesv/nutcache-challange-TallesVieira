import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: var(--text-title);
`;

export const ButtonsBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(1fr, auto));

  button {
    font-size: 1rem;
    color: var(--text-title);
    background: var(--green);
    border: 0;
    padding: 0 2rem;
    margin: 0.5rem 1rem;
    border-radius: 0.25rem;
    height: 3rem;
    width: 12rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    &:nth-child(2) {
      background: var(--blue-light);
      font-size: 0.8rem;
      padding: 0 0.2rem;
    }

    &:last-child {
      background: var(--red);
      color: var(--white);
      font-size: 0.8rem;
      padding: 0 0.2rem;
    }
  }
`;
