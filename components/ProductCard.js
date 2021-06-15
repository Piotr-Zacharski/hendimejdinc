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
                    <p>Cena: { price }zł</p>
                </div>
                <div className="actions">
                    <Link href={'/products/' + slug}><a>Opis</a></Link>
                </div>
            </div>
            <style jsx>{`
            .card {
                transform: rotateZ(-1deg);
              }
              .content {
                background: lightpink;
                box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
                margin: 0;
                position: relative;
                top: -40px;
                left: -10px;
              }
              .info {
                padding: 16px;
              }
              .info h4 {
                margin: 4px 0;
                text-transform: uppercase;
                text-align: center;
                color: white;
              }
              .info p {
                margin: 0;
                color: #777;
                text-align: center;
              }
              .actions {
                margin-top: -20px;
                display: flex;
                justify-content: flex-end;
              }
              .actions a {
                color: #fff;
                background: #f01b29;
                padding: 16px 24px;
                text-decoration: none;
              }
              .featured {
                align-items: center;
                justify-content: center;
                display: flex;
                margin: 0 auto;
              }

            `}</style>
        </div>
    )
}
