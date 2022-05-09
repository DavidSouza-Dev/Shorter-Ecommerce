import Header from "components/Header"
import * as S from "components/Main/styles"
import LoadingIcon from "components/Svg/LoadingIcon"
import { GetStaticProps } from "next"
import { useRouter } from "next/dist/client/router"
import PageTemplate from "templates/PDP"
import { Product, slugId } from "types"

export default function PageOfProduct({
  id,
  title,
  price,
  category,
  description,
  image,
}: Product) {
  const router = useRouter()

  /**
   Is useful if your app has a very large number of static pages that depend on data (such as a very large e-commerce site). If you want to pre-render all  product pages, the builds would take a very long time. 
   */
  if (router.isFallback)
    return (
      <>
        <S.Loading>
          <Header />
          <div>
            <LoadingIcon />
          </div>
        </S.Loading>
      </>
    )

  return (
    <PageTemplate
      id={id}
      title={title}
      price={price}
      category={category}
      description={description}
      image={image}
    ></PageTemplate>
  )
}

/* 
  When exporting a function called getStaticPaths from a page that uses Dynamic Routes, Next.js will statically pre-render all the paths specified by getStaticPaths.
*/

export async function getStaticPaths() {
  const res = await fetch("https://fakestoreapi.com/products?limit=5")
  const products = await res.json()

  const paths = products.map(({ id }: slugId) => {
    return {
      params: { slug: id.toString() },
    }
  })

  return { paths, fallback: true }
}

/* 
  Exporting a function called getStaticProps will pre-render a page at build time using the props returned from the function:
*/
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`https://fakestoreapi.com/products/${params?.slug}`)
  const product = await res.json()

  if (!product) return { notFound: true }

  return {
    props: {
      id: product.id,
      category: product.category,
      title: product.title,
      description: product.description,
      price: product.price,
      image: product.image,
    },
  }
}
