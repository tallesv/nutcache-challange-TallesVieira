import styled from 'styled-components';

export const Container = styled.form`
  h2 {
    margin-bottom: 2rem;
    color: var(--text-title);
  }

  input {
    width: 100%;
    height: 3rem;
    padding: 0 1rem;
    margin-top: 1rem;
    border-radius: 0.25;
    background: var(--grey);

    border: 1px solid #d7d7d7;

    &:first-child {
      margin-top: 0;
    }
  }

  span {
    width: 100%;
    padding: 0 1rem;
    color: var(--red);
    display: inline-block;
  }

  .react-datepicker-wrapper {
    width: 100%;
    margin-top: 1rem;
  }

  select {
    width: 100%;
    height: 3rem;
    margin-top: 1rem;
    padding: 0 1rem;
    background: var(--grey);

    border: 1px solid #d7d7d7;

    option {
      height: 3rem;
      background: var(--grey);
    }
  }

  button:last-child {
    width: 100%;
    font-size: 1rem;
    color: var(--white);
    background: var(--green);
    border: 0;
    padding: 0 2rem;
    margin-top: 1rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
