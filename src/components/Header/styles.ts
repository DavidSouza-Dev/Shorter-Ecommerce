import styled from "styled-components"

export const Header = styled.header`
  background: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;
  overflow: hidden;
  z-index: 1;
  position: fixed;
  top: 0;
  width: 100%;
  height: 86px;
`
export const Minicart = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  background-color: #f5f5f5;
  width: 410px;
  height: 100vh;
  z-index: 3;
  transition: 0.4s;
  transform: translateX(500px);
  padding: 3rem;
  &.active {
    transform: translateX(0px);
    transition: 0.4s;
  }
  @media (max-width: 415px) {
    width: 100vw;
    transform: translateX(100vw);
  }
  .header_cart {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    margin-bottom: 24px;
    h2 {
      font-size: 20px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.4px;
      color: #000;
    }
    .btn_close {
      width: 38px;
      height: 38px;
      background-color: #000;
      display: flex;
      justify-content: center;
      align-items: center;
      .close_icon {
        background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgMzI5LjI2OTMzIDMyOSIgd2lkdGg9IjUxMiI+PGc+PHBhdGggZD0ibTE5NC44MDA3ODEgMTY0Ljc2OTUzMSAxMjguMjEwOTM4LTEyOC4yMTQ4NDNjOC4zNDM3NS04LjMzOTg0NCA4LjM0Mzc1LTIxLjgyNDIxOSAwLTMwLjE2NDA2My04LjMzOTg0NC04LjMzOTg0NC0yMS44MjQyMTktOC4zMzk4NDQtMzAuMTY0MDYzIDBsLTEyOC4yMTQ4NDQgMTI4LjIxNDg0NC0xMjguMjEwOTM3LTEyOC4yMTQ4NDRjLTguMzQzNzUtOC4zMzk4NDQtMjEuODI0MjE5LTguMzM5ODQ0LTMwLjE2NDA2MyAwLTguMzQzNzUgOC4zMzk4NDQtOC4zNDM3NSAyMS44MjQyMTkgMCAzMC4xNjQwNjNsMTI4LjIxMDkzOCAxMjguMjE0ODQzLTEyOC4yMTA5MzggMTI4LjIxNDg0NGMtOC4zNDM3NSA4LjMzOTg0NC04LjM0Mzc1IDIxLjgyNDIxOSAwIDMwLjE2NDA2MyA0LjE1NjI1IDQuMTYwMTU2IDkuNjIxMDk0IDYuMjUgMTUuMDgyMDMyIDYuMjUgNS40NjA5MzcgMCAxMC45MjE4NzUtMi4wODk4NDQgMTUuMDgyMDMxLTYuMjVsMTI4LjIxMDkzNy0xMjguMjE0ODQ0IDEyOC4yMTQ4NDQgMTI4LjIxNDg0NGM0LjE2MDE1NiA0LjE2MDE1NiA5LjYyMTA5NCA2LjI1IDE1LjA4MjAzMiA2LjI1IDUuNDYwOTM3IDAgMTAuOTIxODc0LTIuMDg5ODQ0IDE1LjA4MjAzMS02LjI1IDguMzQzNzUtOC4zMzk4NDQgOC4zNDM3NS0yMS44MjQyMTkgMC0zMC4xNjQwNjN6bTAgMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiI+PC9wYXRoPjwvZz4gPC9zdmc+)
          no-repeat center;
        background-size: 100%;
        vertical-align: middle;
        display: inline-block;
        width: 14px;
        height: 22px;
      }
    }
  }
`
export const NavBar = styled.ul`
  display: flex;
  margin-left: auto;
  width: fit-content;
  list-style: none;

  position: relative;
  .nav-link {
    color: #fff;
    font-size: 1.5rem;
    padding-right: 0.6rem;
    padding-left: 0.6rem;
    text-decoration: none;
    font-weight: 600;
    margin-right: 1.5rem;
    cursor: pointer;

    .myAccount {
      background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOS42MjkiIGhlaWdodD0iMjMuMDU3IiB2aWV3Qm94PSIwIDAgMTkuNjI5IDIzLjA1NyI+DQogIDxnIGlkPSJub3VuX3Byb2ZpbGVfMTU5NDIzOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4xIDAuMSkiPg0KICAgIDxnIGlkPSJHcnVwb18zNzMiIGRhdGEtbmFtZT0iR3J1cG8gMzczIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwKSI+DQogICAgICA8ZyBpZD0iR3J1cG9fMzcyIiBkYXRhLW5hbWU9IkdydXBvIDM3MiI+DQogICAgICAgIDxwYXRoIGlkPSJDYW1pbmhvXzM2NiIgZGF0YS1uYW1lPSJDYW1pbmhvIDM2NiIgZD0iTTUyLjQyOSw1Mi4yODZhLjU3MS41NzEsMCwwLDEtMS4xNDMsMCw4LjU3MSw4LjU3MSwwLDEsMC0xNy4xNDMsMCwuNTcxLjU3MSwwLDAsMS0xLjE0MywwLDkuNzE0LDkuNzE0LDAsMSwxLDE5LjQyOSwwWk00Mi43MTQsNDEuNDI5YTUuNzE0LDUuNzE0LDAsMSwxLDUuNzE0LTUuNzE0QTUuNzE0LDUuNzE0LDAsMCwxLDQyLjcxNCw0MS40MjlabTAtMS4xNDNhNC41NzEsNC41NzEsMCwxLDAtNC41NzEtNC41NzFBNC41NzEsNC41NzEsMCwwLDAsNDIuNzE0LDQwLjI4NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMyAtMzApIiBmaWxsPSIjZmZmIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC4yIi8+DQogICAgICA8L2c+DQogICAgPC9nPg0KICA8L2c+DQo8L3N2Zz4NCg==)
        no-repeat center;
      background-size: 100%;
      width: 1rem;
      height: 1.25rem;
      vertical-align: middle;
      display: inline-block;
    }
    .miniCart {
      background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjIxcHgiIHZpZXdCb3g9IjAgMCAxOCAyMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTggMjEiIHhtbDpzcGFjZT0icHJlc2VydmUiPiAgPGltYWdlIGlkPSJpbWFnZTAiIHdpZHRoPSIxOCIgaGVpZ2h0PSIyMSIgeD0iMCIgeT0iMCIKICAgIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQklBQUFBVkNBUUFBQURod25aa0FBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFDQmpTRkpOCkFBQjZKZ0FBZ0lRQUFQb0FBQUNBNkFBQWRUQUFBT3BnQUFBNm1BQUFGM0NjdWxFOEFBQUFBbUpMUjBRQS80ZVB6TDhBQUFBSGRFbE4KUlFma0JSWVFMeW13RzNkMkFBQUF6a2xFUVZRb3o5MlNJVzRDVVJSRnoyOUlTRlBSRWhKU2gyblNwWXp1R3NheEFTWW9MT2tHME4wQgprb1RValNUWXlrRisxS0RBSFFSTVlNclFvSHZOdTdudjVGM3pBaGN5NFlNM1lCbUdOTXVKcFZvWTFXamFoR1RxajlrSmorNU5ycUZvCmVZNU4xZFZ2SkZWbnRXVGx2dkl0RndCMGdmZVRQNnBEMjV3ZEVJT3lwZVNSSGh0MkY5QUx6NnlCVjdhb09UaFJwN1c2aFpxQWhmR0IKTzlRNmpqQVV2bXViVDVaaFhwM1YvSzhyZDlmOWJ3aUx4cytwdHBtYUJ6UEd0Rm5mb1Bwc0dBVXdZY0RURFNqeUZlWUhjRkp4c1dTUwpjUVlBQUFBbGRFVllkR1JoZEdVNlkzSmxZWFJsQURJd01qQXRNRFV0TWpKVU1UWTZORGM2TkRFck1ETTZNREErN2FJY0FBQUFKWFJGCldIUmtZWFJsT20xdlpHbG1lUUF5TURJd0xUQTFMVEl5VkRFMk9qUTNPalF4S3pBek9qQXdUN0Fhb0FBQUFBQkpSVTVFcmtKZ2dnPT0iIC8+Cjwvc3ZnPgo=)
        no-repeat center;
      background-size: 100%;
      display: inline-block;
      vertical-align: middle;
      width: 1.063rem;
      height: 1.188rem;
    }
  }
`
export const Quantity = styled.span`
  position: absolute;
  top: -0.5rem;
  right: 0.5rem;
  background: #fff;
  height: 1.8rem;
  width: 1.8rem;
  border-radius: 50%;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
`

export const TopBar = styled.div`
  font-size: 0.875rem;
  line-height: 0.875rem;
  margin-bottom: 1.563rem;
  text-decoration: none;
  text-transform: uppercase;
  position: relative;
  button {
    position: absolute;
    top: -0.5rem;
    right: 0;
    border: none;
    background: none;
    cursor: pointer;
  }
`
export const Content = styled.div`
  align-items: center;
  display: flex;
  text-align: left;
  width: 100%;
  margin: 2rem 0;
  border-bottom: 0.0625rem solid #bdbdbd;
  padding-bottom: 1rem;
  .itemDescription {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    text-align: left;
    width: 100%;
  }
  .itemImage {
    display: flex;
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

export const ItemQuantity = styled.div`
  display: flex;
  margin-top: 1rem;
  input {
    border: none;
    border-top: 0.0625rem solid #bdbdbd;
    border-bottom: 0.0625rem solid #bdbdbd;
    width: 3em;
    height: 3rem;
    text-align: center;
  }
`
export const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 500px;
  svg {
    width: 3.125em;
  }
  h2 {
    display: block;
    font-size: 0.875rem;
    font-style: italic;
    margin: 0.938rem 0 0;
    text-transform: uppercase;
  }
`
