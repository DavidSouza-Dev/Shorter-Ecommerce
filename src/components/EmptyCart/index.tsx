import CartIcon from "components/Svg/cartIcon"
import { Context } from "provider/context"
import { useContext } from "react"
import * as S from "./styles"

const EmptyCart = () => {
  const { miniCart } = useContext(Context)
  return (
    <>
      {!miniCart.length && (
        <S.EmptyCart data-testid="EmptyCart">
          <CartIcon />
          <h2>SEU CARRINHO ESTÁ VAZIO!</h2>
          <p>Você ainda não adicionou nenhum produto ao seu carrinho!</p>
        </S.EmptyCart>
      )}
    </>
  )
}

export default EmptyCart
