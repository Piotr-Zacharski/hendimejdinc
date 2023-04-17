import React, { useState, useRef } from 'react'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { createTheme } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'
import SubmitButton from './SubmitButton'
import styled from 'styled-components'
import emailjs from '@emailjs/browser'
import { Col, Row } from 'react-bootstrap'
import {Alert, Tooltip} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ConfettiCannon from "./ConfettiCannon";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';


const patterns = [
    {name: 'Dolores' , value: 'Dolores'},
        {name: 'Halszka' , value: 'Halszka'},
        {name: 'Janette' , value: 'Janette'},
        {name: 'Makkaresh' , value: 'Makkaresh'},
        {name: 'Margerita' , value: 'Margerita'},
        {name: 'Myszka' , value: 'Myszka'},
]

const tyarns = [
    {name: 'Banan', url: '/tyarn/Banan.png'},
    {name: 'Biskupi', url: '/tyarn/Biskupi.png'},
    {name: 'Błękit', url: '/tyarn/Blekit.png'},
    {name: 'Brudna mięta', url: '/tyarn/Brudna_mieta.png'},
    {name: 'Brudny róż', url: '/tyarn/Brudny_roz.png'},
    {name: 'Chaber', url: '/tyarn/Chaber.png'},
    {name: 'Chłodny beż', url: '/tyarn/Chlodny_bez.png'},
    {name: 'Ciasteczko', url: '/tyarn/Ciasteczko.png'},
    {name: 'Cukierkowy róż', url: '/tyarn/Cukierkowy_roz.png'},
    {name: 'Cynamon', url: '/tyarn/Cynamon.png'},
    {name: 'Cytryna', url: '/tyarn/Cytryna.png'},
    {name: 'Czarny', url: '/tyarn/Czarny.png'},
    {name: 'Czekolada', url: '/tyarn/Czekolada.png'},
    {name: 'Czerwień', url: '/tyarn/Czerwien.png'},
    {name: 'Fuksja', url: '/tyarn/Fuksja.png'},
    {name: 'Grafit', url: '/tyarn/Grafit.png'},
    {name: 'Granat', url: '/tyarn/Granat.png'},
    {name: 'Jagoda', url: '/tyarn/Jagoda.png'},
    {name: 'Jasny fiolet', url: '/tyarn/Jasny_fiolet.png'},
    {name: 'Jasny szary', url: '/tyarn/Jasny_szary.png'},
    {name: 'Jeans', url: '/tyarn/Jeans.png'},
    {name: 'Jodła', url: '/tyarn/Jodla.png'},
    {name: 'Kawa', url: '/tyarn/Kawa.png'},
    {name: 'Khaki', url: '/tyarn/Khaki.png'},
    {name: 'Koniak', url: '/tyarn/Koniak.png'},
    {name: 'Krem', url: '/tyarn/Krem.png'},
    {name: 'Lawenda', url: '/tyarn/Lawenda.png'},
    {name: 'Limonka', url: '/tyarn/Limonka.png'},
    {name: 'Łosoś', url: '/tyarn/Losos.png'},
    {name: 'Malina', url: '/tyarn/Malina.png'},
    {name: 'Mandarynka', url: '/tyarn/Mandarynka.png'},
    {name: 'Miód', url: '/tyarn/Miod.png'},
    {name: 'Morski', url: '/tyarn/Morski.png'},
    {name: 'Musztarda', url: '/tyarn/Musztarda.png'},
    {name: 'Pastelowa mięta', url: '/tyarn/Pastelowa_mieta.png'},
    {name: 'Petrol', url: '/tyarn/Petrol.png'},
    {name: 'Różowy krem', url: '/tyarn/Rozowy_krem.png'},
    {name: 'Słodki róż', url: '/tyarn/Slodki_roz.png'},
    {name: 'Suszone morele', url: '/tyarn/Suszone_morele.png'},
    {name: 'Szałwia', url: '/tyarn/Szalwia.png'},
    {name: 'Szary', url: '/tyarn/Szary.png'},
    {name: 'Śliwka', url: '/tyarn/Sliwka.png'},
    {name: 'Śmietanka', url: '/tyarn/Smietanka.png'},
    {name: 'Śnieżna biel', url: '/tyarn/Sniezna_biel.png'},
    {name: 'Wanilia', url: '/tyarn/Wanilia.png'},
    {name: 'Wino', url: '/tyarn/Wino.png'},
    {name: 'Zieleń', url: '/tyarn/Zielen.png'},
]
const cords = [
    {name: 'Banan', url: '/cord/Banan.png'},
    {name: 'Barbie', url: '/cord/Barbie.png'},
    {name: 'Błękit', url: '/cord/Blekit.png'},
    {name: 'Brudny róż', url: '/cord/Brudny_roz.png'},
    {name: 'Brzoskwinia', url: '/cord/Brzoskwinia.png'},
    {name: 'Cegła', url: '/cord/Cegla.png'},
    {name: 'Chaber', url: '/cord/Chaber.png'},
    {name: 'Ciasteczko', url: '/cord/Ciasteczko.png'},
    {name: 'Ciemna zieleń', url: '/cord/Ciemna_zielen.png'},
    {name: 'Cukierkowy róż', url: '/cord/Cukierkowy_roz.png'},
    {name: 'Cynamon', url: '/cord/Cynamon.png'},
    {name: 'Cytryna', url: '/cord/Cytryna.png'},
    {name: 'Czarny', url: '/cord/Czarny.png'},
    {name: 'Czekolada', url: '/cord/Czekolada.png'},
    {name: 'Czerwień', url: '/cord/Czerwien.png'},
    {name: 'Fiołek', url: '/cord/Fiolek.png'},
    {name: 'Grafit', url: '/cord/Grafit.png'},
    {name: 'Granat', url: '/cord/Granat.png'},
    {name: 'Jagoda', url: '/cord/Jagoda.png'},
    {name: 'Jasny szary 1', url: '/cord/Jasny_szary1.png'},
    {name: 'Jasny szary 2', url: '/cord/Jasny_szary2.png'},
    {name: 'Jeans', url: '/cord/Jeans.png'},
    {name: 'Jodła', url: '/cord/Jodla.png'},
    {name: 'Karmel', url: '/cord/Karmel.png'},
    {name: 'Kawa', url: '/cord/Kawa.png'},
    {name: 'Khaki', url: '/cord/Khaki.png'},
    {name: 'Koralowy', url: '/cord/Koralowy.png'},
    {name: 'Krem', url: '/cord/Krem.png'},
    {name: 'Lawenda', url: '/cord/Lawenda.png'},
    {name: 'Lazur', url: '/cord/Lazur.png'},
    {name: 'Len', url: '/cord/Len.png'},
    {name: 'Limonka', url: '/cord/Limonka.png'},
    {name: 'Lodowy', url: '/cord/Lodowy.png'},
    {name: 'Malina', url: '/cord/Malina.png'},
    {name: 'Mandarynka', url: '/cord/Mandarynka.png'},
    {name: 'Melanż jeans-róż', url: '/cord/Melanz_jeans-roz.png'},
    {name: 'Melanż róż-granat', url: '/cord/Melanz_roz-granat.png'},
    {name: 'Melanż róż-szary', url: '/cord/Melanz_roz-szary.png'},
    {name: 'Melanż śliwka-malina-petrol', url: '/cord/Melanz_sliwka-malina-petrol.png'},
    {name: 'Melanż złoty', url: '/cord/Melanz_zloty.png'},
    {name: 'Miód', url: '/cord/Miod.png'},
    {name: 'Mleczna czekolada', url: '/cord/Mleczna_czekolada.png'},
    {name: 'Morski', url: '/cord/Morski.png'},
    {name: 'Musztarda', url: '/cord/Musztarda.png'},
    {name: 'Oliwka', url: '/cord/Oliwka.png'},
    {name: 'Petrol', url: '/cord/Petrol.png'},
    {name: 'Pistacja', url: '/cord/Pistacja.png'},
    {name: 'Popielaty', url: '/cord/Popielaty.png'},
    {name: 'Różowy krem', url: '/cord/Rozowy_krem.png'},
    {name: 'Siwy', url: '/cord/Siwy.png'},
    {name: 'Szałwia', url: '/cord/Szalwia.png'},
    {name: 'Szary', url: '/cord/Szary.png'},
    {name: 'Słodki róż', url: '/cord/Slodki_roz.png'},
    {name: 'Śliwka', url: '/cord/Sliwka.png'},
    {name: 'Śnieżna biel', url: '/cord/Sniezna_biel.png'},
    {name: 'Ultrafiolet', url: '/cord/Ultrafiolet.png'},
    {name: 'Wanilia', url: '/cord/Wanilia.png'},
    {name: 'Wino', url: '/cord/Wino.png'},
    {name: 'Wiśnia', url: '/cord/Wisnia.png'},
    {name: 'Wrzos', url: '/cord/Wrzos.png'},
    {name: 'Zieleń 1', url: '/cord/Zielen_1.png'},
    {name: 'Zieleń 2', url: '/cord/Zielen_2.png'},
]

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(2),
        minWidth: 150,
        color: '#222f3e',
        '&:focus': {
            color: '#b76e79',
        },
    },
    btn: {
        display: 'inline',
    },
    form: {
        display: 'grid',
        maxWidth: 600,
        margin: '0 auto',
    },
    container: {
        marginTop: 40,
    },
    selectEmpty: {
        display: 'grid',
        marginTop: theme.spacing(2),
        color: '#222f3e',
        '&:focus': {
            color: '#b76e79',
        },
    },
    root: {
        '& > *': {
            margin: theme.spacing(2),
            width: '25ch',
        },
    },
    select: {
            display: 'flex',
    }
}))

const theme = createTheme({
    palette: {
        primary: {
            main: '#b76e79',
        },
        secondary: {
            main: '#ffb6c1',
        },
    },
})
const StyledText = styled.h3`
    justify-content: center;
    display: flex;
    margin: 0 auto;
    margin-bottom: 40px;
    align-items: center;
    font-size: 2rem;
    position: relative;
    z-index: 2;
    border-radius: 15px;
  
    color: #222f3e;
    @media (max-width: 700px) {
        font-size: 0.8rem;
        padding: 0 10px;
        width: 100%;
        justify-content: center;
        display: flex;
        margin: 0 auto;
        align-items: center;
    }
`
 const StyledSpan = styled.span`
  margin-left: 5px;
 `;
export default function Input() {
    const classes = useStyles()
    const form = useRef()
    const [alert, setAlert] = useState(null)
    const [cannon, setCannon] = useState(null)

    const info = <Alert severity="success" sx={{ width: 568, margin: '20px auto' }} style={{backgroundColor: '#d5aab0', color: 'white', justifyContent: 'center'}}>Twoje zamówienie zostało wysłane.</Alert>
    const boom = <ConfettiCannon />
    const SERVICE_ID = 'formularz'
    const TEMPLATE_ID = 'template_cyejmfu'
    const USER_ID = 'e9aXqh1wWz7R1VjQi'

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID).then(
            function (result) {
                console.log(result.text)
                setAlert(info)
                setCannon(boom)
                setTimeout(() => {
                    setAlert(null)
                }, 6000)
                clearState()
            },
            function (error) {
                console.log(error)
            }
        )
    }
    const [color, setColor] = useState('')
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [length, setLength] = useState('')
    const [cord, setCord] = useState('')
    const [yarn, setYarn] =useState('')
    const [userRemarks, setUserRemarks] = useState('')
    const [userEmail, setUserEmail] = useState('')

    const handleChangeColor = (event) => {
        setColor(event.target.value)
    }
    const handleChangeName = (event) => {
        setName(event.target.value)
    }
    const handleChangeType = (event) => {
        setType(event.target.value)
    }
    const handleChangeLength = (event) => {
        setLength(event.target.value)
    }
    const handleChangeCord = (event) => {
        setCord(event.target.value)
    }
    const handleChangeYarn = (event) => {
        setYarn(event.target.value)
    }
    const handleChangeUserRemarks = (event) => {
        setUserRemarks(event.target.value)
    }
    const handleChangeUserEmail = (event) => {
        setUserEmail(event.target.value)
    }
    const clearState = () => {
        setColor('')
        setName('')
        setType('')
        setLength('')
        setCord('')
        setYarn('')
        setUserRemarks('')
        setUserEmail('')
    }
    const hiddenValues = name && color && type && length && userEmail && (cord || yarn);

    const cordText = "wybrano przędzę";
    const yarnText = "wybrano sznurek";
    const remarksText = "Brak uwag";
    const tooltipInfo = [{id: 1, intro: "Torebki i plecaki, które tworzę, są dopasowane do Twoich preferencji."},
        {id: 2, decision: "Ty decydujesz o:"},
        {id: 3, option: "- kolorze torebki/plecaka oraz metalowych dodatków:"},
        {id: 4, colors: "Torebka może zostać wykonana w wybranym przez Ciebie kolorze - karta kolorów sznurka oraz przędzy t-shirt yarn znajduje się w zakładce \"Kolory\"."},
        {id: 5 , metal: "Do wyboru jest również kolor okuć (metalowych kółek, karabińczyków, klamry) oraz łańcuszka. Dostępna jest wersja srebrna oraz złota."},
        {id: 6, belt: "- długości paska dołączonego do torebki:"},
        {id: 7, beltLength: "Pasek  metalowy może mieć długość 100 cm lub 120 cm (w przypadku paska plecionego w torebkach dla dzieci można zdecydować o innej długości)."},
        {id: 8, remember:  "Pamiętaj, że możliwa jest niewielka rozbieżność w wymiarze torebki lub plecaka - różnica +/- 2 cm od podanych przeze mnie wymiarów wynika ze względu na to, że produkty wykonywane są ręcznie."},
        {id: 9, date: "Termin realizacji zamówienia wynosi 14-21 dni."}];
    const otherLength = "w przypadku paska plecionego do torebki lub rączek do plecaka (wpisz wybraną długość w rubryce \"Uwagi dodatkowe\")"



    return (
        <ThemeProvider theme={theme}>
            <div className={classes.container}>
                <form ref={form} onSubmit={sendEmail}>
                    <div className={classes.form}>
                    <StyledText>Skomponuj swoją torebkę/plecak<StyledSpan /> <Tooltip placement="right-end" title={tooltipInfo.map(item => (
                        <>
                        <strong><p>{item.intro}</p></strong>
                        <strong><p>{item.decision}</p></strong>
                        <p>{item.option}</p>
                        <p>{item.colors}</p>
                        <p>{item.metal}</p>
                        <p>{item.belt}</p>
                        <p>{item.beltLength}</p>
                        <p>{item.remember}</p>
                        <strong><p>{item.date}</p></strong>
                        </>
                    ))}>
                        <button
                            style={{
                                border: 'none',
                                backgroundColor: 'transparent',
                                marginTop: 1,
                                padding: 0,
                            }}
                        >
                            <InfoOutlinedIcon />
                        </button>
                    </Tooltip></StyledText>
                    <FormControl
                        required
                        className={classes.formControl}
                        variant="outlined"
                    >
                        <InputLabel
                            id="demo-simple-select-required-label"
                            className={classes.color}
                        >
                            Wzór
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-required-label"
                            id="demo-simple-select-required"
                            value={name}
                            onChange={handleChangeName}
                            className={classes.selectEmpty}
                            name="name"
                        >
                            {patterns.map(pattern => (
                                <MenuItem value={pattern.value} key={pattern.value}><Box sx={{display: "flex"}}>
                                    {pattern.name}</Box></MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl
                        required
                        className={classes.formControl}
                        variant="outlined"
                    >
                        <InputLabel id="demo-simple-select-required-label">
                            Kolor okucia
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-required-label"
                            id="demo-simple-select-required"
                            value={color}
                            onChange={handleChangeColor}
                            className={classes.selectEmpty}
                            name="color"
                        >
                            <MenuItem value="złoty"><Box sx={{display: "flex"}}>złoty</Box></MenuItem>
                            <MenuItem value="srebrny"><Box sx={{display: "flex"}}>srebrny</Box></MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl
                        required
                        variant="outlined"
                        className={classes.formControl}
                    >
                        <InputLabel id="demo-simple-select-required-label">
                            Rodzaj paska
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-required-label"
                            id="demo-simple-select-required"
                            value={type}
                            onChange={handleChangeType}
                            className={classes.selectEmpty}
                            name="type"
                        >
                            <MenuItem value="pleciony"><Box sx={{display: "flex"}}>pleciony</Box></MenuItem>
                            <MenuItem value="łańcuszek"><Box sx={{display: "flex"}}>łańcuszek</Box></MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl
                        required
                        className={classes.formControl}
                        variant="outlined"
                    >
                        <InputLabel id="demo-simple-select-required-label">
                            Długość paska
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-required-label"
                            id="demo-simple-select-required"
                            value={length}
                            onChange={handleChangeLength}
                            className={classes.selectEmpty}
                            name="length"
                        >
                            <MenuItem value={100}><Box sx={{display: "flex"}}>100 cm</Box></MenuItem>
                            <MenuItem value={120}><Box sx={{display: "flex"}}>120 cm</Box></MenuItem>
                            <MenuItem value={'inna'}><Box sx={{display: "flex", flexGrow: 1}}>inna <Tooltip placement="right" title={otherLength}>
                                <button
                                    style={{
                                        border: 'none',
                                        backgroundColor: 'transparent',
                                        marginTop: 1,
                                        padding: 0,
                                    }}
                                >
                                    <InfoOutlinedIcon style={{fontSize: 16, padding: 0.3, justifyContent: 'center', alignItems: 'center', marginLeft: 3}}/>
                                </button>
                            </Tooltip></Box></MenuItem>
                        </Select>
                    </FormControl>
                        <FormControl
                            className={classes.formControl}
                            variant="outlined"
                        >
                            <InputLabel id="demo-simple-select-required-label">
                                Kolor przędzy
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required"
                                value={yarn}
                                onChange={handleChangeYarn}
                                name="cord"
                            >
                                {tyarns.map((yarn) => (
                                    <MenuItem
                                        value={yarn.name} key={yarn.name}>
                                        <Box sx={{display: "flex"}}><img src={yarn.url} width={20} height={20} alt={yarn.name}></img>
                                            <Typography style={{marginLeft: 10}}>{yarn.name}</Typography></Box>

                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <Typography>lub</Typography>
                        <FormControl
                            className={classes.formControl}
                            variant="outlined"
                        >
                            <InputLabel id="demo-simple-select-required-label">
                                Kolor sznurka
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required"
                                value={cord}
                                onChange={handleChangeCord}
                                name="cord"
                            >
                                {cords.map((cord) => (
                                    <MenuItem
                                        value={cord.name} key={cord.name}>
                                        <Box sx={{display: "flex"}}><img src={cord.url} width={20} height={20} alt={cord.name}></img>
                                            <Typography style={{marginLeft: 10}}>{cord.name}</Typography></Box>

                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl
                            required
                            className={classes.formControl}
                            variant="outlined">
                            <TextField
                                type="remarks"
                                className={classes.selectEmpty}
                                label="Uwagi dodatkowe"
                                variant="outlined"
                                multiline
                                name="userRemarks"
                                value={userRemarks}
                                onChange={handleChangeUserRemarks}
                            />
                        </FormControl>
                        <FormControl
                            required
                            className={classes.formControl}
                            variant="outlined">
                        <TextField
                            type="email"
                            className={classes.selectEmpty}
                            label="Email"
                            variant="outlined"
                            required
                            name="userEmail"
                            value={userEmail}
                            onChange={handleChangeUserEmail}
                        />
                        </FormControl>
                    </div>
                    { hiddenValues &&
                        <>
                        <Row className="justify-content-md-center mt-5">
                            <Col md={4} className="justify-content-md-start">
                                <h3>Podsumowanie:</h3>
                                    <ul className="list-group mt-3">
                                        <li className="list-group-item text-start">
                                                Wzór:
                                            <strong>{name === ' ' ? 'N/A' : ' ' + name.charAt(0).toUpperCase() + name.slice(1)}</strong>
                                        </li>
                                        <li className="list-group-item text-start">
                                                Kolor okucia:
                                            <strong>{color === ' ' ? 'N/A' : ' ' + color}</strong>
                                        </li>
                                        <li className="list-group-item text-start">
                                                Rodzaj paska:
                                            <strong>{type === ' ' ? 'N/A' : ' ' + type}</strong>
                                        </li>
                                        <li className="list-group-item text-start">
                                                Długość paska:
                                            <strong>{length === ' ' ? 'N/A' : ' ' + `${length} cm` || length === 'inna' ? ' ' + `${length}` : ' ' + 'N/A'}</strong>
                                        </li>
                                        <li className="list-group-item text-start">
                                                Kolor sznurka:
                                            <strong>{cord === ' ' ? ' ' + yarnText : ' ' + cord} </strong>
                                        </li>
                                        <li className="list-group-item text-start">
                                            Kolor przędzy:
                                            <strong>{yarn === ' ' ? ' ' + cordText : ' ' + yarn} </strong>
                                        </li>
                                        <li className="list-group-item text-start">
                                            Uwagi:
                                            <strong>{userRemarks === ' ' ? ' ' + remarksText : ' ' + userRemarks}</strong>
                                        </li>
                                        <li className="list-group-item text-start">
                                                Email:
                                            <strong>{userEmail === ' ' ? ' N/A' : ' ' + userEmail}</strong>
                                        </li>
                                    </ul>
                            </Col>
                        </Row>
                            <div className={classes.btn}>
                                    <SubmitButton />
                            </div>
                        </>
                        }
                </form>
                {alert}
                {cannon}
            </div>
        </ThemeProvider>
    )
}
