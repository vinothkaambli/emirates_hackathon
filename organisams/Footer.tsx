import { AppBar, Container, Toolbar, Typography, Box, Tooltip, IconButton, Avatar } from "@mui/material";
import { styled, useTheme } from '@mui/material/styles';

export const Footer = () => {
    const theme = useTheme();
    return (
        <Box
            sx={{
            }}
        >
            <footer>
                © 2022 The Emirates Group. All Rights Reserved.
            </footer>
        </Box>
    )
};
