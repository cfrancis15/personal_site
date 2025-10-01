import React from 'react';
import Card from '@mui/material/Card';



const Books = {"Books":["81owPDCGqKL._UF1000,1000_QL80_.jpg",
    "fountain.jpg",
    "GEB.jpg",
    "myth.jpg",
    "simulation.jpg",
    "waking up.jpg",
    "singularity.jpg"
    
]}



function BookCards(){
    return(
     <div>   
    
    
    <h1 style={{textAlign: "center"}}>
        Book cards
    </h1>
    
    <div style={{display:'flex'}}>
    
    
    {Books.Books.map((imageName, index)=>(
        <Card 
        variant = "outlined" style={{
            width:'200px', 
            margin:'10px', 
            backgroundColor:"#f5f5f5",
            borderRadius:"25px",
            display:'flex'
            }}>




                <img
        key={index}
        src={`/${imageName}`}
        alt="Book"
        style={{
            width:'190px', margin:'5px',
            borderRadius:"25px",
            display:'flex'
        }}></img>
        
        
        </Card>
    ))}        
    
    </div>
    
    
    </div>
)
}

export default BookCards;