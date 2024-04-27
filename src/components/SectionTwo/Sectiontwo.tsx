import React from "react";
import { Button, Col, Row, Typography } from "antd";
import * as json from "../../json-data/jsonData.json";
import { Image } from 'antd';
import { useScreenDetector } from "@/hooks/useScreenDetector";
import precission from '../../../public/section/precision.jpg'
import profession from '../../../public/section/profession.jpg'
import Logo from "../logo/Logo";

function Sectiontwo() {
  const { isMobile, isDesktop } = useScreenDetector();
  return (
    <div style={{ width: "100%"}}>
    <Row style={{padding:isDesktop? '1rem 12rem':"1rem 1rem"}}>
    <Col xs={24} xl={12} md={12} lg={12} style={{width:'70%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'flex-start'}}>
    <Typography style={{fontSize: isMobile ? 22 : 25, fontWeight:600, lineHeight:'2.188rem', marginTop:'1.25rem', marginBottom:'1rem', fontFamily:'Montserrat, sans-serif'}}>
    Delivering Excellence in
    <br/>
    Precision Engineering 
    <br/>
    Components and Sub-Assemblies
    </Typography>
    <Typography style={{fontSize:'1rem', lineHeight:'1.375rem', marginBottom:'0.625rem', fontFamily:'Montserrat, sans-serif'}}>{json.section2.part2}</Typography>
    </Col>
    <Col xs={24} xl={12} md={12} lg={12} style={{width:'70%', padding:!isMobile?'2rem':''}}> 
    <Logo src={precission} height={500} width={500}/>
    </Col>
  </Row>

  <Row style={{padding:isDesktop? '1rem 12rem':"1rem 1rem", backgroundColor:'#f5f7fa'}}>
    {
      !isMobile && <Col xs={24} xl={12} md={12} lg={12}  style={{width:'70%', padding:!isMobile?'2rem':''}}>
      <Logo src={profession} height={500} width={500}/>
      </Col>
    }
    <Col xs={24} xl={12} md={12} lg={12} style={{width:'70%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'flex-start', paddingLeft:!isMobile?'2rem':'', marginTop: isMobile?'2rem':''}}>
    <Typography style={{fontSize:'1.375rem',marginTop:0, marginBottom: '0.625rem', lineHeight:'1.563rem', fontWeight:600, fontFamily:'Montserrat, sans-serif'}}>
   {json.section3.part1.header}
    </Typography>
    <Typography style={{fontSize:'1rem', lineHeight:'1.375rem', marginBottom:'0.625rem', fontFamily:'Montserrat, sans-serif'}}>{json.section3.part1.paragraph}</Typography>
    <Typography style={{fontSize:'1.375rem',marginTop:0, marginBottom: '0.625rem', lineHeight:'1.563rem', fontWeight:600,  fontFamily:'Montserrat, sans-serif'}}>
   {json.section3.part2.header}
    </Typography>
    <Typography style={{fontSize:'1rem', lineHeight:'1.375rem', marginBottom:'0.625rem', fontFamily:'Montserrat, sans-serif'}}>{json.section3.part2.paragraph}</Typography>
    <Typography style={{fontSize:'1.375rem',marginTop:0, marginBottom: '0.625rem', lineHeight:'1.563rem', fontWeight:600,  fontFamily:'Montserrat, sans-serif'}}>
   {json.section3.part3.header}
    </Typography>
    <Typography style={{fontSize:'1rem', lineHeight:'1.375rem', marginBottom:'0.625rem', fontFamily:'Montserrat, sans-serif'}}>{json.section3.part3.paragraph}</Typography>
    </Col>
    {
      isMobile && <Col xs={24} xl={12} md={12} lg={12}  style={{width:'70%', padding:!isMobile?'2rem':''}}>
      <Logo src={profession} height={500} width={500}/>
      </Col>
    }
  </Row> 
    </div>
  );
}

export default Sectiontwo;
