import styled from "styled-components";

export const ContactStyle = styled.div`
  width: 100%;
  padding: 0 1.25rem;
  background: var(--purple-light);
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding: 5rem 0;

  h1 {
    color: var(--gray-dark);
    margin-bottom: 3.75rem;
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.5rem;
  }

  form {
    font-family: "Merriweather", serif;
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 0.9375rem;

    input,
    button {
      height: 50px;
      border-radius: 0.375rem;
      border: none;
    }

    textarea {
      max-width: 500px;
      border: none;
      height: 165px;
      max-height: 165px;
      padding-top: 1.25rem;
    }

    input,
    textarea {
      outline: none;
      font-family: "Lato", sans-serif;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.375rem;
      padding-left: 1rem;

      &::placeholder {
        font-family: "Lato", sans-serif;
        color: rgba(110, 114, 117, 0.74);
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.375rem;
      }

      &:placeholder-shown {
        outline: none;
        padding-left: 1rem;
      }

      &:focus {
        padding-left: 1rem;
      }
    }

    button {
      font-family: "Lato", sans-serif;
      margin-top: 0.9375rem;
      background: var(--purple);
      color: var(--white);
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 1.5rem;
    }
  }
`;
