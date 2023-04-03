import React from 'react'
import { Card } from 'semantic-ui-react'
import Link from 'next/link'
import Image from 'next/image'

type ProductListProps = {
  products: TProduct[]
}

const renderImage = (src: string) => () => <Image alt="Image not found" src={src} width={333} height={333} />
const renderMeta = (content: React.ReactNode) => () => <Card.Meta style={{ color: 'dimgray' }}>{content}</Card.Meta>

const mapProductsToCards = (products: TProduct[]) =>
  products.map(({ name, id, price, image }) => (
    <Link key={id} href={`/product/${id}`} passHref>
      <Card
        as="a"
        header={name}
        image={{ children: renderImage(image) }}
        meta={{
          children: renderMeta(price)
        }}
      />
    </Link>
  ))

const ProductList = ({ products }: ProductListProps) => (
  <Card.Group itemsPerRow={2} stackable>
    {mapProductsToCards(products)}
  </Card.Group>
)

export default ProductList