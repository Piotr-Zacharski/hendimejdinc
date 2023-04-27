import { createClient } from 'contentful'
import CardTwo from '../components/CardTwo'
import styled from "styled-components";


const StyledContainer = styled.div`
  display: inline-flex;
  align-self: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 50px 80px;
  text-align: center;
  justify-content: center;
  margin: 20px 0 auto;
  flex-wrap: wrap;
  max-width: 1200px;
`;

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })

    const res = await client.getEntries({ content_type: 'product' })

    return {
        props: {
            products: res.items,
        },
        revalidate: 1,
    }
}

export default function Products({ products }) {
    return (
        <StyledContainer>
            {products.map((product) => (
                <CardTwo key={product.sys.id} product={product} />
            ))}
        </StyledContainer>
    )
}
