import { createClient } from 'contentful'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

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
        <div className="info">{documentToReactComponents(description)}</div>
      </div>
      <div class="col-md-3">
        <label for="validationDefault04" class="form-label">Kolor okucia:</label>
          <select class="form-select" id="validationDefault04" required>
            <option value="color">wybierz</option>
            <option value="color">srebrny</option>
            <option value="color">złoty</option>
          </select>
      </div>
      <div class="col-md-3">
        <label for="validationDefault04" class="form-label">Rodzaj paska:</label>
          <select class="form-select" id="validationDefault04" required>
            <option value="color">wybierz</option>
            <option value="color">pleciony</option>
            <option value="color">łańcuszek</option>
          </select>
      </div>
      <div class="col-md-3">
        <label for="validationDefault04" class="form-label">Długość paska:</label>
          <select class="form-select" id="validationDefault04" required>
            <option value="color">wybierz</option>
            <option value="color">100 cm</option>
            <option value="color">120 cm</option>
          </select>
      </div>
      <div>
      <label for="fittings" className="label">Kolor przędzy/sznurka:</label>
      <div class="form-floating">
      <textarea class="form-control" placeholder="Wpisz wybrany kolor" id="floatingTextarea"></textarea>
      </div>
  </div>
      <style jsx>{`
        h2,h3 {
          text-transform: uppercase;
        }
        .banner {
          text-align: center;
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
          top: -20px;
          width: 700px;
          /* transform: rotateZ(-1deg); */
          box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
        }
        .info p {
          margin: 0;
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