"use client";


import { useScreenDetector } from '@/hooks/useScreenDetector';
import { UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React, { useState } from 'react'

function TextField() {
    const {isMobile, isDesktop} = useScreenDetector();
    const [loadings, setLoadings] = useState<boolean[]>([]);
    
    const enterLoading = (index: number) => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = true;
        return newLoadings;
      });
  
      setTimeout(() => {
        setLoadings((prevLoadings) => {
          const newLoadings = [...prevLoadings];
          newLoadings[index] = false;
          return newLoadings;
        });
      }, 6000);
    };

  return (
    <div style={{ display:'flex', flexDirection:'column', textAlign: isMobile ? 'left' : 'initial'}}>
    <div style={{display: isDesktop ? 'flex' : '',alignItems:'center', gap:'2rem'}}>
      <div style={{width: isDesktop ? '50%' : '100%', paddingRight: isDesktop ? '10px' : ''}}>
        <label style={{letterSpacing:'1px', textTransform:'uppercase', marginBottom:'10px', fontSize:'12px', fontWeight: 500, lineHeight:'20px'}}>Name</label>
        <Input placeholder='Enter your name' style={{borderRadius:'0', borderColor:'black', border:'1px solid #e4e4e4',padding:'1.313rem 1.25rem', fontSize:'14px', lineHeight:'26px', transition:'border-color .4s', marginBottom: isMobile ? '25px' : '18px', height:'2.375rem'}} />
      </div>
      <div style={{width: isDesktop ? '50%' : '100%', paddingRight: isDesktop ? '10px' : '', }}>
        <label style={{letterSpacing:'1px', textTransform:'uppercase', marginBottom:'10px', fontSize:'12px', fontWeight: 500, lineHeight:'20px'}}>Message</label>
        <Input placeholder='Enter your email' style={{borderRadius:'0', borderColor:'black', border:'1px solid #e4e4e4',padding:'1.313rem 1.25rem', fontSize:'14px', lineHeight:'26px', transition:'border-color .4s', marginBottom: isMobile ? '25px' : '18px', height:'2.375rem'}} />
      </div>
    </div>
    <label style={{letterSpacing:'1px', textTransform:'uppercase', marginBottom:'10px', fontSize:'12px', fontWeight: 500, lineHeight:'20px'}}>Message</label>
    <TextArea
      // showCount
      // maxLength={100}
      // onChange={onChange}
      placeholder="Enter you message"
      style={{borderRadius:'0', borderColor:'black', border:'1px solid #e4e4e4',paddingTop:'12px', fontSize:'14px', lineHeight:'26px', transition:'border-color .4s', marginBottom:  '25px', height:'120px',}}
    />
    <Button style={{backgroundColor:'#1a1b1f', letterSpacing:2, padding:'0.75rem 1.563rem', textTransform:'uppercase', lineHeight:'1.25rem', height:'min-content', color:'#fff', border:0, borderRadius:0, textDecoration:'none', display:'inline-block', marginBottom:isMobile?'1rem':''}}>Submit</Button>
  </div>
  )
}

export default TextField


{/* <div style={{display: isMobile ? '' :'flex' , justifyContent:'space-between', width:'100%', gap : '2rem'}}>
    {/* <Form.Item<FieldType>
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
    <Input size="large" placeholder="large size" style={{borderRadius:'0', borderColor:'black'}} />
    </For.Item> */}
//     <Form.Item
//     style={{width:isMobile ? '100%':'50%'}}
//     >
//         <div style={{display:'flex'}}>Name</div>
//       <Input placeholder='Enter your name' style={{borderRadius:'0', borderColor:'black'}} />
//     </Form.Item>
//     <Form.Item
//       style={{width:isMobile ? '100%':'50%'}}
//      >
//          <div  style={{display:'flex'}}>Name</div>
//        <Input placeholder='Enter your name' style={{borderRadius:'0', borderColor:'black'}} />
//      </Form.Item>
//   </div> */}