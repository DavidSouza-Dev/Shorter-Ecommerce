import styled from "styled-components"

export const Wrapper = styled.main`
  background-color: white;
  color: #fff;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  @media (max-width: 415px) {
    padding: 1rem;
  }
`

export const Loading = styled.main`
  height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem;
  div {
    margin: auto;
  }
`
