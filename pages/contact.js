import { Button, createMuiTheme, ThemeProvider, makeStyles, TextField } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import styled from "styled-components";

const useStyles = makeStyles({
  contact: {
    marginBottom: 20,
    marginTop: 20,
    display: 'flex',
    maxWidth: 700,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  button: {
    backgroundColor: '#3f51b5',
    color: 'white',
  '&:hover': {
    backgroundColor: '#3f51b5',
    color: 'white',
  }
  },
  radio: {
    display: 'inline',
  }
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffb6c1'
    },
    secondary: {
      main: '#ffb6c1'
    },
  }
})

const StyledText = styled.h3`
justify-content: center;
display: flex;
margin: 0 auto;
align-items: center;
font-size: 2rem;
position: relative;
z-index: 2;
border-radius: 15px;
width: 40%;
color: black;
@media (max-width: 700px) {
  font-size: 0.8rem;
  padding: 0 10px;
  width: 100%;
  justify-content: center;
  display: flex;
  margin: 0 auto;
  align-items: center;
}
`;

const Contact = () => {
  const classes = useStyles();

    return (
      <ThemeProvider theme={theme}>
       <div>
         <StyledText>Napisz do mnie</StyledText>
         <div className="wrapper">
         <form noValidate autoComplete="off" action="https://formsubmit.co/holowacz.zacharska@gmail.com" method="POST">
         <input type="hidden" name="_captcha" value="false" />
        <TextField
        className={classes.contact}
        label="Imię"
        variant="outlined"
        required>
        </TextField>
        <TextField
        type="email" name="email"
        className={classes.contact}
        label="Email"
        variant="outlined"
        required>
        </TextField>
        <TextField
        className={classes.contact}
        label="Treść wiadomości"
        variant="outlined"
        multiline
        rows={4}
        required>
        </TextField>
        <br/><br/>
        <Button type="submit"
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<SendIcon
        className={classes.icon}/>}
        >Wyślij</Button>
        </form>
       </div>
       </div>
       </ThemeProvider>
     );
}
export default Contact;
