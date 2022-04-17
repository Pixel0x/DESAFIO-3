import styled from "styled-components";

export const CMain = styled.main`
  width: 100%;
  padding: 0 1.25rem;
  background: var(--white-200);
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 8.75rem auto;
  display: flex;
  gap: 4.375rem;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 710px) {
    justify-content: center;
  }
`;

export const Post = styled.div`
  width: 100%;
  max-width: 300px;
  background: var(--white);
  box-shadow: 0px 0px 1.25rem rgba(0, 0, 0, 0.1);

  div {
    padding: 0 1.875rem 1.875rem 1.875rem;
  }

  h1 {
    font-family: "Merriweather", serif;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.875rem;
    padding: 1.5rem 0;
  }

  p {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 1.875rem;
  }
`;

export const PostImage = styled.div`
  width: 100%;
  height: 200px;
`;
