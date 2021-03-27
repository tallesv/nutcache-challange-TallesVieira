import styled from 'styled-components';

export const Container = styled.form`
  h2 {
    margin-bottom: 2rem;
    color: var(--text-title);
  }

  span {
    color: var(--text-title);
  }

  button {
    width: 100%;
    font-size: 1rem;
    color: var(--white);
    background: var(--red);
    border: 0;
    padding: 0 2rem;
    margin-top: 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
