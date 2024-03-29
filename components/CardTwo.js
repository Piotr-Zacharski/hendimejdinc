import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Link from 'next/link'
import Image from 'next/image'
import StarRating from './StarRating'

const useStyles = makeStyles({
    root: {
        maxWidth: 350,
        maxHeight: 485,
        transition: 'all .2s ease-in-out',
    },
    media: {
        objectFit: 'cover',
    },
    text: {
        color: '#b76e79',
        '&:hover': {
            textDecoration: 'underline 2px solid #B76E79',
        },
    },
})

export default function CardTwo({ product }) {
    const { title, slug, price, thumbnail } = product.fields
    const classes = useStyles()

    return (
        <Card className={classes.root} raised={true} elevation={24}>
            <CardActionArea>
                <Link href={'/products/' + slug}>
                    <Image
                        src={'https:' + thumbnail.fields.file.url}
                        width={255}
                        height={275}
                        className={classes.media}
                    />
                </Link>
                <CardContent>
                    <Link href={'/products/' + slug}>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        className={classes.text}
                    >
                        {title}
                    </Typography>
                    </Link>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        {price},00 zł
                    </Typography>
                </CardContent>
                <StarRating/>
            </CardActionArea>
        </Card>
    )
}
