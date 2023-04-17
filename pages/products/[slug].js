import { createClient } from 'contentful'
// import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Paper, Grid } from '@material-ui/core'
import Link from "next/link";
import styled from "styled-components";
import Magnifier from "react-magnifier";



const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: 'product',
    })

    const paths = res.items.map((item) => {
        return {
            params: { slug: item.fields.slug },
        }
    })

    return {
        paths,
        fallback: true,
    }
}

export const getStaticProps = async ({ params }) => {
    const { items } = await client.getEntries({
        content_type: 'product',
        'fields.slug': params.slug,
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
        revalidate: 1,
    }
}

const StyledLink = styled.p`
  font-size: 16px;
  cursor: pointer;
  &:hover {
  color: #B76E79;
  text-decoration: underline;
}
`;

export default function ProductDetails({ product }) {

    if (!product) return <h2>Ooops...!</h2>

    const { featuredImage, title, price, description } = product.fields

    return (
        <div className="container">
            <Paper
                elevation={5}
                style={{ maxWidth: 1400, margin: '0 auto' }}
            >
                <h2 className="title">
                    {title} <p className="price">{price},00 zł</p>
                </h2>
                <Grid container>
                    <Grid item xs={5}>
                        <Magnifier src={'https:' + featuredImage.fields.file.url}
                                   width={540}
                                   mgWidth={150}
                                   mgHeight={150}
                                   mgBorderWidth={1}
                                   zoomFactor={0.8}
                        />
                                {/*<Image*/}
                                {/*    src={'https:' + featuredImage.fields.file.url}*/}
                                {/*    width={featuredImage.fields.file.details.image.width}*/}
                                {/*    height={featuredImage.fields.file.details.image.height}*/}
                                {/*    className="feature"*/}
                                {/*/>*/}
                    </Grid>
                    <Grid item xs={7}>
                        <div className="method">
                            {documentToReactComponents(description)}
                            <Link href={'/gallery'}><StyledLink>Wybierz swój kolor tutaj</StyledLink></Link>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
            <style jsx>{`
                h2 {
                    text-transform: uppercase;
                    flex-wrap: wrap;
                    line-height: 1.6;
                    color: #FFFFFF;
                }
                .feature {
                  padding: 15px;
                }
                .banner {
                    text-align: center;
                    display: block;
                    height: 100%;
                    maxwidth: 500px;
                }
                .container {
                    margin: 50px auto;
                    align-items: center;
                    justify-content: center;
                }
                .method {
                    width: 100%;
                    font-size: 18px;
                    padding: 15px;
                    text-align: left;
                }
                .price {
                    margin: 0;
                    padding: 5;
                    color: white;
                    font-size: 1rem;
                    text-transform: lowercase;
                }
                .banner h2 {
                    text-align: center;
                    align-items: center;
                    margin: 0 auto;
                    background: #b76e79;
                    color: white;
                    display: block;
                    padding: 20px;
                    position: relative;
                    top: 20px;
                    maxwidth: 500px;
                    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
                }
                .info p {
                    margin: 0;
                    padding: 0;
                }
                .info span::after {
                    content: ', ';
                }
                .info span:last-child::after {
                    content: '.';
                }
                .paper {
                    justify-content: center;
                    width: 960px;
                }
            `}</style>
        </div>
    )
}
