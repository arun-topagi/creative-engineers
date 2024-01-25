import React from 'react'
import { Card, Image, Typography } from 'antd';
import * as json from "../../json-data/jsonData.json";
import { useScreenDetector } from '@/hooks/useScreenDetector';

function CardComponent() {
  const { isMobile, isTablet, isDesktop } = useScreenDetector();
  return (
    <Card style={{ display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'flex-start', backgroundColor:'#fff', padding:10}}>
      <Typography style={{marginBottom:'2rem', fontFamily:'Montserrat, sans-serif',}}>{json.section4.cards[0].paragraph}</Typography>
      <div style={{display:'flex', alignItems:'center', alignSelf:'stretch'}}>
        <Image src='https://assets-global.website-files.com/62434fa732124a0fb112aab4/62434fa732124a28a812aad9_placeholder%202.svg'
        style={{
          width:'3.75rem',
          height:'3.75rem',
          objectFit:'cover',
          borderRadius:'50%',
          marginRight:'1rem'
        }}
        ></Image>
        <div style={{display:'flex', flexDirection:'column', }}>
        <h3 style={{marginTop:'0.625rem', fontWeight:400, marginBottom:2, lineHeight:'2rem',  fontFamily:'Montserrat, sans-serif'}}>{json.section4.cards[0].name}</h3>
        <div style={{fontSize:'0.75rem', lineHeight:'1rem', marginBottom:'0.625rem',  fontFamily:'Montserrat, sans-serif'}}>{json.section4.cards[0].position}</div>
        </div>
        <div style={{flex:1, justifyContent:'flex-end', display:'flex'}}>
          <Image src='https://assets-global.website-files.com/62434fa732124a0fb112aab4/62434fa732124a6c9412aae6_double-quotes-l.svg'
          style={{}}
          ></Image>
        </div>
      </div>
  </Card>
  )
}

export default CardComponent
Card