import React, { useState } from "react";
import { Input, Button, Form, Row, Col } from "antd";
import {
  BankOutlined,
  EnvironmentOutlined,
  UserOutlined,
  PhoneOutlined,
  MailOutlined,
  SendOutlined,
} from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";

const inputStyle: React.CSSProperties = {
  borderRadius: "8px",
  border: "1px solid #CBD5E1",
  padding: "0.65rem 1rem",
  fontSize: "14px",
  lineHeight: "24px",
  transition: "all 0.25s ease",
  height: "46px",
  backgroundColor: "#FFFFFF",
};

function TextField(props: any) {
  const { setShowThankYou } = props;

  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async () => {
    try {
      setLoading(true);

      // Your API endpoint for storing the data
      const apiEndpoint =
        "https://api.airtable.com/v0/appPUoqZIj8lLuFFx/contact-us";

      // Validate the form fields
      await form.validateFields();

      const data = {
        records: [
          {
            fields: {
              Company: form.getFieldValue("company"),
              Address: form.getFieldValue("address"),
              Name: form.getFieldValue("name"),
              Phone: form.getFieldValue("phone"),
              Email: form.getFieldValue("email"),
              Requirements: form.getFieldValue("requirements"),
            },
          },
        ],
      };

      // Assuming you want to send a POST request
      await axios.post(apiEndpoint, data, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_TOKEN}`,
          "Content-Type": "application/json",
        },
      });

      // Reset the form and show thank you message
      form.resetFields();
      setShowThankYou(true);
      setTimeout(() => {
        setShowThankYou(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ width: "100%", textAlign: "left" }}>
      <Form form={form} onFinish={handleSubmit} layout="vertical">
        <Row gutter={[20, 4]}>
          <Col xs={24} md={12}>
            <Form.Item
              name="company"
              rules={[{ required: true, message: "Company name is required" }]}
            >
              <Input
                prefix={<BankOutlined style={{ color: "#64748B", marginRight: 6 }} />}
                placeholder="Name of Company"
                style={inputStyle}
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              name="address"
              rules={[{ required: true, message: "Address is required" }]}
            >
              <Input
                prefix={
                  <EnvironmentOutlined style={{ color: "#64748B", marginRight: 6 }} />
                }
                placeholder="Address/City/Location"
                style={inputStyle}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[20, 4]}>
          <Col xs={24} md={12}>
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Name is required" }]}
            >
              <Input
                prefix={<UserOutlined style={{ color: "#64748B", marginRight: 6 }} />}
                placeholder="Name of Contact Person"
                style={inputStyle}
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              name="phone"
              rules={[{ required: true, message: "Phone Number is required" }]}
            >
              <Input
                prefix={<PhoneOutlined style={{ color: "#64748B", marginRight: 6 }} />}
                placeholder="Phone Number"
                style={inputStyle}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[20, 4]}>
          <Col xs={24}>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Email is required" },
                { type: "email", message: "Please enter a valid email address" },
              ]}
            >
              <Input
                prefix={<MailOutlined style={{ color: "#64748B", marginRight: 6 }} />}
                placeholder="Email"
                style={inputStyle}
              />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          name="requirements"
          rules={[{ required: true, message: "Requirements is required" }]}
        >
          <TextArea
            placeholder="Requirements Details"
            rows={4}
            style={{
              borderRadius: "8px",
              border: "1px solid #CBD5E1",
              padding: "0.75rem 1rem",
              fontSize: "14px",
              lineHeight: "24px",
              transition: "all 0.25s ease",
              backgroundColor: "#FFFFFF",
              minHeight: "120px",
            }}
          />
        </Form.Item>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "0.75rem",
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            icon={<SendOutlined />}
            style={{
              backgroundColor: "var(--brand-navy)",
              letterSpacing: "0.08em",
              padding: "0 2.5rem",
              textTransform: "uppercase",
              height: "48px",
              fontWeight: 600,
              color: "#fff",
              border: 0,
              borderRadius: "8px",
              boxShadow: "0 4px 14px rgba(0, 75, 141, 0.28)",
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

