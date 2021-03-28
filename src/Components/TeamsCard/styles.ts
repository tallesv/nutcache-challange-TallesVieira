import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 10rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.1rem;
  margin-top: -80px;

  @media (max-width: 1530px) {
    margin: 0 0rem;
    margin-top: -80px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--shape);
  color: var(--text-title);
  height: 10rem;
  width: 20rem;
  padding: 1rem 1.5rem;
  margin: 0 0.5rem;
  border-radius: 4px;
  bottom: -10px;

  div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  div:last-child {
    display: flex;
    justify-content: flex-end;
    font-size: 2.5rem;
    font-weight: 500;
  }

  div {
    svg {
      font-size: 1.8rem;
    }
  }

  .frontend {
    svg {
      color: var(--blue);
    }
  }

  .mobile {
    svg {
      color: var(--green);
    }
  }

  .backend {
    svg {
      color: var(--red);
    }
  }
`;
