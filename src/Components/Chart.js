import React from 'react';

import {Bar}from 'react-chartjs-2';

const Chart = () => {
    return (
    <div> 
    
    <Bar
        data= {{
        labels:['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    }}
   
    height={500}
    width ={600}   
    />        
    
    </div>
);
}

export default Chart;