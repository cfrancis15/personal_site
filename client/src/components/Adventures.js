import React from 'react';
import USAMap from "react-usa-map";
import Box from "@mui/material/Box"


function Adventures(){

    const statesFilling = () => {
        return {
            "WA": {
                fill: "#517F93",
            },
            "OR": {
                fill: "#A6B7A1"
            },
            "CA": {
                fill: "#A6B7A1"
            },
            "WY": {
                fill: "#A6B7A1"
            },
            "ID": {
                fill: "#A6B7A1"
            },
            "UT": {
                fill: "#A6B7A1"
            },
            "MT": {
                fill: "#A6B7A1"
                ,
            },
                "NV": {
                    fill: "#A6B7A1"    
            },
            "AZ": {
                fill: "#A6B7A1"
            },
            "CO": {
                fill: "#517F93"
            },
            "NM": {
                fill: "#A6B7A1"
            },
            "TX": {
                fill: "#A6B7A1"
            },
            "OK": {
                fill: "#A6B7A1"
            },
            "NE": {
                fill: "#A6B7A1"
            },
            "KS": {
                fill: "#A6B7A1"
            },
            "MN": {
                fill: "#A6B7A1"
            },
            "IA": {
                fill: "#A6B7A1"
            },
            "MO": {
                fill: "#A6B7A1"
            },
            "AR": {
                fill: "#A6B7A1"
            },
            "LA": {
                fill: "#A6B7A1"
            },
            "MS": {
                fill: "#A6B7A1"
            },
            "AL": {
                fill: "#A6B7A1"
            },
            "TN": {
                fill: "#A6B7A1"        
            },
            "GA": {
                fill: "#A6B7A1"      
            },
            "FL": {
                fill: "#A6B7A1"      
            },
            "MD": {
                fill: "#A6B7A1"      
            },
            "VA": {
                fill: "#A6B7A1"      
            },
            "NC": {
                fill: "#A6B7A1"      
            },
            "NY": {
                fill: "#A6B7A1"      
            },
            "CT": {
                fill: "#A6B7A1"      
            },
            "MA": {
                fill: "#517F93"      
            },
            "NH": {
                fill: "#A6B7A1"      
            },
            "VT": {
                fill: "#A6B7A1"      
            },
            "MI": {
                fill: "#A6B7A1"      
            },
            "HI": {
                fill: "#A6B7A1"      
            },
            "DC": {
                fill: "#A6B7A1"      
            }
        
        
        
        };};

    return (
        <div>


<Box 
                sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    textAlign: 'center'
                }}
            >
            <h1>States I've Been To</h1>
            <p>Blue = lived there | Green = traveled there</p>
            <USAMap customize={statesFilling()} />
            <br/>
    </Box>


    <Box 
                sx={{ 
                    display: 'flex', 
                    flexDirection: 'row', 
                    flexWrap: 'wrap',
                    alignItems: 'center', 
                    justifyContent: 'center',
                    gap: '20px',
                    margin: '20px auto',
                    maxWidth: "1400px",
                    padding: '0 20px'
                }}
            >
                <img 
                    src="/quandary1.jpg" 
                    alt="Quandary Peak, my first 14er" 
                    style={{borderRadius:"25px", height:"500px", width: "400px", objectFit: "cover"}}
                />
                <img 
                    src="/venice.jpg" 
                    alt="Venice" 
                    style={{borderRadius:"25px", height:"500px", width: "400px", objectFit: "cover"}}
                />
                <img 
                    src="/dunes.jpg" 
                    alt="Sand dunes with Sukhy" 
                    style={{borderRadius:"25px", height:"500px", width: "400px", objectFit: "cover"}}
                />
                <img 
                    src="/gorges.jpg" 
                    alt="Gorges adventure" 
                    style={{borderRadius:"25px", height:"500px", width: "400px", objectFit: "cover"}}
                />
                <img 
                    src="/florence.jpg" 
                    alt="Florence" 
                    style={{borderRadius:"25px", height:"500px", width: "400px", objectFit: "cover"}}
                />
                <img 
                    src="/verona.jpg" 
                    alt="Verona" 
                    style={{borderRadius:"25px", height:"500px", width: "400px", objectFit: "cover"}}
                />
            </Box>
        
        </div>)}

export default Adventures;