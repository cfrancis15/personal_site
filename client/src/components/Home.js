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
        <Grid size={{xs:12, md:8}}>
          <Item>

          
            <h1>Connor John Francis</h1>
            
            <h4>"The secret of getting ahead is getting started. -Mark Twain</h4>
            
            
            

            
        </Item>

<Item>      

        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px',flexWrap:"wrap"}}>
        <img src="/Connor Francis Headshot.png" alt="Professional headshot of super handsome Connor" 
            style={{
                borderRadius:'50%', 
              
                width: "40%",
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "cover",
               
                
                }}></img>




                <p style={{ 
                  margin: 0, 
                  flex: 1, 
                  padding:"20px", 
                  maxWidth:"400px",
                  width:'100%'}}>I'm a Financial Analyst at Marcus & Millichap with a strong foundation in finance, real estate, and applied technology. My background includes experience across private equity, wealth management, startups, and real estate brokerage, giving me a well-rounded view of capital markets, strategy, and asset-level analysis.

Beyond my core work, I have a strong interest in leveraging technology to solve complex business problems. I build software in my free time using React, Next.js, TypeScript, Python, Flask, and other technologies — skills I’ve used to streamline analysis workflows, prototype internal tools, and better understand the intersection of data and decision-making.

I graduated from the University of Colorado Boulder with a degree in Finance and studied abroad in both Copenhagen and Aix-en-Provence. Through my academic and professional experience, I’ve developed a structured, analytical approach to problem solving and a practical understanding of how to drive results in fast-paced environments.

I'm especially interested in problem spaces where finance, real estate, and technology meet — and where I can apply both strategic thinking and technical skills to deliver impact.</p>


</div>

<h4>
            <a href="https://www.linkedin.com/in/connor-john-francis/" target="_blank" rel="noopener noreferrer" style={{color: '#1976d2', gap:'30px', margin:'10px'}}>LinkedIn</a>
            <a href="https://github.com/cfrancis15/personal_site" target="_blank" rel="noopener noreferrer" style={{color: '#1976d2', gap:'30px', margin:'10px'}}>GitHub</a>
            <a href="/Connor Francis Resume 10.4.2025.pdf" target="_blank" rel="noopener noreferrer" style={{color: '#1976d2', gap:'30px', margin:'10px'}}>Download Resume</a>
</h4>


</Item>      
        </Grid>


        <Grid size={{xs:12, md:4}}>
          <Item>

                <Stripe/>

          </Item>
        
          <Item>
            <img src="/forest.jpeg" alt="WA state forest, I'd love to have that coffee you got me in a place like this!" style={{borderRadius:"25px", maxWidth:"100%", height:"604px"}}></img>

          </Item>


        </Grid>

        </Grid>

    </Box>
  );
}

export default Home;