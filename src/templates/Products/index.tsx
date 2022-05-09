import ContainerProducts from "components/ContainerProducts"
import { containerProductsProps } from "types"

const ShelfProductTemplate = ({ products }: containerProductsProps) => (
  <ContainerProducts products={products} />
)

export default ShelfProductTemplate
