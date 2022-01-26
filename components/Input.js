import React, {  useState, setState, useRef } from 'react'
import {
    createMuiTheme,
    makeStyles,
    ThemeProvider,
} from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'
import SubmitButton from './SubmitButton'
import styled from 'styled-components'
import { InputAdornment } from '@material-ui/core'
import{ init } from 'emailjs-com';
import { Col, Row } from 'react-bootstrap'

init("user_TRfLHnbM0zMpWWmnbysej");



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
    contact: {
        marginBottom: 20,
        marginTop: 20,
        display: 'inline-block',
        borderColor: '#b76e79',
        '&:hover': {
            color: '#b76e79',
        },
    },
    container: {
        marginTop: 40,
    },
    selectEmpty: {
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

const theme = createMuiTheme({
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
    width: 50%;
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

const initialState = {
    name: "",
    email: "",
    text: "",
    type: "",
    length: "",
    color: ""
};

export default function Input() {
    const classes = useStyles();
    const form = useRef();


    const sendEmail = (e, data) => {
        e.preventDefault();
    
        // sendForm('service_usl08gc', 'template_cyejmfu', form.current)
        //   .then(function(result) {
        //       console.log(result.text);
        //       setTimeout(() => {}, 6000)
        //       clearState();
        //   }, 
        //   function(error) {
        //       console.log(error.text);
        //   }).then(
        //   );
          
      };

    const [color, setColor] = useState('')
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [length, setLength] = useState('')
    const [text, setText] = useState('')
    const [user_email, setUserEmail] = useState('')

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
    const handleChangeText = (event) => {
        setText(event.target.value)
    }
    const handleChangeUserEmail = (event) => {
        setUserEmail(event.target.value)
    }

    const clearState = () => {
        setState({
            ...initialState
        });
    };


    return (
        <ThemeProvider theme={theme}>
            <div className={classes.container}>
                <form ref={form} onSubmit={sendEmail}>
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
                        <MenuItem value="dolores">Dolores</MenuItem>
                        <MenuItem value="halszka">Halszka</MenuItem>
                        <MenuItem value="janette">Janette</MenuItem>
                        <MenuItem value="makkaresh">Makkaresh</MenuItem>
                        <MenuItem value="margerita">Margerita</MenuItem>
                        <MenuItem value="zoja">Zoja</MenuItem>
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
                <form className={classes.root} autoComplete="off">
                    <TextField
                        id="standard-basic"
                        label="Kolor przędzy/sznurka"
                        value={text}
                        required
                        onChange={handleChangeText}
                        variant="outlined"
                        name="text"
                    />
                    <TextField
                        type="email"
                        className={classes.contact}
                        placeholder="Email"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AlternateEmailIcon />
                                </InputAdornment>
                            ),
                        }}
                        variant="outlined"
                        required
                        name="user_email"
                        value={user_email}
                        onChange={handleChangeUserEmail}
                    ></TextField>
                </form>
                <Row className="justify-content-md-center">
                            <Col md={4}>
                                <h3>Twój wybór:</h3>
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        Wzór:
                                        {name === " " ? " N/A" : " " + name.charAt(0).toUpperCase() + name.slice(1)}
                                    </li>
                                    <li className="list-group-item">
                                        Kolor okucia:
                                        {color === " " ? " N/A" : " " + color.charAt(0).toUpperCase() + color.slice(1)}
                                    </li>
                                    <li className="list-group-item">
                                        Rodzaj paska:
                                        {type === " " ? " N/A" : " " + type.charAt(0).toUpperCase() + type.slice(1)}
                                    </li>
                                    <li className="list-group-item">
                                        Długość paska:
                                        {length === " " ? " N/A" : " " + length + " cm"}
                                    </li>
                                    <li className="list-group-item">
                                        Kolor przędzy:
                                        {text === " " ? " N/A" : " " + text.charAt(0).toUpperCase() + text.slice(1)}
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                        <div className={classes.btn}>
                        <SubmitButton />
                    </div>
                </form>
                
            </div>
        </ThemeProvider>
    )
}
