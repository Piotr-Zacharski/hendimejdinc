import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import Image from 'next/image';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    maxHeight: 485,
  },
  media: {
    height: 140,
  },
});

export default function CardTwo({ product }) {
    const { title, slug, price, thumbnail} = product.fields
  const classes = useStyles();

  return (
          <Card className={classes.root} raised={true}>
            <CardActionArea>
              <Link href={'/products/' + slug}><Image
                      src={'https:' + thumbnail.fields.file.url}
                      width={thumbnail.fields.file.details.image.width}
                      height={thumbnail.fields.file.details.image.height}
                      className="img"
              /></Link>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                { title }
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Cena: { price } zł
                </Typography>
              </CardContent>
            </CardActionArea>
            {/* <CardActions>
              <Button size="small" color="primary">
              <Link href={'/products/' + slug}><a className="desc">Do koszyka</a></Link>
              </Button>
            </CardActions> */}
          </Card>
  );
}