/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useContext, useEffect } from "react"
import { Context } from "provider/context"

import EmptyCart from "components/EmptyCart"
import CloseIcon from "components/Svg/closeIcon"
import TotalCart from "components/TotalCart"

import { TminiCart, TminicartItems } from "types"

import * as S from "./styles"

const Header = () => {
  const {
    miniCart,
    setMiniCart,
    setTotal,
    finalQuantity,
    setFinalQuantity,
    active,
    setActive,
  } = useContext(Context)

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const itemsMiniCart = JSON.parse(localStorage.getItem("miniCart")!)
    if (itemsMiniCart) {
      handleCart(itemsMiniCart)
    }
  }, [])

  useEffect(() => {
    setFinalQuantity(() =>
      miniCart.reduce((total: number, item: TminicartItems) => {
        return total + item.quantity
      }, 0)
    )
  }, [miniCart])

  const removeItem = (id: number) => {
    const itemsCart = miniCart.filter((item: TminicartItems) => item.id !== id)
    setMiniCart(itemsCart)
    handleCart(itemsCart)
    localStorage.setItem("miniCart", JSON.stringify(itemsCart))
  }

  const handleCart = (newItems: TminiCart) => {
    setMiniCart(newItems)
    setTotal(() =>
      newItems.reduce((total, item) => {
        return total + item.price * item.quantity
      }, 0)
    )
    setFinalQuantity(() =>
      newItems.reduce((total, item) => {
        return total + item.quantity
      }, 0)
    )
  }

  const updateCart = (id: number, value: number, action: string) => {
    const target = miniCart.filter((item: TminicartItems) => item.id === id)
    const products = miniCart.filter((item: TminicartItems) => item.id !== id)
    if (action === "plus" && value <= 50) {
      const productUpdated = Object.assign(target[0], {
        quantity: (value += 1),
      })
      const newItems = [...products, productUpdated]
      handleCart(newItems)
    }
    if (action === "minus") {
      const productUpdated = Object.assign(target[0], {
        quantity: (value -= 1),
      })
      const newItems = [...products, productUpdated]
      handleCart(newItems)
      localStorage.setItem("miniCart", JSON.stringify(newItems))

      if (value == 0) {
        removeItem(id)
      }
    }
  }

  return (
    <>
      <S.Header>
        <S.NavBar className="navbar-nav">
          <li className="nav-item ">
            <a className="nav-link">
              <i className="myAccount"></i>
            </a>
          </li>
          <li className="nav-item ">
            <a
              className="nav-link"
              onClick={() => setActive(!active)}
              data-message="botão para abrir a tela de mini cart"
            >
              <i className="miniCart"></i>
              <S.Quantity onClick={() => setActive(!active)}>
                {finalQuantity}
              </S.Quantity>
            </a>
          </li>
        </S.NavBar>
      </S.Header>
      <S.Minicart className={active ? "active" : ""}>
        <div>
          <header>
            <div className="header_cart">
              <h2>Sacola</h2>
              <a
                href="#"
                className="btn_close"
                onClick={() => setActive(!active)}
                data-message="botão para fechar a tela de mini cart"
              >
                <i className="close_icon"></i>
              </a>
            </div>
          </header>
          <div>
            <EmptyCart />
            {!!miniCart.length &&
              miniCart?.map(
                (
                  { id, image, title, price, quantity }: TminicartItems,
                  index: number
                ) => (
                  <div key={index}>
                    <S.TopBar>
                      <span>
                        <b>{title}</b>
                      </span>
                      <button
                        data-message="botão para remover item do mini cart"
                        onClick={() => removeItem(id)}
                      >
                        <CloseIcon />
                      </button>
                    </S.TopBar>
                    <S.Content>
                      <div className="itemDescription">
                        <span>Preço: $ {price} </span>
                        <span>Quantidade: {quantity}</span>
                        <S.ItemQuantity>
                          <S.Button
                            className="setQuantity"
                            disabled={!quantity}
                            onClick={() => updateCart(id, quantity, "minus")}
                            data-message="botão para reduzir quantidade"
                          >
                            -
                          </S.Button>
                          <input
                            type="tel"
                            value={quantity}
                            onChange={() => null}
                            disabled
                          />
                          <S.Button
                            className="setQuantity"
                            onClick={() => updateCart(id, quantity, "plus")}
                            data-message="botão para aumentar quantidade"
                          >
                            +
                          </S.Button>
                        </S.ItemQuantity>
                      </div>
                      <div className="itemImage">
                        <img src={image} alt="" width="60" />
                      </div>
                    </S.Content>
                  </div>
                )
              )}
          </div>
          <TotalCart />
        </div>
      </S.Minicart>
    </>
  )
}
export default memo(Header)
