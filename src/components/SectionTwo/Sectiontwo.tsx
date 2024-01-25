import React from "react";
import { Button, Col, Row, Typography } from "antd";
import * as json from "../../json-data/jsonData.json";
import { Image } from 'antd';
import { useScreenDetector } from "@/hooks/useScreenDetector";

function Sectiontwo() {
  const { isMobile, isTablet, isDesktop } = useScreenDetector();
  return (
    <div style={{ width: "100%"}}>
        <Row style={{padding:isDesktop? '1rem 12rem':"1rem 1rem"}}>
    <Col xs={24} xl={12} md={12} lg={12} style={{width:'70%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'flex-start'}}>
    <Typography style={{fontSize:25, fontWeight:600, lineHeight:'2.188rem', marginTop:'1.25rem', marginBottom:'1rem', fontFamily:'Montserrat, sans-serif'}}>
    Delivering Excellence in
    <br/>
    Precision Engineering 
    <br/>
    Components and Sub-Assemblies
    </Typography>
    <Typography style={{fontSize:'1rem', lineHeight:'1.375rem', marginBottom:'0.625rem', fontFamily:'Montserrat, sans-serif'}}>{json.section2.part2}</Typography>
    <Button style={{backgroundColor:'#1a1b1f', letterSpacing:2, padding:'0.75rem 1.563rem', textTransform:'uppercase', lineHeight:'1.25rem', height:'min-content', color:'#fff', border:0, borderRadius:0, textDecoration:'none', display:'inline-block', marginBottom:isMobile?'1rem':''}}>Get Started</Button>
    </Col>
    <Col xs={24} xl={12} md={12} lg={12} style={{width:'70%', padding:!isMobile?'2rem':''}}>
    <Image  src="https://assets-global.website-files.com/62434fa732124a0fb112aab4/62434fa732124a2a3312aae1_placeholder%203.svg" />
    </Col>
  </Row>

  <Row style={{padding:isDesktop? '1rem 12rem':"1rem 1rem", backgroundColor:'#f5f7fa'}}>
    <Col xs={24} xl={12} md={12} lg={12}  style={{width:'70%', padding:!isMobile?'2rem':''}}>
    <Image  src="https://assets-global.website-files.com/62434fa732124a0fb112aab4/62434fa732124a28a812aad9_placeholder%202.svg" />
    </Col>
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
  </Row>
      {/* <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: isMobile ? "flex-start" : "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: isMobile ? "100%" : "50%",
            backgroundColor: "greenyellow",
            height: 300,
            display: "flex",
            justifyContent: isMobile ? "space-between" : "flex-end",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Typography>{json.section2.part1}</Typography>
            <Typography>{json.section2.part2}</Typography>
          </div>
        </div>
        <div
          style={{
            width: isMobile ? "100%" : "50%",
            backgroundColor: "grey",
            height: 300,
            justifyContent: isMobile ? "space-between" : "flex-start",
          }}
        ></div>
      </div> */}
    </div>
  );
}

export default Sectiontwo;
