import styled from "styled-components"
import { marginProps } from "types"

export const TotalCart = styled.div`
  position: absolute;
  bottom: 5rem;
  left: 0;
  display: flex;
  flex-direction: column;
  float: left;
  font-size: 15px;
  margin: 10px 0;
  padding: 3rem;
  width: 100%;
`
export const Container = styled.div<marginProps>`
  font-size: 2rem;
  display: flex;
  justify-content: space-between;
  ${(props) => {
    return (
      props.margin &&
      `
      padding-top: 3rem;
      margin-bottom: 1rem;
      border-top: 0.0625rem solid #bdbdbd;
      `
    )
  }}
`
export const Title = styled.p`
  margin: 0;
`
export const Value = styled.p`
  margin: 0;
  text-align: right;
`

export const Finalizar = styled.button`
  margin: 3rem auto 0;
  width: 100%;
  font-size: 1.5rem;
  line-height: 3.125rem;
  cursor: pointer;
  padding: 1rem 1.875rem 1rem 1rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  outline: 0;
  border: 0.063rem solid #ffea28;
  border-radius: 0.125rem;
  background-color: #ffea28;
  a {
    font-weight: 700;

    color: #333;
    text-decoration: none;
  }
`
