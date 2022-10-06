import React from 'react';
import { useTheme } from "@mui/material/styles";
import { Typography, Box, Card, CardMedia } from "@mui/material";
import bgimage from './../public/bgimage.jpg';
import { ChildComponent } from '../interfaces';

export const Content = (props: ChildComponent) => {

  const theme = useTheme();
  return (
    <Box
      sx={{
        height: '30%'
      }}
    >
      <Card
        sx={{
          position: 'relative'
        }}>
        <CardMedia
          component="img"
          image={bgimage.src}
          alt="Paella dish"
          sx={{
            height: '350px'
          }}
        />
        <Typography
          variant="h1"
          component="h2"
          sx={{
            position: 'absolute',
            top: '15%',
            left: '10%',
            color: '#f0e7e7'
          }}
        >
          TRIPS
        </Typography>
      </Card>
    </Box>
  )
};