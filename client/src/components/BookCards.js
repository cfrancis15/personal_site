import React from 'react';
import Card from '@mui/material/Card';



const Books = {
    "Books":[
    {
        name:"81owPDCGqKL._UF1000,1000_QL80_.jpg",
    title:"Free Will",
    description:"asdf"
},
{
    name:"fountain.jpg",
    title:"The Fountainhead",
    description:"asdf"
},
{   
    name:"GEB.jpg",
    title:"Godel, Escher, Bach",
    description:"asdf"
},
{
    name:"myth.jpg",
    title:"The Myth of Sisyphus",
    description:"asdf"
},
{
    name:"simulation.jpg",
    title:"Simulacra & Simulation",
    description:"asdf"
},
{
    name:"waking up.jpg",
    title:"Waking Up",
    description:"asdf"
},
{
    name:"singularity.jpg",
    title:"The Singularity is Near",
    description:"asdf"
}]}



function BookCards(){
    return(
     <div>   
    
    
    <h1 style={{textAlign: "center"}}>
        Books that have impacted me. Click to find out more!
    </h1>
    
    <div style={{display:'flex', margin:'0 auto',padding:"20px", justifyContent:"space-evenly"}}>
    
    
    {Books.Books.map((book, index)=>(
        <Card 
        variant = "outlined" style={{
            margin:'10px', 
            backgroundColor:"#f5f5f5",
            borderRadius:"25px",
            display:'flex',
            gap:"15px",
            flex:'0 0 auto',
            width:'auto',
            height:'auto',

            }}>




                <img
        key={index}
        src={`/${book.name}`}
        alt={`/${book.title}`}
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