import React from 'react'
import Link from "next/link"
import Image from 'next/image'

export default function Card({ product }) {
    const { title, slug, price, thumbnail} = product.fields
    return (
        <div className="card-main">
            <div class="card">
            <Image
                src={'https:' + thumbnail.fields.file.url}
                width={thumbnail.fields.file.details.image.width}
                height={thumbnail.fields.file.details.image.height}
                className="img"
            />
            <div class="card-body">
            <h5 class="card-title">{ title }</h5>
            <p class="card-text">Cena: { price }zł</p>
            </div>
            <div className="desc">
            <Link href={'/products/' + slug}><a className="desc">Zobacz więcej</a></Link>
            </div>
            </div>
        </div>
    )
}
