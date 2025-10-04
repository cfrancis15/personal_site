import React from 'react';
import Stripe from './Stripe';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#f5f5f5',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>

      <Grid container spacing={2} padding={4}>
        <Grid size={8}>
          <Item>This other shit i need to add</Item>
        </Grid>


        <Grid size={4}>
          <Item>

                <Stripe/>

          </Item>
        </Grid>

        </Grid>

    </Box>
  );
}

export default Home;