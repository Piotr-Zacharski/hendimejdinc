import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import SendIcon from '@material-ui/icons/Send'

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(3),
        padding: 10,
        width: 109,
        height: 36,
        backgroundColor: '#b76e79',
        color: 'white',
        '&:hover': {
            backgroundColor: '#b76e79',
            color: 'white',
        },
    },
}))

export default function IconLabelButtons() {
    const classes = useStyles()

    return (
        <div>
            <Button
                type="submit"
                variant="contained"
                color="#b76e79"
                className={classes.button}
                endIcon={<SendIcon />}
            >
                Wyślij
            </Button>
        </div>
    )
}
