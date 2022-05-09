import Header from "components/Header"
import Main from "components/Main"
import { NextSeo } from "next-seo"
import ShelfProductTemplate from "templates/Products"
import { containerProductsProps } from "types"

export default function Home({ products }: containerProductsProps) {
  return (
    <>
      <NextSeo
        title="Shorter Ecommerce"
        description="A simple Ecommerce to show listed products and show more details in another Page. There I can insert products to cart."
        canonical="https://shorter-ecommerce.vercel.app/"
        openGraph={{
          url: "https://shorter-ecommerce.vercel.app/",
          title: "Shorter Ecommerce",
          description:
            "A simple Ecommerce to show listed products and show more details in another Page. There I can insert products to cart.",
          images: [
            {
              url: "https://shorter-ecommerce.vercel.app/img/cover.png",
              width: 1280,
              height: 720,
              alt: "Shorter Ecommerce",
            },
          ],
          site_name: "Shorter Ecommerce",
        }}
      />
      <Header />
      <Main>
        <ShelfProductTemplate products={products} />
      </Main>
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products")
  const products = await res.json()

  return {
    revalidate: 5,
    props: {
      products,
    },
  }
}
