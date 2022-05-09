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

  // retorna um loading, qualquer coisa que configurar, enquanto  o PageTemplate está sendo criado
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
