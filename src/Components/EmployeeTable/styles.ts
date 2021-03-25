import styled from 'styled-components';

export const Container = styled.main`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-title);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      background: var(--shape);
      color: var(--text-title);

      button {
        width: 5rem;
        font-size: 1rem;
        color: var(--text-title);
        background: var(--blue-light);
        border: 0;
        padding: 0 1rem;
        margin: 0.2rem 0.5rem;
        border-radius: 0.25rem;
        height: 3rem;

        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.9);
        }

        &:last-child {
          background: var(--red);
          color: #fff;
        }
      }
    }
  }
`;
