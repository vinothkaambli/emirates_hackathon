import { AppBar, Container, Toolbar, Typography, Box, Tooltip, IconButton, Avatar } from "@mui/material";
import { styled, useTheme } from '@mui/material/styles';
import { useContext } from "react";
import { EmployeeContext } from "../context/Provider";
import Logo from './../public/emirates.svg';

const HeaderBar = (props: any) => {
    const theme = useTheme();
    const {EmployeeName} = useContext(EmployeeContext);
    return (
        <AppBar 
            sx={{background: theme.palette.primary.main}}
            position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{height: '10%', width: '10%', bgcolor: 'Red'}}>
                        <Logo aria-label="Website logo" />
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={() => ({ javascript: void (0) })}>
                                <Avatar alt="" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Typography variant='h6'>{EmployeeName}</Typography>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
};

export const StyledHeaderBar = styled(HeaderBar)( ({theme}) => `
    & .MuiTypography-root {
        margin-right: 2,
        font-family: 'monospace',
        font-weight: 700,
        letter-spacing: '.3rem',
        color: 'inherit',
        text-decoration: 'none',
    }
`);