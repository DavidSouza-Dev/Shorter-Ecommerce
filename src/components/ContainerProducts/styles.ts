import styled from "styled-components"
export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
  width: 100%;
  margin: auto;
  text-align: left;
  background: #dedede33;
`
export const Container = styled.div`
  font-size: 2rem;
  font-weight: 400;
  width: 1016px;
  margin: auto;
  height: 100%;
  padding: 3rem;
  @media (max-width: 415px) {
    padding: 1rem;
  }
`

export const ProductsList = styled.ul`
  margin-top: 12rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .link {
    text-decoration: none;
    color: #000;
  }
`
export const ProductItem = styled.div`
  width: 200px;
  height: 350px;
  margin: 1rem;

  padding: 3rem 3rem 2.5rem;
  position: relative;
  display: flex;
  margin-bottom: 4rem;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  background: #fff;

  border: 2px solid #dedede;
  display: flex;
  flex-direction: column;
  transition: all 0.2s;

  @media (max-width: 415px) {
    width: 38vw;
    height: 310px;
  }

  &:hover {
    box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%),
      0 1px 10px 0 rgb(0 0 0 / 12%);
    a {
      text-decoration: underline;
    }
  }
`
export const WrapperImage = styled.div`
  display: flex;
  background: #fff;
  width: 100%;
  a {
    color: #fff;
    text-transform: capitalize;
    text-decoration: none;
    z-index: 1;
  }
  img {
    width: 100%;
    height: auto;
    background: #f6f7f8;
    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      gray 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );
    background-size: 80rem 14rem;
    animation: placeholderShimmer 1s linear infinite forwards;
    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }
      100% {
        background-position: 40rem 0;
      }
    }
  }
`

export const Title = styled.h2`
  font-size: 1rem;
  max-height: 40px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-style: italic;
  line-height: 1.2;
  margin: 1.2rem 0 0.9rem;
  overflow: hidden;
  text-transform: uppercase;
`
export const Price = styled.div`
  font-size: 1.2rem;
  line-height: 1.3;
  margin: 1.2rem auto 0.9rem;
  display: block;
  display: -webkit-box;
  background-color: #ffea28;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  text-align: center;
  white-space: nowrap;
`
