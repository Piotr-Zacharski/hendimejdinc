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
       display: inline-flex;
       align-self: center;
       grid-template-columns: 1fr 1fr 1fr;
       grid-gap: 50px 80px;
       text-align: center;
       justify-content: center;
       margin: 0 auto;
       margin-top: 20px;
       flex-wrap: wrap;
       max-width: 1200px;
     }
     `}</style>
    </div>
  )
}
