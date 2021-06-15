import { createClient } from 'contentful'

export async function getStaticProps() {

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

const res = await client.getEntries({ content_type: 'product'})

return {
  props: {
    products: res.products
  }
}
}


export default function Products({ products }) {
  return (
    <div className="product-list">
     {products.map(product =>(
       <div key={product.sys.id}>{product.fields.title}</div>
     ))}
    </div>
  )
}
