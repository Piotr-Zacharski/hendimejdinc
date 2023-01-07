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
import {Alert} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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
    {name: 'Jagoda', url: '/tyarn/Jagodowy.png'},
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
export default function Input() {
    const classes = useStyles()
    const form = useRef()
    const [alert, setAlert] = useState(null)

    const info = <Alert severity="success" sx={{ width: '100%' }} style={{backgroundColor: '#d5aab0', color: 'white', justifyContent: 'center'}}>Twoje zamówienie zostało wysłane.</Alert>

    const SERVICE_ID = 'formularz'
    const TEMPLATE_ID = 'template_cyejmfu'
    const USER_ID = 'e9aXqh1wWz7R1VjQi'

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID).then(
            function (result) {
                console.log(result.text)
                setAlert(info)
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
        setUserRemarks('')
        setUserEmail('')
    }
    const hiddenValues = name && color && type && length && cord && userEmail;
    return (
        <ThemeProvider theme={theme}>
            <div className={classes.container}>
                <form ref={form} onSubmit={sendEmail}>
                    <div className={classes.form}>
                    <StyledText>Skomponuj swoją torebkę/plecak</StyledText>
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
                                <MenuItem value={pattern.value} key={pattern.value}><Box sx={{display: "flex"}}>{pattern.name}</Box></MenuItem>
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
                        </Select>
                    </FormControl>
                        <FormControl
                            required
                            className={classes.formControl}
                            variant="outlined"
                        >
                            <InputLabel id="demo-simple-select-required-label">
                                Kolor przędzy/sznurka
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required"
                                value={cord}
                                onChange={handleChangeCord}
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
                                            <strong>{name === ' ' ? ' N/A' : ' ' + name.charAt(0).toUpperCase() + name.slice(1)}</strong>
                                        </li>
                                        <li className="list-group-item text-start">
                                                Kolor okucia:
                                            <strong>{color === ' ' ? ' N/A' : ' ' + color}</strong>
                                        </li>
                                        <li className="list-group-item text-start">
                                                Rodzaj paska:
                                            <strong>{type === ' ' ? ' N/A' : ' ' + type}</strong>
                                        </li>
                                        <li className="list-group-item text-start">
                                                Długość paska:
                                            <strong>{length === ' ' ? ' N/A' : ' ' + `${length} cm`}</strong>
                                        </li>
                                        <li className="list-group-item text-start">
                                                Kolor przędzy:
                                            <strong>{cord === ' ' ? ' N/A' : ' ' + cord} </strong>
                                        </li>
                                        <li className="list-group-item text-start">
                                            Uwagi:
                                            <strong>{userRemarks === ' ' ? ' Brak uwag' : ' ' + userRemarks}</strong>
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
            </div>
        </ThemeProvider>
    )
}
