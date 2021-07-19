import { createClient } from 'contentful'
import Image from 'next/image'
import Input from '../../components/Input';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Paper } from '@material-ui/core';


const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "product"
  })

  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug }
    }
  })

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: 'product',
    'fields.slug': params.slug
  })

  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { product: items[0] },
    revalidate: 1
  }
}

export default function ProductDetails({ product }) {
  if (!product) return <h2>Ooops...!</h2>

  const { featuredImage, title, price, description } = product.fields

  return (
    <div>
      <Paper elevation={5}>
      <div className="banner">
      <Image 
          src={'https:' + featuredImage.fields.file.url}
          width={featuredImage.fields.file.details.image.width}
          height={featuredImage.fields.file.details.image.height}
          className="feature"

        />
        <h2>{ title } <p className="price">Cena: { price } zł</p></h2>
        
      </div>

      <div className="info">
        
      </div>
        
      <div className="method">
        {documentToReactComponents(description)}
      </div></Paper>
      <Input />
      <style jsx>{`
        h2,h3 {
          text-transform: uppercase;
        }
        .banner {
            text-align: center;
            width: 50%;
            display: block;
            height: 100%;
         
        }
        .method {
          text-align: center;
          position: relative;
          margin-top: -718px;
          margin-left: 600px;
          width: 45%;
          font-size: 18px;
          margin-top: -680px;
          padding: 10px;
        }
        .price {
          margin: 0;
          color: #777;
          text-align: center;
          font-size: 1rem;
          text-transform: lowercase;
        }
        .banner h2 {
          text-align: center;
          align-items: center;
          margin: 0 auto;
          background: lightpink;
          color: white;
          display: block;
          padding: 20px;
          position: relative;
          top: 20px;
          width: 500px;
          /* transform: rotateZ(-1deg); */
          box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
        }
        .info p {
          margin: 0;
          padding: 0;
        }
        .info span::after {
          content: ", ";
        }
        .info span:last-child::after {
          content: ".";
        }
      `}</style>
    </div>
  )
}