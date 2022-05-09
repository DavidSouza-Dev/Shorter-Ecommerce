import Link from "next/link"
import { Context } from "provider/context"
import { useContext } from "react"
import * as S from "./styles"

const TotalCart = () => {
  const { miniCart, total, finalQuantity, setActive } = useContext(Context)
  return (
    <>
      {!!miniCart.length && (
        <S.TotalCart>
          <S.Container margin>
            <S.Title>Itens:</S.Title>
            <S.Value>{finalQuantity}</S.Value>
          </S.Container>
          <S.Container>
            <S.Title>
              <b>Subtotal:</b>
            </S.Title>
            <S.Value>
              <b>$ {total.toFixed(2)}</b>
            </S.Value>
          </S.Container>
          <S.Finalizar>
            <Link href="/">
              <a onClick={() => setActive(false)}> Finalizar Compra</a>
            </Link>
          </S.Finalizar>
        </S.TotalCart>
      )}
    </>
  )
}

export default TotalCart
