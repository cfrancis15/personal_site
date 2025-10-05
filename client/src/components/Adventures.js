import React from 'react';
//import USAMap from "react-usa-map";
import Box from "@mui/material/Box"


function Adventures(){
 {/*   
    const statesFilling = () => {
        return {
            "WA": {
                fill: "navy",
            },
            "OR": {
                fill: "#CC0000"
            },
            "CA": {
                fill: "#CC0000"
            },
            "WY": {
                fill: "#CC0000"
            },
            "ID": {
                fill: "#CC0000"
            },
            "UT": {
                fill: "#CC0000"
            },
            "MT": {
                fill: "#CC0000"
                ,
            },
                "NV": {
                    fill: "#CC0000"    
            },
            "AZ": {
                fill: "#CC0000"
            },
            "CO": {
                fill: "navy"
            },
            "NM": {
                fill: "#CC0000"
            },
            "TX": {
                fill: "#CC0000"
            },
            "OK": {
                fill: "#CC0000"
            },
            "NE": {
                fill: "#CC0000"
            },
            "KS": {
                fill: "#CC0000"
            },
            "MN": {
                fill: "#CC0000"
            },
            "IA": {
                fill: "#CC0000"
            },
            "MO": {
                fill: "#CC0000"
            },
            "AR": {
                fill: "#CC0000"
            },
            "LA": {
                fill: "#CC0000"
            },
            "MS": {
                fill: "#CC0000"
            },
            "AL": {
                fill: "#CC0000"
            },
            "TN": {
                fill: "#CC0000"        
            },
            "GA": {
                fill: "#CC0000"      
            },
            "FL": {
                fill: "#CC0000"      
            },
            "MD": {
                fill: "#CC0000"      
            },
            "VA": {
                fill: "#CC0000"      
            },
            "NC": {
                fill: "#CC0000"      
            },
            "NY": {
                fill: "#CC0000"      
            },
            "CT": {
                fill: "#CC0000"      
            },
            "MA": {
                fill: "navy"      
            },
            "NH": {
                fill: "#CC0000"      
            },
            "VT": {
                fill: "#CC0000"      
            },
            "MI": {
                fill: "#CC0000"      
            },
            "HI": {
                fill: "#CC0000"      
            },
            "DC": {
                fill: "#CC0000"      
            }
        
        
        
        };};
*/} 
    return (
        <div>

 {/* 
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
            <p>Blue = lived there | Red = traveled there</p>
            <USAMap customize={statesFilling()} />
            <br/>
    </Box>

   */}
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
                    src="/conway.png" 
                    alt="Conway" 
                    style={{borderRadius:"25px", height:"500px", width: "400px", objectFit: "cover"}}
                />
            </Box>
        
        </div>)}

export default Adventures;