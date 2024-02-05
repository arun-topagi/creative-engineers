"use client";

import { useScreenDetector } from '@/hooks/useScreenDetector';
import { Image, Typography } from 'antd';
import React from 'react'
import companyLogo from '../../assets/logo.png';
import Logo from '../logo/Logo';

function Footer() {
    const {isMobile} = useScreenDetector();
  return (
    <div style={{padding:'1.25rem', backgroundColor:'#f5f7fa', position:'relative', borderBottom:'1px solid #e4ebf3', paddingLeft: isMobile? "15px" : "", paddingRight: isMobile ? '15px' : ""}}>
        <div style={{width:'100%', maxWidth:isMobile ? "728px" :'90%', marginLeft:'auto', marginRight:'auto'}}>
            <div style={{display:'flex', flexDirection: isMobile ? 'column' : "row" ,justifyContent:'space-between', marginLeft: 'auto', marginRight: 'auto', alignItems:isMobile ? 'center' :'flex-start',
            //  maxWidth:' 100%'
             }}>
                <a href='' style={{color:'#43464d', textDecoration: 'underline', transition:'opacity .2s', display: isMobile ? "inline-block" : "block"}}>
                    <Logo className="object-cover" src={companyLogo} height={100} width={150}/>
                </a>
                <div style={{display: isMobile ? 'block' :'grid', gridAutoColumns:'1fr', gridTemplateColumns: 'auto auto 1fr', gridTemplateRows:'auto', gridColumnGap:isMobile? "60px":'70px', gridRowGap:'40px', marginTop: isMobile? '14px' : ''}}>
                    <div style={{display:'flex', flexDirection:'column', justifyContent: isMobile ? 'center': '', alignItems:isMobile? 'center':'', gridArea: isMobile ? "span 1 / span 1 / span 1 / span 1" : "" }}>
                    <Typography style={{letterSpacing:'1px', textTransform:'uppercase', marginBottom:'12px', fontSize:'14px', fontWeight:700, lineHeight:'16px'}}>Company</Typography>
                    <a href='#' style={{color:'#1a1b1f', marginTop:'12px', marginBottom:'6px', fontSize:'14px', lineHeight:'16px', textDecoration:'none'}}>How it works</a>
                    <a href='#' style={{color:'#1a1b1f', marginTop:'12px', marginBottom:'6px', fontSize:'14px', lineHeight:'16px', textDecoration:'none'}}>Docs</a>
                    </div>
                    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:isMobile? 'center':'', gridArea: isMobile ? "span 1 / span 1 / span 1 / span 1" : "" ,}}>
                    <Typography style={{letterSpacing:'1px', textTransform:'uppercase', marginBottom:'12px', fontSize:'14px', fontWeight:700, lineHeight:'16px', marginTop: isMobile? '1.5rem':''}}>About</Typography>
                    <a href='#' style={{color:'#1a1b1f', marginTop:'12px', marginBottom:'6px', fontSize:'14px', lineHeight:'16px', textDecoration:'none'}}>Terms & Conditions</a>
                    <a href='#' style={{color:'#1a1b1f', marginTop:'12px', marginBottom:'6px', fontSize:'14px', lineHeight:'16px', textDecoration:'none'}}>Privacy policy</a>
                    <div style={{display:'flex', justifyContent:'flex-start', alignItems:isMobile? 'center':'', marginTop:isMobile ? '20px' : '12px', marginLeft: isMobile ? '-20px' : '', gap:'1rem'}}>

                        <a href='#' style={{color:'#43464d', textDecoration:'none', transition:'opacity .2s'}}><Image src='https://assets-global.website-files.com/62434fa732124a0fb112aab4/62434fa732124ac15112aad5_twitter%20small.svg' /></a>
                        <a href='#' style={{color:'#43464d', textDecoration:'none', transition:'opacity .2s'}}><Image src='https://assets-global.website-files.com/62434fa732124a0fb112aab4/62434fa732124a389912aad8_linkedin%20small.svg' /></a>
                        <a href='#' style={{color:'#43464d', textDecoration:'none', transition:'opacity .2s'}}><Image src='https://assets-global.website-files.com/62434fa732124a0fb112aab4/62434fa732124a51bf12aae9_facebook%20small.svg' /></a>
                    </div>
                   </div>
                </div>
            </div>
        </div>
        <div style={{width:'100%', height:'1px', backgroundColor:'#e4ebf3', marginTop: isMobile ? "60px":'20px', marginBottom:'15px'}}></div>
            <Typography style={{textAlign:'center', fontSize:'14px', lineHeight:'16px'}}>Copyright @ 2024 Creative Enginners</Typography>
    </div>
  )
}

export default Footer