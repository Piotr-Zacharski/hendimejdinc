import {
    Button,
    createMuiTheme,
    ThemeProvider,
    makeStyles,
    TextField,
    InputAdornment,
} from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail'
import ChatIcon from '@material-ui/icons/Chat'
import SendIcon from '@material-ui/icons/Send'
import styled from 'styled-components'

const useStyles = makeStyles({
    contact: {
        marginBottom: 20,
        marginTop: 20,
        display: 'flex',
        maxWidth: 700,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderColor: '#b76e79',
    },
    container: {
        marginTop: 40,
    },
    button: {
        backgroundColor: '#b76e79',
        color: 'white',
        '&:hover': {
            backgroundColor: '#b76e79',
            color: 'white',
        },
    },
    radio: {
        display: 'inline',
    },
})

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
    width: 40%;
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

const Contact = () => {
    const classes = useStyles()

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.container}>
                <StyledText>Napisz do mnie</StyledText>
                <div className="wrapper">
                    <form>
                        <input type="hidden" name="_captcha" value="false" />
                        <TextField
                            className={classes.contact}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircle />
                                    </InputAdornment>
                                ),
                            }}
                            variant="outlined"
                            placeholder="Imię"
                            required
                        ></TextField>
                        <TextField
                            type="email"
                            name="email"
                            className={classes.contact}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AlternateEmailIcon />
                                    </InputAdornment>
                                ),
                            }}
                            variant="outlined"
                            placeholder="Email"
                            required
                        ></TextField>
                        <TextField
                            className={classes.contact}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <ChatIcon />
                                    </InputAdornment>
                                ),
                            }}
                            variant="outlined"
                            multiline
                            rows={4}
                            required
                        ></TextField>
                        <br />
                        <br />
                        <Button
                            type="submit"
                            variant="contained"
                            className={classes.button}
                            endIcon={<SendIcon className={classes.icon} />}
                        >
                            Wyślij
                        </Button>
                    </form>
                </div>
            </div>
        </ThemeProvider>
    )
}
export default Contact
