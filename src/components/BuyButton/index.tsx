/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react"
import { Context } from "provider/context"
import { Product, TminicartItems } from "types"
// import { ContainerProductsProps, PostProps } from "types"
import * as S from "./styles"

const BuyButton = ({ id, title, price, image }: Product) => {
  const [quantity, setQuantity] = useState(1)
  const { miniCart, setMiniCart, setTotal, setFinalQuantity, setActive } =
    useContext(Context)

  const addToCart = () => {
    const incomingItems = {
      id,
      title,
      quantity,
      price,
      image,
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setMiniCart((prev: any) =>
      [...prev, incomingItems].reduce((items, current) => {
        const id = current.id
        const repeated = items.find((item: TminicartItems) => item.id === id)
        if (repeated) repeated.quantity += current.quantity
        else items.push(current)
        localStorage.setItem("miniCart", JSON.stringify(items))
        return items
      }, [])
    )
    setTimeout(() => {
      setActive(true)
    }, 1000)
  }

  const handleQuantity = (action: string) => {
    if (action === "plus" && quantity <= 50) {
      setQuantity(quantity + 1)
    }
    if (action === "minus") {
      setQuantity(quantity - 1)
    }
  }

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const itemsMiniCart = JSON.parse(localStorage.getItem("miniCart")!)
    if (itemsMiniCart) {
      setMiniCart(itemsMiniCart)
    }
  }, [])

  useEffect(() => {
    setTotal(() =>
      miniCart.reduce((total: number, item: TminicartItems) => {
        return total + item.price * item.quantity
      }, 0)
    )
    setFinalQuantity(() =>
      miniCart.reduce((total: number, item: TminicartItems) => {
        return total + item.quantity
      }, 0)
    )
  }, [miniCart])

  return (
    <S.BuyButton data-testid="BuyButton">
      <>
        <S.Button
          className="setQuantity"
          disabled={!quantity}
          onClick={() => handleQuantity("minus")}
          data-message="botão para reduzir quantidade"
        >
          -
        </S.Button>
        <input
          type="tel"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          disabled
        />
        <S.Button
          className="setQuantity"
          onClick={() => handleQuantity("plus")}
          data-message="botão para aumentar quantidade"
        >
          +
        </S.Button>
      </>
      <button
        className="addToCart"
        onClick={addToCart}
        data-testid="AddToCart"
        data-message="botão para adicionar produtos no carrinho"
      >
        ADICIONAR AO CARRINHO
      </button>
    </S.BuyButton>
  )
}

export default BuyButton
