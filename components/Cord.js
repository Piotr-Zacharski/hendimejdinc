import Image from 'next/image'
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import {Grid, Tooltip} from "@material-ui/core";
import {Zoom} from "@mui/material";


const useStyles = makeStyles({
    card: {
        width: '100px',
        height: '125px',
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

const cords = [
    {name: 'Śnieżna biel', url: '/cord/Sniezna_biel.png'},
    {name: 'Len', url: '/cord/Len.png'},
    {name: 'Wanilia', url: '/cord/Wanilia.png'},
    {name: 'Krem', url: '/cord/Krem.png'},
    {name: 'Ciasteczko', url: '/cord/Ciasteczko.png'},
    {name: 'Miód', url: '/cord/Miod.png'},
    {name: 'Karmel', url: '/cord/Karmel.png'},
    {name: 'Kawa', url: '/cord/Kawa.png'},
    {name: 'Cynamon', url: '/cord/Cynamon.png'},
    {name: 'Mleczna czekolada', url: '/cord/Mleczna_czekolada.png'},
    {name: 'Czekolada', url: '/cord/Czekolada.png'},
    {name: 'Musztarda', url: '/cord/Musztarda.png'},
    {name: 'Cegła', url: '/cord/Cegla.png'},
    {name: 'Brzoskwinia', url: '/cord/Brzoskwinia.png'},
    {name: 'Mandarynka', url: '/cord/Mandarynka.png'},
    {name: 'Czerwień', url: '/cord/Czerwien.png'},
    {name: 'Wiśnia', url: '/cord/Wisnia.png'},
    {name: 'Wino', url: '/cord/Wino.png'},
    {name: 'Różowy krem', url: '/cord/Rozowy_krem.png'},
    {name: 'Koralowy', url: '/cord/Koralowy.png'},
    {name: 'Brudny róż', url: '/cord/Brudny_roz.png'},
    {name: 'Cukierkowy róż', url: '/cord/Cukierkowy_roz.png'},
    {name: 'Słodki róż', url: '/cord/Slodki_roz.png'},
    {name: 'Barbie', url: '/cord/Barbie.png'},
    {name: 'Malina', url: '/cord/Malina.png'},
    {name: 'Jagoda', url: '/cord/Jagoda.png'},
    {name: 'Lawenda', url: '/cord/Lawenda.png'},
    {name: 'Wrzos', url: '/cord/Wrzos.png'},
    {name: 'Ultrafiolet', url: '/cord/Ultrafiolet.png'},
    {name: 'Śliwka', url: '/cord/Sliwka.png'},
    {name: 'Banan', url: '/cord/Banan.png'},
    {name: 'Cytryna', url: '/cord/Cytryna.png'},
    {name: 'Limonka', url: '/cord/Limonka.png'},
    {name: 'Zieleń 1', url: '/cord/Zielen_1.png'},
    {name: 'Zieleń 2', url: '/cord/Zielen_2.png'},
    {name: 'Khaki', url: '/cord/Khaki.png'},
    {name: 'Szałwia', url: '/cord/Szalwia.png'},
    {name: 'Jodła', url: '/cord/Jodla.png'},
    {name: 'Ciemna zieleń', url: '/cord/Ciemna_zielen.png'},
    {name: 'Pistacja', url: '/cord/Pistacja.png'},
    {name: 'Oliwka', url: '/cord/Oliwka.png'},
    {name: 'Lodowy', url: '/cord/Lodowy.png'},
    {name: 'Lazur', url: '/cord/Lazur.png'},
    {name: 'Morski', url: '/cord/Morski.png'},
    {name: 'Błękit', url: '/cord/Blekit.png'},
    {name: 'Fiołek', url: '/cord/Fiolek.png'},
    {name: 'Jeans', url: '/cord/Jeans.png'},
    {name: 'Chaber', url: '/cord/Chaber.png'},
    {name: 'Petrol', url: '/cord/Petrol.png'},
    {name: 'Granat', url: '/cord/Granat.png'},
    {name: 'Siwy', url: '/cord/Siwy.png'},
    {name: 'Jasny szary 1', url: '/cord/Jasny_szary1.png'},
    {name: 'Jasny szary 2', url: '/cord/Jasny_szary2.png'},
    {name: 'Popielaty', url: '/cord/Popielaty.png'},
    {name: 'Szary', url: '/cord/Szary.png'},
    {name: 'Grafit', url: '/cord/Grafit.png'},
    {name: 'Czarny', url: '/cord/Czarny.png'},
    {name: 'Melanż jeans-róż', url: '/cord/Melanz_jeans-roz.png'},
    {name: 'Melanż róż-granat', url: '/cord/Melanz_roz-granat.png'},
    {name: 'Melanż róż-szary', url: '/cord/Melanz_roz-szary.png'},
    {name: 'Melanż śliwka-malina-petrol', url: '/cord/Melanz_sliwka-malina-petrol.png'},
    {name: 'Melanż złoty', url: '/cord/Melanz_zloty.png'},
]




const Cord = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
        <Grid container xs={12} direction="row" className={classes.grid}>
            { cords.map((cord) => (
                    <Card
                    className={classes.card}
                        key={cord.name}
                >
                    <Image src={cord.url} alt={cord.name} width={100} height={100} />
                        <p style={{fontSize: 11, marginBottom: 5 }}>{cord.name}</p>
                </Card>
            )
            )
            }
        </Grid>
        </div>
    )
}

export default Cord
