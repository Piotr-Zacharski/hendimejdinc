import { createClient } from 'contentful'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Paper } from '@material-ui/core'
import { motion } from 'framer-motion'

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

export default function ProductDetails({ product }) {
    if (!product) return <h2>Ooops...!</h2>

    const { featuredImage, title, price, description } = product.fields

    return (
        <div className="container">
            <Paper
                elevation={5}
                style={{ maxWidth: 1400, margin: '0 auto' }}
                className="paper"
            >
                <div className="banner">
                    <motion.div whileHover={{ scale: 1.2 }}>
                        <Image
                            src={'https:' + featuredImage.fields.file.url}
                            width={
                                featuredImage.fields.file.details.image.width
                            }
                            height={
                                featuredImage.fields.file.details.image.height
                            }
                            className="feature"
                        />
                    </motion.div>
                    <h2 className="title">
                        {title} <p className="price">{price},00 zł</p>
                    </h2>
                </div>

                <div className="info"></div>
                <div className="method">
                    {documentToReactComponents(description)}
                </div>
            </Paper>
            <style jsx>{`
                h2 {
                    text-transform: uppercase;
                    flex-wrap: wrap;
                    line-height: 1.6;
                }
                .banner {
                    text-align: center;
                    display: block;
                    height: 100%;
                    maxwidth: 500px;
                }
                .container {
                    margin: 0 auto;
                    align-items: center;
                    text-align: center;
                    justify-content: center;
                }
                .method {
                    width: 100%;
                    font-size: 18px;
                    padding: 10px;
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
                    text-align: center;
                    justify-content: center;
                    width: 940px;
                    align-items: center;
                }
            `}</style>
        </div>
    )
}
