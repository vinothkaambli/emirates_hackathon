import { styled, useTheme } from "@mui/material/styles";
import { Typography, Box, Card, Grid, Paper, FormControl, InputLabel, MenuItem, Select, OutlinedInput, Menu, List, Collapse, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Autocomplete, Stack, TextField, Button } from "@mui/material";
import React from "react";
//import SendIcon from '@mui/icons-material/Send';

interface menuItemsI {
  description: string,
  bgcolor: string
}

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 }
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const pages = ['Personal Travel', 'Business Travel', 'Flight Status'];
const kvArray = (color: string): menuItemsI[] => ([
  { description: 'One Way', bgcolor: color },
  { description: 'Return', bgcolor: color },
  { description: 'Multi City', bgcolor: color },
]);

export const SearchForm = () => {
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [menuItems, setMenuItems] = React.useState<menuItemsI[]>(kvArray(theme.palette.primary.main));

  const handleMenuItemClick = (key: number): void => {
    let newItems: menuItemsI[] = kvArray(theme.palette.primary.main);
    newItems[key].bgcolor = theme.palette.primary.light;
    setMenuItems(newItems);
  };

  return (
    <Box
      sx={{
        position: "absolute",
        width: '80%',
        mt: '-3rem',
        border: '0.1rem solid #d8d8d8',
        left: '10%',
        padding: '1%',
        bgcolor: theme.palette.primary.light,
      }}>
      <Grid
        container>
        <List
          sx={{ width: '100%', display: 'flex', bgcolor: theme.palette.primary.main, padding: '0' }}
          component="nav"
        >
          {menuItems.map((item, key) => (
            <ListItemButton key={key} sx={{ bgcolor: item.bgcolor, textAlign: 'center' }} onClick={() => handleMenuItemClick(key)}>
              <ListItemText primary={item.description} />
            </ListItemButton>
          ))}
        </List>
      </Grid>

      <Paper variant="outlined"
        square
        sx={{ padding: '1%' }}>
        <Grid container>
          <Grid item xs={5} sx={{ padding: '2% 0% 0% 2%' }}>
            <FormControl fullWidth>
              <InputLabel id="flight-tickettype">Ticket Type</InputLabel>
              <Select
                labelId="flight-tickettype"
                id="flight-tickettype-select"
                input={<OutlinedInput label="Tag" />}
              >
                <MenuItem value={'Concessional Ticket'}>Concessional Ticket</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={5} sx={{ padding: '2% 0% 0% 2%' }}>
            <FormControl fullWidth>
              <InputLabel id="flight-Category">Category</InputLabel>
              <Select
                labelId="flight-Category"
                id="flight-Category-select"
              >
                <MenuItem value={'CAT C Firm'}>CAT C Firm</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={5} sx={{ padding: '2% 0% 0% 2%' }}>
            <Autocomplete
              id="From"
              freeSolo
              options={top100Films.map((option) => option.title)}
              renderInput={(params) => <TextField {...params} label="From" />}
            />
          </Grid>
          <Grid item xs={5} sx={{ padding: '2% 0% 0% 2%' }}>
            <Autocomplete
              freeSolo
              id="To"
              disableClearable
              options={top100Films.map((option) => option.title)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="To"
                  InputProps={{
                    ...params.InputProps,
                    type: 'search',
                  }}
                />
              )}
            />
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={5} sx={{ padding: '2% 0% 0% 2%' }}>
            <FormControl fullWidth>
              <InputLabel id="flight-class">Class</InputLabel>
              <Select
                labelId="flight-class"
                id="flight-class-select"
                input={<OutlinedInput label="Tag" />}
              >
                <MenuItem value={'Economy'}>Economy</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={5} sx={{ padding: '2% 0% 0% 2%' }}>
            <FormControl fullWidth>
              <InputLabel id="flight-travellers">Travellers</InputLabel>
              <Select
                labelId="flight-travellers"
                id="flight-travellers-select"
              >
                <MenuItem value={'Concessional Ticket'}>CAT C Firm</MenuItem>
              </Select>
            </FormControl>
          </Grid>

        </Grid>
      </Paper>
    </Box>
  )
};