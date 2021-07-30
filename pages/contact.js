import { Button, createMuiTheme, ThemeProvider, makeStyles, TextField, RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import styled from "styled-components";

const useStyles = makeStyles({
  contact: {
    marginBottom: 20,
    marginTop: 20,
    display: 'flex',
  },
  button: {
    backgroundColor: 'pink',
  '&:hover': {
    backgroundColor: 'pink',
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
width: 30%;
color: black;
`;

const Contact = () => {
  const classes = useStyles();

    return (
      <ThemeProvider theme={theme}>
       <div className="wrapper">
         <StyledText>Napisz do mnie</StyledText>
         <form noValidate autoComplete="off" action="https://formsubmit.co/holowacz.zacharska@gmail.com" method="POST">
         <input type="hidden" name="_captcha" value="false" />
        <TextField
        className={classes.contact}
        label="Imię"
        variant="outlined"
        fullWidth
        required>
        </TextField>
        <TextField
        type="email" name="email"
        className={classes.contact}
        label="Email"
        variant="outlined"
        fullWidth
        required>
        </TextField>
        <TextField
        label="Treść wiadomości"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        required>
        </TextField>
        <RadioGroup className={classes.radio}>
          <FormControlLabel value="torebki" control={<Radio />} label="Torebki" />
          <FormControlLabel value="plecaki" control={<Radio />} label="Plecaki" />
          <FormControlLabel value="podkładki" control={<Radio />} label="Podkładki" />
        </RadioGroup>
        <br/>
        <Button type="submit"
        variant="contained"
        className={classes.button}
        endIcon={<SendIcon 
        className={classes.icon}/>}
        >Wyślij</Button>
        </form>
       </div>
       </ThemeProvider>
     );
}
 
export default Contact;
