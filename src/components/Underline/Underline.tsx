import React from 'react'
import { Typography } from "antd";

const { Title } = Typography;

type Props = {
    title: string
}

const Underline = ({title}: Props) => {
  return (
    <>
    <Title level={3} style={{textTransform: "uppercase", fontFamily: "Montserrat, sans-serif", marginBottom: '0'}} >
          {title}
      </Title>
      <div style={{marginTop: '5px', height: '3px', width: '120px', backgroundColor: 'red', marginLeft: '5px'}} />
    </>
  )
}

export default Underline