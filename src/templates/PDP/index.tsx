import Link from "next/link"
import BuyButton from "components/BuyButton"
import Header from "components/Header"
import React from "react"
import * as S from "./styles"
import Image from "next/image"
import { Product } from "types"
import { NextSeo } from "next-seo"

const PageTemplate = ({
  id,
  title,
  price,
  category,
  description,
  image,
}: Product) => {
  return (
    <>
      <NextSeo
        title="Shorter Ecommerce"
        description={description}
        canonical="https://shorter-ecommerce.vercel.app/"
        openGraph={{
          url: "https://shorter-ecommerce.vercel.app/",
          title: "Shorter Ecommerce",
          description: description,
          images: [
            {
              url: image,
              width: 1280,
              height: 720,
              alt: "Shorter Ecommerce",
            },
          ],
          site_name: "Shorter Ecommerce",
        }}
      />
      <Header />
      <main>
        <S.Wrapper>
          <S.Breadcrumb>
            <li>
              <Link href="/">
                <a aria-label="Go to Home">Home</a>
              </Link>
            </li>
            <li>
              <span>{category}</span>
            </li>
          </S.Breadcrumb>
          <S.Image>
            <Image
              key={`image-${id}`}
              src={image}
              alt={title}
              width={322}
              height={500}
              quality={75}
            />
          </S.Image>

          <S.ProductBuyInfo>
            <S.CodeRef>{`REF: 0001${id}`}</S.CodeRef>
            <S.NameProduct>{title}</S.NameProduct>
            <S.Description> {description}</S.Description>

            <S.BuyBox>
              <S.Seller>
                <span>
                  Produto Vendido por <b>XPTO</b>
                </span>
              </S.Seller>
              <S.Price>
                <span>{`$ ${price.toFixed(2)}`}</span>
              </S.Price>
              <BuyButton id={id} title={title} price={price} image={image} />
            </S.BuyBox>
          </S.ProductBuyInfo>
        </S.Wrapper>
      </main>
    </>
  )
}

export default PageTemplate
