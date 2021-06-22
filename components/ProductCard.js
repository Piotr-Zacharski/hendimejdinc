import Link from "next/link"
import Image from 'next/image'

export default function ProductCard({ product }) {
    const { title, slug, price, thumbnail} = product.fields
    return (
        <div className="card">
            <div className="featured">
                <Image 
                src={'https:' + thumbnail.fields.file.url}
                width={thumbnail.fields.file.details.image.width}
                height={thumbnail.fields.file.details.image.height}
                className="img"
                />
            </div>
            <div className="content">
                <div className="info">
                    <h4>{ title }</h4>
                    <p>Cena: { price } zł</p>
                </div>
                <div className="actions">
                    <Link href={'/products/' + slug}><a>Zobacz więcej</a></Link>
                </div>
            </div>
        </div>
    )
}
