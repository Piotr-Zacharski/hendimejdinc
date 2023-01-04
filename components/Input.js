import React, { useState, useRef } from 'react'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { createTheme } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'
import SubmitButton from './SubmitButton'
import styled from 'styled-components'
import {InputAdornment} from '@material-ui/core'
import emailjs from '@emailjs/browser'
import { Col, Row } from 'react-bootstrap'
import {Alert} from "@mui/material";

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
    const handleChangeUserEmail = (event) => {
        setUserEmail(event.target.value)
    }
    const clearState = () => {
        setColor('')
        setName('')
        setType('')
        setLength('')
        setCord('')
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
                            <MenuItem value="Dolores">Dolores</MenuItem>
                            <MenuItem value="Halszka">Halszka</MenuItem>
                            <MenuItem value="Janette">Janette</MenuItem>
                            <MenuItem value="Makkaresh">Makkaresh</MenuItem>
                            <MenuItem value="Margerita">Margerita</MenuItem>
                            <MenuItem value="Myszka">Myszka</MenuItem>
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
                            <MenuItem value="złoty">złoty</MenuItem>
                            <MenuItem value="srebrny">srebrny</MenuItem>
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
                            <MenuItem value="pleciony">pleciony</MenuItem>
                            <MenuItem value="łańcuszek">łańcuszek</MenuItem>
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
                            <MenuItem value={100}>100 cm</MenuItem>
                            <MenuItem value={120}>120 cm</MenuItem>
                        </Select>
                    </FormControl>
                        <FormControl
                            required
                            className={classes.formControl}
                            variant="outlined">
                        <TextField
                            label="Kolor przędzy/sznurka"
                            value={cord}
                            className={classes.selectEmpty}
                            required
                            onChange={handleChangeCord}
                            variant="outlined"
                            name="cord"
                        />
                        </FormControl>
                        <FormControl
                            required
                            className={classes.formControl}
                            variant="outlined">
                        <TextField
                            type="email"
                            className={classes.selectEmpty}
                            placeholder="Email"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AlternateEmailIcon/>
                                    </InputAdornment>
                                ),
                            }}
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
                                            <strong>{cord === ' ' ? ' N/A' : ' ' + cord}</strong>
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
