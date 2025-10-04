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

      <Grid container spacing={2} padding={2}>
        <Grid size={8}>
          <Item>

          
            <h1>Connor John Francis</h1>
            <br/>
        </Item>
        <Grid size = {8}>
<Item>     
            <img src="/Connor Francis Headshot.png" alt="Professional headshot of super handsome Connor" 
            style={{
                borderRadius:'50%', 
                height:"400px",
                marginLeft:"-300px"
                }}></img>
                
</Item>              
</Grid>  

<Grid>
<Item>

    <p>I'm a Financial Analyst at Marcus & Millichap with a strong foundation in finance, real estate, and applied technology. My background includes experience across private equity, wealth management, startups, and real estate brokerage, giving me a well-rounded view of capital markets, strategy, and asset-level analysis.

Beyond my core work, I have a strong interest in leveraging technology to solve complex business problems. I build software in my free time using React, Next.js, TypeScript, Python, Flask, and other technologies — skills I’ve used to streamline analysis workflows, prototype internal tools, and better understand the intersection of data and decision-making.

I graduated from the University of Colorado Boulder with a degree in Finance and studied abroad in both Copenhagen and Aix-en-Provence. Through my academic and professional experience, I’ve developed a structured, analytical approach to problem solving and a practical understanding of how to drive results in fast-paced environments.

I'm especially interested in problem spaces where finance, real estate, and technology meet — and where I can apply both strategic thinking and technical skills to deliver impact.</p>

</Item>
</Grid>

    
        </Grid>


        <Grid size={4}>
          <Item>

                <Stripe/>

          </Item>
        
          <Item>
            <img src="/forest.jpeg" alt="WA state forest, I'd love to have that coffee you got me in a place like this!" style={{borderRadius:"25px"}}></img>

          </Item>


        </Grid>

        </Grid>

    </Box>
  );
}

export default Home;