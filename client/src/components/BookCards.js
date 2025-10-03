import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const Books = {
    "Books":[
    {
    name:"81owPDCGqKL._UF1000,1000_QL80_.jpg",
    title:"Free Will",
    description:"Free Will argues that the freedom we believe ourselves to have is an illusion. While it feels as though we consciously weigh information and make independent choices, neuroscience suggests otherwise: brain activity often indicates a decision before we are aware of making it. From the perspective of meditation, too, thoughts simply arise unbidden—appearing in consciousness without our willing them into existence. We may not have free will in the way we imagine, but that recognition doesn’t strip life of meaning or absolve us of responsibility. Society must still be organized as if individuals make choices. For me, the book underscored both the limits of conscious control and the humility that comes from seeing how little authorship we truly have over our thoughts."
},
{
    name:"GEB.jpg",
    title:"Godel, Escher, Bach",
    description:"Godel, Escher, Bach: an Eternal Golden Braid is a mind twisting foray into what it means to be a person. A strange loop. Discussing patterns found in nature and math reflected in the works of composer Bach, logician Kurt Godel, and artist M.C. Escher, Douglas Hofstadter relates them to computers, consciousness, and artificial intelligence (long before it was a sexy OpenAI-API-wrapper-startup buzzword!). Written in 1979, it still holds up today. Much of this book was way above my pay grade, but the parts I could wrap my head around were fascinating and fundamentally changed the way I look at the world. Like Zen, there are patterns everywhere, but also exceptions to these patterns. Yin and Yang. A never-ending fractal; trying to get to the bottom of reality—or anything— and tying it up with a nice bow has, at least so far, proven to unveil a new layer of enigma, ad infinitum."
},
{
    name:"simulation.jpg",
    title:"Simulacra & Simulation",
    description:"Simulacra and Simulation, which famously inspired The Matrix (one of my favorite films), isn’t about computer simulation in the pop-culture sense but about how signs and representations can become more real to us than reality itself. Jean Baudrillard argues that in modern life we often simulate things we no longer directly experience—like going to the gym as a stand-in for ancestral labor, or taking vitamin D supplements as a substitute for sunlight. Disneyland is his quintessential example: it doesn’t reflect a “real” America, but a mythic version that never existed, a copy without an original. For me, this book reframed how I see modern life: we live surrounded by layers of simulation, and half the time we prefer them to the real thing."
},
{
    name:"singularity.jpg",
    title:"The Singularity is Near",
    description:"The Singularity Is Near is one of the original landmark books on AI and technology. Ray Kurzweil argues that humans naturally think in straight lines, but this mindset fails us when it comes to technology, which advances exponentially—each breakthrough stacking on top of the last, especially in computer science. He even predicted AI’s arrival around 2020, which was remarkably accurate, and suggested it would soon pass the Turing Test. Ironically, the Turing Test has lost much of its relevance; today, it’s almost inverted—you can identify an AI because it’s too sharp, too consistent, and too good at recall or written expression. Kurzweil ultimately envisions humans merging with machines to form a new species, a vision that feels less like science fiction and more like a live question about the trajectory of our future."
},
{
    name:"myth.jpg",
    title:"The Myth of Sisyphus",
    description:"The Myth of Sisyphus has become something of a cultural shorthand, though for good reason. In it, Albert Camus, writing as an absurdist, argues that while life may lack a grand cosmic meaning, this recognition need not collapse into nihilism. Instead, one can embrace the absurd and live fully in spite of it. His image of Sisyphus— condemned to roll a boulder up a hill for eternity— becomes a metaphor for human existence: repetitive, often futile, yet capable of being borne with dignity and even joy. I’ve come to see this as akin to hiking to the top of a mountain and finding a blank canvas with paints waiting. Do you despair at the lack of a preordained picture, or do you pick up the brush and create your own? Camus’ answer is clear: even in drudgery, one can find freedom and even happiness by choosing to embrace the task itself."
},
{
    name:"principles.jpg",
    title:"Principles",
    description:"Principles by Ray Dalio lays out his framework for decision-making, built on the idea that systematically learning from mistakes and studying both human nature and history are essential to building products, businesses, and teams. What stood out to me was his balance—an analytical, systematic approach that still makes room for the qualitative human side of things that pure data can’t capture. I resonated with that mix. It showed me how rigorous thinking and structured reflection can be paired with an understanding of people to make better choices, not just in investing but in any long-term endeavor."
},
{
    name:"king.jpg",
    title:"King of Capital",
    description:"King of Capital covers the rise of Blackstone and Steve Schwarzman, walking through the deals and strategies that built the firm into a private equity powerhouse. What stood out to me wasn’t the personalities or the drama, but the mechanics—the way transactions were structured, how risk was managed, and how value was created through strategy. I read it when I was fifteen, and that was my first real window into finance. The dealmaking side of the story made the field feel tangible and practical, not just abstract numbers. That perspective stuck with me and sparked my interest in learning more."
}]}



function BookCards(){
    return(
     <div>   
    
    
    <h2 style={{textAlign: "center"}}>
        Books that have made me think:
    </h2>

    <h3 style={{textAlign:'center'}}>Tech, Philosophy, and Business</h3>
    
    <div style={{display:'flex', margin:'0 auto',padding:"20px", justifyContent:"space-evenly", flexWrap:"wrap"}}>
    
    
    {Books.Books.map((book, index)=>(
        <Card
        key={index} 
        variant = "outlined" style={{
            margin:'10px', 
            backgroundColor:"#f5f5f5",
            borderRadius:"25px",
            display:'flex',
            flex:'0 0 auto',
            width:'auto',
            height:'auto',
            objectFit:"cover",
            


            }}>

<CardMedia
        sx={{ 
            width:"300px",
            display:"flex",
            
         }}
        
      >
                        <img
        key={index}
        src={`/${book.name}`}
        alt={`/${book.title}`}
        style={{
            width:'300px',height:"450px", margin:'5px',
            borderRadius:"25px",
            display:'flex',
            objectFit:'cover'
        }}></img>



      </CardMedia>


      <CardContent
      sx={{display:"flex",
         flexDirection:"column",
         width:"300px",
         overflow:'hidden'
         }}>


        <Typography gutterBottom variant="h5" component="div">
          {book.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {book.description}
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>




        
        
        </Card>
    ))}        
    
    </div>
    
    
    </div>
)
}

export default BookCards;

/*
                <img
        key={index}
        src={`/${book.name}`}
        alt={`/${book.title}`}
        style={{
            width:'190px', margin:'5px',
            borderRadius:"25px",
            display:'flex'
        }}></img>

*/