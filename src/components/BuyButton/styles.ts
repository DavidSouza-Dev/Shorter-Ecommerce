import styled from "styled-components"
export const BuyButton = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .addToCart {
    margin: 0 auto;
    max-width: 330px;
    font-size: 1rem;
    font-weight: bold;
    line-height: 0.875rem;
    cursor: pointer;
    padding: 1rem;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    outline: 0;
    border: 0.063rem solid #ffea28;
    border-radius: 0.125rem;
    color: #333;
    background-color: #ffea28;
    white-space: nowrap;
    margin-left: 0.8rem;
  }
  input {
    border: none;
    border-top: 0.0625rem solid #bdbdbd;
    border-bottom: 0.0625rem solid #bdbdbd;
    width: 3em;
    height: 3rem;
    text-align: center;
  }
`
export const Button = styled.button`
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  width: 3em;
  height: 3rem;
  background: #fff;
  border: 0.0625rem solid #bdbdbd;
`
