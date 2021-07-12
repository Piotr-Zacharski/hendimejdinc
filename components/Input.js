import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import SubmitButton from './SubmitButton';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    '& > *': {
      margin: theme.spacing(2),
      width: '25ch',
    },
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [color, setColor] = React.useState('');
  const [type, setType] = React.useState('');
  const [length, setLength] = React.useState('');
  const [text, setText] = React.useState('');

  const handleChangeColor = (event) => {
    setColor(event.target.value);
  };
  const handleChangeType = (event) => {
    setType(event.target.value);
  };
  const handleChangeLength = (event) => {
    setLength(event.target.value);
  };
  const handleChangeText = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <FormControl required className={classes.formControl} variant="outlined">
        <InputLabel id="demo-simple-select-required-label">Kolor okucia</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={color}
          onChange={handleChangeColor}
          className={classes.selectEmpty}
        >
          <MenuItem value="gold">złoty</MenuItem>
          <MenuItem value="silver">srebrny</MenuItem>
        </Select>
        <FormHelperText>Pole wymagane</FormHelperText>
      </FormControl>
      <FormControl required className={classes.formControl} variant="outlined">
        <InputLabel id="demo-simple-select-required-label">Rodzaj paska</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={type}
          onChange={handleChangeType}
          className={classes.selectEmpty}
        >
          <MenuItem value="material">pleciony</MenuItem>
          <MenuItem value="chain">łańcuszek</MenuItem>
        </Select>
        <FormHelperText>Pole wymagane</FormHelperText>
      </FormControl>
      <FormControl required className={classes.formControl} variant="outlined">
        <InputLabel id="demo-simple-select-required-label">Długość paska</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={length}
          onChange={handleChangeLength}
          className={classes.selectEmpty}
        >
          <MenuItem value={100}>100 cm</MenuItem>
          <MenuItem value={120}>120 cm</MenuItem>
        </Select>
        <FormHelperText>Pole wymagane</FormHelperText>
      </FormControl>
      <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic"
      label="Wpisz nazwę koloru"
      value={text}
      onChange={handleChangeText}
      variant="outlined"
      />
    </form>
    <SubmitButton />
    </div>
  );
}
