import Image from 'next/image'
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import {useMediaQuery} from "@mui/material";


const useStyles = makeStyles({
    card: {
        margin: 17,
        '&:hover': {
            transform: 'scale(1.10)',
        }
    },
    container: {
        margin: '0 auto',
        width: '100%',
        display: 'grid',
        padding: '10px',
}
});

const tyarns = [
    {name: 'Śnieżna biel', url: '/tyarn/Sniezna_biel.png'},
    {name: 'Chłodny beż', url: '/tyarn/Chlodny_bez.png'},
    {name: 'Wanilia', url: '/tyarn/Wanilia.png'},
    {name: 'Śmietanka', url: '/tyarn/Smietanka.png'},
    {name: 'Krem', url: '/tyarn/Krem.png'},
    {name: 'Ciasteczko', url: '/tyarn/Ciasteczko.png'},
    {name: 'Koniak', url: '/tyarn/Koniak.png'},
    {name: 'Miód', url: '/tyarn/Miod.png'},
    {name: 'Kawa', url: '/tyarn/Kawa.png'},
    {name: 'Cynamon', url: '/tyarn/Cynamon.png'},
    {name: 'Czekolada', url: '/tyarn/Czekolada.png'},
    {name: 'Musztarda', url: '/tyarn/Musztarda.png'},
    {name: 'Suszone morele', url: '/tyarn/Suszone_morele.png'},
    {name: 'Mandarynka', url: '/tyarn/Mandarynka.png'},
    {name: 'Czerwień', url: '/tyarn/Czerwien.png'},
    {name: 'Wino', url: '/tyarn/Wino.png'},
    {name: 'Różowy krem', url: '/tyarn/Rozowy_krem.png'},
    {name: 'Łosoś', url: '/tyarn/Losos.png'},
    {name: 'Brudny róż', url: '/tyarn/Brudny_roz.png'},
    {name: 'Cukierkowy róż', url: '/tyarn/Cukierkowy_roz.png'},
    {name: 'Słodki róż', url: '/tyarn/Slodki_roz.png'},
    {name: 'Malina', url: '/tyarn/Malina.png'},
    {name: 'Fuksja', url: '/tyarn/Fuksja.png'},
    {name: 'Biskupi', url: '/tyarn/Biskupi.png'},
    {name: 'Jagoda', url: '/tyarn/Jagoda.png'},
    {name: 'Jasny fiolet', url: '/tyarn/Jasny_fiolet.png'},
    {name: 'Lawenda', url: '/tyarn/Lawenda.png'},
    {name: 'Śliwka', url: '/tyarn/Sliwka.png'},
    {name: 'Banan', url: '/tyarn/Banan.png'},
    {name: 'Cytryna', url: '/tyarn/Cytryna.png'},
    {name: 'Limonka', url: '/tyarn/Limonka.png'},
    {name: 'Zieleń', url: '/tyarn/Zielen.png'},
    {name: 'Khaki', url: '/tyarn/Khaki.png'},
    {name: 'Szałwia', url: '/tyarn/szalwia.png'},
    {name: 'Jodła', url: '/tyarn/Jodla.png'},
    {name: 'Pastelowa mięta', url: '/tyarn/Pastelowa_mieta.png'},
    {name: 'Brudna mięta', url: '/tyarn/Brudna_mieta.png'},
    {name: 'Błękit', url: '/tyarn/Blekit.png'},
    {name: 'Jeans', url: '/tyarn/Jeans.png'},
    {name: 'Chaber', url: '/tyarn/Chaber.png'},
    {name: 'Petrol', url: '/tyarn/Petrol.png'},
    {name: 'Morski', url: '/tyarn/Morski.png'},
    {name: 'Granat', url: '/tyarn/Granat.png'},
    {name: 'Jasny szary', url: '/tyarn/Jasny_szary.png'},
    {name: 'Szary', url: '/tyarn/Szary.png'},
    {name: 'Grafit', url: '/tyarn/Grafit.png'},
    {name: 'Czarny', url: '/tyarn/Czarny.png'},

]

const TShirtYarn = () => {
    const isMobile = useMediaQuery('maxWidth: 375px')
    const classes = useStyles();
    return (
        <div className={classes.container}>
        <Grid container xs={12} md={12} sx={{direction: isMobile ? "column" : "row", gridTemplateColumns: isMobile ? 'repeat(3, auto-fill, 50px)': 'repeat(12, auto-fill, 100px)' }} className={classes.grid}>
            { tyarns.map((tyarn) => (
                    <Card
                        sx={{width: isMobile ? 60 : 100, height: isMobile ? 80 : 125}}
                    className={classes.card}
                        key={tyarn.name}
                >
                    <Image src={tyarn.url} alt={tyarn.name} width={isMobile ? 60 : 100} height={isMobile ? 80 : 100} />
                        <p style={{fontSize: 10, marginBottom: 5 }}>{tyarn.name.toUpperCase()}</p>
                </Card>
            )
            )
            }
        </Grid>
        </div>
    )
}

export default TShirtYarn
