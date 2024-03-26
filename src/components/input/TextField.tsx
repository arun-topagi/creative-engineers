import React, { useState } from 'react';
import { Input, Button, Form} from 'antd';
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
              Company: form.getFieldValue('company'),
              Address: form.getFieldValue('address'),
              Name: form.getFieldValue('name'),
              Phone: form.getFieldValue('phone'),
              Email: form.getFieldValue('email'),
              Requirements: form.getFieldValue('requirements'),
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
              name="company"
              rules={[{ required: true, message: 'Company name is required' }]}
            >
              <Input
                placeholder="Name of Company"
                style={{
                  borderRadius: '0',
                  borderColor: 'black',
                  border: '1px solid #9b9a9a',
                  padding: '1.313rem 1.25rem',
                  fontSize: '14px',
                  lineHeight: '26px',
                  transition: 'border-color .4s',
                  height: '2.375rem',
                }}
              />
            </Form.Item>
          </div>
          <div style={{ width: isDesktop ? '50%' : '100%', paddingRight: isDesktop ? '10px' : '' }}>
            <Form.Item
              name="address"
              rules={[{ required: true, message: 'Address is required' }]}
            >
              <Input
                placeholder="Address/City/Location"
                style={{
                  borderRadius: '0',
                  borderColor: 'black',
                  border: '1px solid #9b9a9a',
                  padding: '1.313rem 1.25rem',
                  fontSize: '14px',
                  lineHeight: '26px',
                  transition: 'border-color .4s',
                  height: '2.375rem',
                }}
              />
            </Form.Item>
          </div>
        </div>
        <div style={{ display: isDesktop ? 'flex' : '', alignItems: 'center', gap: '2rem' }}>
          <div style={{ width: isDesktop ? '50%' : '100%', paddingRight: isDesktop ? '10px' : '' }}>
            <Form.Item
              name="name"
              rules={[
                { required: true, message: 'Name is required' },
                // { type: 'email', message: 'Please enter a valid email address' },
              ]}
            >
              <Input
                placeholder="Name of Contact Person"
                style={{
                  borderRadius: '0',
                  borderColor: 'black',
                  border: '1px solid #9b9a9a',
                  padding: '1.313rem 1.25rem',
                  fontSize: '14px',
                  lineHeight: '26px',
                  transition: 'border-color .4s',
                  height: '2.375rem',
                }}
              />
            </Form.Item>
          </div>
          <div style={{ width: isDesktop ? '50%' : '100%', paddingRight: isDesktop ? '10px' : '' }}>
            <Form.Item
              name="phone"
              rules={[{ required: true, message: 'Phone Number is required' }]}
            >
              <Input
                placeholder="Phone Number"
                style={{
                  borderRadius: '0',
                  borderColor: 'black',
                  border: '1px solid #9b9a9a',
                  padding: '1.313rem 1.25rem',
                  fontSize: '14px',
                  lineHeight: '26px',
                  transition: 'border-color .4s',
                  height: '2.375rem',
                }}
              />
            </Form.Item>
          </div>
        </div>
        <div style={{ display: isDesktop ? 'flex' : '', alignItems: 'center', gap: '2rem' }}>
          <div style={{ width: isDesktop ? '47%' : '100%', paddingRight: isDesktop ? '10px' : '' }}>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'Email is required' },
                { type: 'email', message: 'Please enter a valid email address' },
              ]}
            >
              <Input
                placeholder="Email"
                style={{
                  borderRadius: '0',
                  borderColor: 'black',
                  border: '1px solid #9b9a9a',
                  padding: '1.313rem 1.25rem',
                  fontSize: '14px',
                  lineHeight: '26px',
                  transition: 'border-color .4s',
                  height: '2.375rem',
                }}
              />
            </Form.Item>
          </div>
        </div>
        <Form.Item
          name="requirements"
          rules={[{ required: true, message: 'Requirements is required' }]}
        >
          <TextArea
            placeholder="Requirements Details"
            style={{
              marginTop:'1rem',
              borderRadius: '0',
              borderColor: 'black',
              border: '1px solid #9b9a9a',
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
