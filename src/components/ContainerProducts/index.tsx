import Image from "next/image"
import Link from "next/link"
import { memo } from "react"
import { containerProductsProps, Product } from "types"
import * as S from "./styles"

const ContainerProducts = ({ products }: containerProductsProps) => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.ProductsList data-testid="ProductsList">
          {products?.map(({ id, image, price, title }: Product) => (
            <Link href={`/product/${id}`} key={id} data-testid="ProductsLink">
              <a className="link" data-testid="ProductsLink">
                <S.ProductItem>
                  <S.WrapperImage>
                    {/* <img src={image} alt="" /> */}
                    <Image
                      key={`image-${id}`}
                      src={image}
                      alt={title}
                      width={322}
                      height={500}
                      quality={75}
                      data-testid="ProductsImage"
                    />
                  </S.WrapperImage>
                  <S.Price>Price: $ {price}</S.Price>
                  <S.Title>{title}</S.Title>
                </S.ProductItem>
              </a>
            </Link>
          ))}
        </S.ProductsList>
      </S.Container>
    </S.Wrapper>
  )
}

export default memo(ContainerProducts)
