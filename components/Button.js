import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
        color: '#b76e79',
        '&:hover': {
            color: '#b76e79',
        },
    },
}))

export default function IconLabelButtons() {
    const classes = useStyles()

    return (
        <div>
            <Button
                variant="contained"
                className={classes.button}
                endIcon={<SearchIcon />}
            >
                Szukaj
            </Button>
        </div>
    )
}
