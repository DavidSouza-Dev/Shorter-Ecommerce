import styled from "styled-components"
export const BackToHome = styled.div`
  position: fixed;
  top: 3rem;
  right: 3rem;
  cursor: pointer;
  height: 30px;
  width: 30px;
  background-color: white;
  border-radius: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Wrapper = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  min-height: 700px;
  max-width: var(--container);
  margin: auto;
  padding-top: 10rem;
  @media (max-width: 415px) {
    padding: 10rem 2rem 2rem 2rem;
  }
`
export const Breadcrumb = styled.ol`
  margin-bottom: 0;
  padding: 0;
  font-size: 0.75rem;
  text-transform: none;
  list-style: none;
  overflow: hidden;
  line-height: 4.3;
  width: 100%;
  padding: 0 15vw;
  display: flex;
  @media (max-width: 415px) {
    padding: 0 2vw;
  }
  li {
    font-size: 1.25rem;
    text-transform: uppercase;
    &:first-child {
      font-weight: 700;
      &:after {
        content: "/";
        display: inline;
        margin: 0 0.7rem;
        font-size: inherit;
      }
      a {
        color: #333;
        text-decoration: none;
      }
    }
  }
`

export const Image = styled.figure`
  text-align: center;
  width: 500px;
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
export const ProductBuyInfo = styled.div`
  width: 500px;
  img {
    margin-top: 2rem;
  }
  @media (max-width: 415px) {
    width: 100%;
  }
`
export const CodeRef = styled.span`
  margin-left: auto;
  color: #aaa;
  font-size: 0.75rem;
  font-style: italic;
  margin-right: ;
`
export const NameProduct = styled.h2`
  font-style: italic;
  text-transform: uppercase;
  font-weight: 700;
  color: #393939;
  line-height: 1.875rem;
  font-size: 1.75rem;
  margin: 0 0 25px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`
export const Description = styled.span`
  margin: 25px 0;
  position: relative;
  color: #8a8a8a;
  max-height: 40px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`
export const BuyBox = styled.div`
  text-align: center;
  border: 1px solid #eee;
  padding: 25px 50px;
  @media (max-width: 415px) {
    padding: 25px 20px;
  }
`
export const Seller = styled.div`
  margin-bottom: 10px;
  text-align: center;
  font-size: 0.875rem;
`
export const Price = styled.div`
  color: #333;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  padding: 2px 30px;
  margin-bottom: 4rem;
`
export const BuyButton = styled.div`
  display: flex;
  justify-content: flex-st;
  align-items: center;

  .addToCart {
    margin: 0 auto;
    width: 50%;
    max-width: 330px;
    font-size: 1rem;
    font-weight: 700;
    line-height: 0.875rem;
    cursor: pointer;
    padding: 1.1rem;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    outline: 0;
    border: 1px solid #ffea28;
    border-radius: 2px;
    color: #333;
    background-color: #ffea28;
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
  font-size: 1.25rem;
  font-weight: bold;
  color: #005ee2;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  width: 3em;
  height: 3rem;
  background: #fff;
  border: 0.0625rem solid #bdbdbd;
`
