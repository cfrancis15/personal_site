import React from 'react';
import USAMap from "react-usa-map";
import Box from "@mui/material/Box"


function Adventures(){

    const statesFilling = () => {
        return {
            "WA": {
                fill: "#3366ff",
            },
            "OR": {
                fill: "#66cc66"
            },
            "CA": {
                fill: "#66cc66"
            },
            "WY": {
                fill: "#66cc66"
            },
            "ID": {
                fill: "#66cc66"
            },
            "UT": {
                fill: "#66cc66"
            },
            "MT": {
                fill: "#66cc66"
            },
            "NV": {
                fill: "#66cc66"    
            },
            "AZ": {
                fill: "#66cc66"
            },
            "CO": {
                fill: "#3366ff"
            },
            "NM": {
                fill: "#66cc66"
            },
            "TX": {
                fill: "#66cc66"
            },
            "OK": {
                fill: "#66cc66"
            },
            "NE": {
                fill: "#66cc66"
            },
            "KS": {
                fill: "#66cc66"
            },
            "MN": {
                fill: "#66cc66"
            },
            "IA": {
                fill: "#66cc66"
            },
            "MO": {
                fill: "#66cc66"
            },
            "AR": {
                fill: "#66cc66"
            },
            "LA": {
                fill: "#66cc66"
            },
            "MS": {
                fill: "#66cc66"
            },
            "AL": {
                fill: "#66cc66"
            },
            "TN": {
                fill: "#66cc66"        
            },
            "GA": {
                fill: "#66cc66"      
            },
            "FL": {
                fill: "#66cc66"      
            },
            "MD": {
                fill: "#66cc66"      
            },
            "VA": {
                fill: "#66cc66"      
            },
            "NC": {
                fill: "#66cc66"      
            },
            "NY": {
                fill: "#66cc66"      
            },
            "CT": {
                fill: "#66cc66"      
            },
            "MA": {
                fill: "#3366ff"      
            },
            "NH": {
                fill: "#66cc66"      
            },
            "VT": {
                fill: "#66cc66"      
            },
            "MI": {
                fill: "#66cc66"      
            },
            "HI": {
                fill: "#66cc66"      
            },
            "DC": {
                fill: "#66cc66"      
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