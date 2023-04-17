import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TShirtYarn from "./TShirtYarn";
import Cord from "./Cord";
import {createTheme, makeStyles, styled, ThemeProvider} from "@material-ui/core/styles";

const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        color: '#b76e79',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth: 40,
        width: '100%',
        backgroundColor: '#b76e79',
    },
});
const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        color: '#ffb6c1',
        '&.Mui-selected': {
            color: theme.palette.primary.main,
        },
        '&.Mui-focusVisible': {
            color: '#b76e79',
        },
    }),
);
const useStyles = makeStyles(() => ({
    tabTitle: {
        '&.Mui-selected': {
            color: '#b76e79',
        },
    },
}));


const theme = createTheme({
    palette: {
        primary: {
            main: '#b76e79',
        },
        secondary: {
            main: '#ffb6c1',
        },
        neutral: {
            main: '#b76e79',
        },
    },
})

function TabPanel(props) {
    const classes = useStyles();
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography className={classes.tabTitle}>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function ColorTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <ThemeProvider theme={theme}>
        <Box>
            <Box>
                <StyledTabs value={value} onChange={handleChange}
                      aria-label="basic tabs example" centered indicatorColor="primary"
                textColor="primary">
                    <StyledTab label="SZNUREK" {...a11yProps(1)} />
                    <StyledTab label="T-SHIRT YARN" {...a11yProps(0)} />
                </StyledTabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Cord />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <TShirtYarn />
            </TabPanel>
        </Box>
        </ThemeProvider>
    );
}