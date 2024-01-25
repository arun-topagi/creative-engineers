import { Typography } from 'antd'
import React from 'react'
import * as json from "../../json-data/jsonData.json";
import CardComponent from '../Card/CardComponent';


function SectionThree() {
  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'center', fontWeight:400, padding:'5rem 1.25rem', backgroundColor:'#f5f7fa', }}>
        <Typography style={{fontSize:'2.25rem', marginBottom:'1rem',  fontFamily:'Montserrat, sans-serif'}}>{json.section4.header}</Typography>
        <Typography style={{maxWidth:530, textAlign:'center', marginLeft:'auto', marginRight:'auto', marginBottom:'1rem',  fontFamily:'Montserrat, sans-serif'}}>{json.section4.paragraph}</Typography>

        <CardComponent/>
    </div>
  )
}

export default SectionThree
