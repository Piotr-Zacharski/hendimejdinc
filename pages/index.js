import { createClient } from 'contentful'
import CardTwo from '../components/CardTwo'

export async function getStaticProps() {

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

const res = await client.getEntries({ content_type: 'product'})

return {
  props: {
    products: res.items
  },
  revalidate: 1
}
}


export default function Products({ products }) {
  return (
    <div className="product-list">
     {products.map(product =>(
       <CardTwo key={product.sys.id} product={product}/>
     ))}

     <style jsx>{`
     .product-list {
       display: grid;
       grid-template-columns: 1fr 1fr;
       grid-gap: 20px 60px;
       text-align: center;
       justify-content: center;
       margin: 0 auto;
     }
     `}</style>
    </div>
  )
}
