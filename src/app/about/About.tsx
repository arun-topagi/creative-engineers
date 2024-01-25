"use client"

import TextField from '@/components/input';
import { useScreenDetector } from '@/hooks/useScreenDetector';
import { Typography } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react'

function About() {
    const {isMobile} = useScreenDetector();
    const onFinish = (values: any) => {
        console.log('Success:', values);
      };
      
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
      
      type FieldType = {
        username?: string;
        password?: string;
        remember?: string;
      };
  return (
    <div style={{marginLeft: isMobile ? '15px' : "30px" , marginRight: isMobile ? '15px' : '30px'}}>
        <div style={{textAlign:'center', marginTop:'60px', marginBottom: isMobile ? '50px' : '80px'}}>
            <Typography style={{marginTop:'10px', fontSize:'1.875rem', fontWeight: 400, lineHeight:'62px', fontFamily:'Montserrat'}}>Get in touch</Typography>
        </div>
        <div style={{width:'100%', maxWidth:'1140px', marginLeft:'auto', marginRight:'auto', textAlign: isMobile ? 'center': 'initial'}}>
            <div style={{display:'flex', flexDirection:'column', alignItems:'stretch', marginBottom:'75px', marginLeft:'auto', marginRight: 'auto', width: isMobile ? '90%' : '70%', maxWidth: isMobile ? '470px' : ''}}>
                <div>
                    <TextField/>
                </div>
                {/* <div> on success</div>
                <div> on errror </div> */}
            </div>
        </div>
    </div>
  )
}

export default About



/*
    there will be frist div will show normally 
    after submitting the form it will show as
    -> Thank You for submitting the form
    -> something went wrong
 */