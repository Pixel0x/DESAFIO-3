import styled from "styled-components";

export const CHeader = styled.header`
  width: 100%;
  background: var(--purple-light);
  padding: 0 1.25rem;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  img {
    width: 100%;
    margin: 4.375rem 0;
    max-width: 400px;
    min-width: 300px;

    @media (max-width: 856px) {
      margin: 0 auto 60px auto;
    }

    @media (max-width: 348px) {
      min-width: 268px;
    }
  }
`;

export const Info = styled.div`
  width: 100%;
  max-width: 400px;

  @media (max-width: 856px) {
    margin: 40px 0;
  }

  h1 {
    color: var(--gray-dark);
    font-family: "Merriweather", serif;
    font-weight: 400;
    font-size: 2.25rem;
    line-height: 2.9375rem;
  }

  p {
    color: var(--gray);
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 1.1875rem;
    line-height: 2rem;
    margin: 1.0625rem 0 2.5rem 0;
  }

  button {
    background: var(--purple);
    color: var(--white);
    padding: 0.875rem 3.125rem;
    font-family: "Lato", sans-serif;
    font-weight: bold;
    font-size: 1.25rem;
    line-height: 1.5rem;
    border-radius: 0.3125rem;
    border: none;
  }
`;
