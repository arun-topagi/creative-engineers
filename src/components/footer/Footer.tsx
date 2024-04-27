"use client";

import { useScreenDetector } from '@/hooks/useScreenDetector';
import { Image, Typography } from 'antd';
import React from 'react'
import companyLogo from '../../assets/logo.png';
import Logo from '../logo/Logo';
import IndianFlag from '../../../public/section/Indianflag.jpg'
import MakeInIndia from '../../../public/section/makeinind.jpg'
import Banner from '../banner';
const { Title, Paragraph } = Typography;

function Footer() {
    const {isMobile} = useScreenDetector();
  return (
    <div style={{backgroundColor:'#f5f7fa', position:'relative', borderBottom:'1px solid #e4ebf3', paddingLeft: isMobile? "15px" : "", paddingRight: isMobile ? '15px' : ""}}>
        <div style={{ maxWidth: isMobile ? "728px" : '90%', marginLeft:'auto', marginRight:'auto'}}>
            <div style={{display:'flex', flexDirection: isMobile ? 'column' : "row" , justifyContent:'space-between', marginLeft: 'auto', marginRight: 'auto', alignItems: isMobile ? 'center' :'flex-start',
             }}>
                <div style={{margin: '1.2em 0'}}>
                <a href='' style={{color:'#43464d', textDecoration: 'underline', transition:'opacity .2s', display: isMobile ? "inline-block" : "block"}}>
                    <Logo className="object-cover" src={companyLogo} height={isMobile ? 150 : 180} width={isMobile ? 250 : 300}/>
                </a>
                 <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: '15px'}}>
                   <Logo className="object-cover" src={IndianFlag} height={28} width={50}/>
                    <Logo className="object-cover" src={MakeInIndia} height={28} width={60}/>
                 </div>
                </div>
                <div>
                    <Title level={4} style={{margin: '8px 0 0 0'}}>Address</Title>
                    <Paragraph strong>D-83, Five Star MIDC, Shendra, Chh. <br/> Sambhajinagar(Aurangabad)-431154</Paragraph>
                    <Title level={4} style={{margin: '8px 0 0 0'}}>Phone</Title>
                    <Paragraph strong>+91 9822544596 <br/>+91 8007245957</Paragraph>
                    <Title level={4} style={{margin: '8px 0 0 0'}}>Email ID</Title>
                    <Paragraph strong>creativeengineers2024@gmail.com</Paragraph>
                </div>
                <div>
                  <Banner />
                </div>
            </div>
        </div>
        <div style={{width:'100%', height:'1px', backgroundColor:'#e4ebf3', marginTop: isMobile ? "60px":'0px', marginBottom:'15px'}}></div>
        <Typography style={{textAlign:'center', fontSize:'14px', lineHeight:'16px'}}>Copyright @ 2024 Creative Enginners</Typography>
    </div>
  )
}

export default Footer