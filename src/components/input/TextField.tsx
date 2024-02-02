import React, { useState } from 'react';
import { Input, Button, Form } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import axios from 'axios';
import { useScreenDetector } from '@/hooks/useScreenDetector';

function TextField(props:any) {
  const { setShowThankYou } = props;
  const { isMobile, isDesktop } = useScreenDetector();

  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async () => {
    try {
      setLoading(true);

      // Your API endpoint for storing the data
      const apiEndpoint = 'https://api.airtable.com/v0/appPUoqZIj8lLuFFx/contact-us';

      // Validate the form fields
      await form.validateFields();

      const data = {
        records: [
          {
            fields: {
              Name: form.getFieldValue('name'),
              Email: form.getFieldValue('email'),
              Message: form.getFieldValue('message'),
            },
          },
        ],
      };

      // Assuming you want to send a POST request
      const response = await axios.post(apiEndpoint, data, {
        headers: {
          Authorization:
            'Bearer patkjnOYFKvCQnJwT.3181b0cc8dc888562a493011c3a965f775f92f96ded10633f5e2ff2db082bf4d',
          'Content-Type': 'application/json',
        },
      });

      // Reset the form and show thank you message
      form.resetFields();
      setShowThankYou(true);
      setTimeout(() => {
        setShowThankYou(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', textAlign: isMobile ? 'left' : 'initial' }}>
      <Form form={form} onFinish={handleSubmit}>
        <div style={{ display: isDesktop ? 'flex' : '', alignItems: 'center', gap: '2rem' }}>
          <div style={{ width: isDesktop ? '50%' : '100%', paddingRight: isDesktop ? '10px' : '' }}>
            <Form.Item
              name="name"
              rules={[{ required: true, message: 'Name is required' }]}
            >
              <Input
                placeholder="Enter your name"
                style={{
                  borderRadius: '0',
                  borderColor: 'black',
                  border: '1px solid #e4e4e4',
                  padding: '1.313rem 1.25rem',
                  fontSize: '14px',
                  lineHeight: '26px',
                  transition: 'border-color .4s',
                  marginBottom: isMobile ? '25px' : '18px',
                  height: '2.375rem',
                }}
              />
            </Form.Item>
          </div>
          <div style={{ width: isDesktop ? '50%' : '100%', paddingRight: isDesktop ? '10px' : '' }}>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'Email is required' },
                { type: 'email', message: 'Please enter a valid email address' },
              ]}
            >
              <Input
                placeholder="Enter your email"
                style={{
                  borderRadius: '0',
                  borderColor: 'black',
                  border: '1px solid #e4e4e4',
                  padding: '1.313rem 1.25rem',
                  fontSize: '14px',
                  lineHeight: '26px',
                  transition: 'border-color .4s',
                  marginBottom: isMobile ? '25px' : '18px',
                  height: '2.375rem',
                }}
              />
            </Form.Item>
          </div>
        </div>
        <Form.Item
          name="message"
          rules={[{ required: false, message: 'Message is required' }]}
        >
          <TextArea
            placeholder="Enter your message"
            style={{
              borderRadius: '0',
              borderColor: 'black',
              border: '1px solid #e4e4e4',
              paddingTop: '12px',
              fontSize: '14px',
              lineHeight: '26px',
              transition: 'border-color .4s',
              marginBottom: '25px',
              height: '120px',
            }}
          />
        </Form.Item>
        <div style={{display:'flex', justifyContent:'center'}}>
        <Button
          htmlType="submit"
          loading={loading}
          style={{
            backgroundColor: '#1a1b1f',
            letterSpacing: 2,
            padding: '0.75rem 1.563rem',
            textTransform: 'uppercase',
            lineHeight: '1.25rem',
            height: 'min-content',
            color: '#fff',
            border: 0,
            borderRadius: 0,
            textDecoration: 'none',
            display: 'inline-block',
            marginBottom: isMobile ? '1rem' : '',
          }}
        >
          Submit
        </Button>
        </div>
      </Form>
    </div>
  );
}

export default TextField;





// "use client";


// import { useScreenDetector } from '@/hooks/useScreenDetector';
// import { Button, Input } from 'antd';
// import TextArea from 'antd/es/input/TextArea';
// import React, { useEffect, useState } from 'react'
// import axios from 'axios';

// function TextField(props:any) {

//     const {setShowThankYou} = props;

//     const {isMobile, isDesktop} = useScreenDetector();
    
//     const [formData, setFormData] = useState({
//       name: '',
//       email: '',
//       message: '',
//     });


//     const [loading, setLoading] = useState(false);


//   // Handle form field changes
//   const handleInputChange = (e:any) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = async () => {
//     try {


//       setLoading(true);
//       // Your API endpoint for storing the data
//       const apiEndpoint = 'https://api.airtable.com/v0/appPUoqZIj8lLuFFx/contact-us';

//       const data = {
//         "records": [
//           {
//             "fields": {
//               "Name": formData.name,
//               "Email": formData.email,
//               "Message": formData.message
//             }
//           }
//         ]
//       }


//       // Assuming you want to send a POST request
//       const response =  await axios.post(apiEndpoint, data, {headers: {
//         Authorization: "Bearer patkjnOYFKvCQnJwT.3181b0cc8dc888562a493011c3a965f775f92f96ded10633f5e2ff2db082bf4d",
//         "Content-Type": "application/json"
//       }});

//       setFormData({
//         name: '',
//         email: '',
//         message: '',
//       });

//       setShowThankYou(true);
//       setTimeout(() => {
//         setShowThankYou(false);
//       }, 5000);

//     } catch (error) {
//       console.error('Error submitting form:', error);
//     } finally {
//       setLoading(false);
//     }
//   };



//   return (
//     <div style={{ display:'flex', flexDirection:'column', textAlign: isMobile ? 'left' : 'initial'}}>
//     <div style={{display: isDesktop ? 'flex' : '',alignItems:'center', gap:'2rem'}}>
//       <div style={{width: isDesktop ? '50%' : '100%', paddingRight: isDesktop ? '10px' : ''}}>
//         <label style={{letterSpacing:'1px', textTransform:'uppercase', marginBottom:'10px', fontSize:'12px', fontWeight: 500, lineHeight:'20px'}}>Name</label>
//         <Input name="name"
//         value={formData.name}
//         onChange={handleInputChange} placeholder='Enter your name' style={{borderRadius:'0', borderColor:'black', border:'1px solid #e4e4e4',padding:'1.313rem 1.25rem', fontSize:'14px', lineHeight:'26px', transition:'border-color .4s', marginBottom: isMobile ? '25px' : '18px', height:'2.375rem'}} />
//       </div>
//       <div style={{width: isDesktop ? '50%' : '100%', paddingRight: isDesktop ? '10px' : '', }}>
//         <label style={{letterSpacing:'1px', textTransform:'uppercase', marginBottom:'10px', fontSize:'12px', fontWeight: 500, lineHeight:'20px'}}>Email</label>
//         <Input name="email"
//         value={formData.email}
//         onChange={handleInputChange} placeholder='Enter your email' style={{borderRadius:'0', borderColor:'black', border:'1px solid #e4e4e4',padding:'1.313rem 1.25rem', fontSize:'14px', lineHeight:'26px', transition:'border-color .4s', marginBottom: isMobile ? '25px' : '18px', height:'2.375rem'}} />
//       </div>
//     </div>
//     <label style={{letterSpacing:'1px', textTransform:'uppercase', marginBottom:'10px', fontSize:'12px', fontWeight: 500, lineHeight:'20px'}}>Message</label>
//     <TextArea
//         name="message"
//         value={formData.message}
//         placeholder="Enter your message"
//         onChange={handleInputChange}
//         style={{ borderRadius: '0', borderColor: 'black', border: '1px solid #e4e4e4', paddingTop: '12px', fontSize: '14px', lineHeight: '26px', transition: 'border-color .4s', marginBottom: '25px', height: '120px' }}
//       />
    // <Button
    //     onClick={handleSubmit}
    //     loading={loading}
    //     style={{ backgroundColor: '#1a1b1f', letterSpacing: 2, padding: '0.75rem 1.563rem', textTransform: 'uppercase', lineHeight: '1.25rem', height: 'min-content', color: '#fff', border: 0, borderRadius: 0, textDecoration: 'none', display: 'inline-block', marginBottom: isMobile ? '1rem' : '' }}
    //   >
    //     Submit
    //   </Button>
//   </div>
//   )
// }

// export default TextField
