import Image from 'next/image'
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import {Grid, Tooltip} from "@material-ui/core";
import {Zoom} from "@mui/material";


const useStyles = makeStyles({
    card: {
        width: '100px',
        height: '120px',
        margin: 5,
        '&:hover': {
            transform: 'scale(1.10)',
        }
    },
    container: {
        margin: '0 auto',
        width: 960,
        display: 'grid',
        gridTemplateColumns: 'repeat(12, auto-fill, 100px)',
        padding: '10px',
}
});

const tyarns = [
    {name: 'Banan', url: '/tyarn/Banan.png'},
    {name: 'Biskupi', url: '/tyarn/Biskupi.png'},
    {name: 'Brudna mięta', url: '/tyarn/Brudna_mieta.png'},
    {name: 'Brudny róż', url: '/tyarn/Brudny_roz.png'},
    {name: 'Błękit', url: '/tyarn/Blekit.png'},
    {name: 'Chaber', url: '/tyarn/Chaber.png'},
    {name: 'Chłodny beż', url: '/tyarn/Chlodny_bez.png'},
    {name: 'Ciasteczko', url: '/tyarn/Ciasteczko.png'},
    {name: 'Cukierkowy róż', url: '/tyarn/Cukierkowy.png'},
    {name: 'Cynamon', url: '/tyarn/Cynamon.png'},
    {name: 'Cytryna', url: '/tyarn/Cytryna.png'},
    {name: 'Czarny', url: '/tyarn/Czarny.png'},
    {name: 'Czekolada', url: '/tyarn/Czekolada.png'},
    {name: 'Czerwień', url: '/tyarn/Czerwien.png'},
    {name: 'Fuksja', url: '/tyarn/Fuksja.png'},
    {name: 'Grafit', url: '/tyarn/Grafit.png'},
    {name: 'Granat', url: '/tyarn/Granat.png'},
    {name: 'Jagodowy mus', url: '/tyarn/Jagodowy.png'},
    {name: 'Jasny fiolet', url: '/tyarn/jasnyfiolet.png'},
    {name: 'Jasny szary', url: '/tyarn/jasnyszary.png'},
    {name: 'Jodła', url: '/tyarn/Jodla.png'},
    {name: 'Kawa', url: '/tyarn/Kawa.png'},
    {name: 'Khaki', url: '/tyarn/Khaki.png'},
    {name: 'Koniak', url: '/tyarn/Koniak.png'},
    {name: 'Krem', url: '/tyarn/Krem.png'},
    {name: 'Lawenda', url: '/tyarn/Lawenda.png'},
    {name: 'Limonka', url: '/tyarn/Limonka.png'},
    {name: 'Malina', url: '/tyarn/Malina.png'},
    {name: 'Mandarynka', url: '/tyarn/Mandarynka.png'},
    {name: 'Miód', url: '/tyarn/Miod.png'},
    {name: 'Morski', url: '/tyarn/Morski.png'},
    {name: 'Musztarda', url: '/tyarn/Musztarda.png'},
    {name: 'Pastelowa mięta', url: '/tyarn/pastelowamieta.png'},
    {name: 'Petrol', url: '/tyarn/Petrol.png'},
    {name: 'Różowy krem', url: '/tyarn/rozowykrem.png'},
    {name: 'Suszone morele', url: '/tyarn/morele.png'},
    {name: 'Szary', url: '/tyarn/Szary.png'},
    {name: 'Szałwia', url: '/tyarn/szalwia.png'},
    {name: 'Słodki róż', url: '/tyarn/slodkiroz.png'},
    {name: 'Wanilia', url: '/tyarn/Wanilia.png'},
]

const Colors = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
        <Grid container xs={12} direction="row" className={classes.grid}>
            { tyarns.map((tyarn) => (
                    <Card
                    className={classes.card}
                        key={tyarn.name}
                >
                    <Image src={tyarn.url} alt={tyarn.name} width={100} height={100} />
                        <p style={{fontSize: 10}}>{tyarn.name}</p>
                </Card>
            )
            )
            }
        </Grid>
        </div>
    )
}

export default Colors
