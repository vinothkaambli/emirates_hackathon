import { AppBar, Container, Toolbar, Typography, Box, Tooltip, IconButton, Avatar } from "@mui/material";
import { styled } from '@mui/material/styles';
import Logo from './../public/emirates.svg';

const HeaderBar = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{height: '10%', width: '10%', bgcolor: 'Red'}}>
                        <Logo aria-label="Website logo" />
                    </Box>
                    <Typography
                        variant="h3"
                        noWrap
                    >
                        TRIPS
                    </Typography>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={() => ({ javascript: void (0) })}>
                                <Avatar alt="" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
};

export const StyledHeaderBar = styled(HeaderBar)( ({theme}) => `
    background: ${theme.palette.primary.main};

    & .MuiTypography-root {
        margin-right: 2,
        font-family: 'monospace',
        font-weight: 700,
        letter-spacing: '.3rem',
        color: 'inherit',
        text-decoration: 'none',
    }
`);