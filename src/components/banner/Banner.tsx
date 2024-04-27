import React from 'react'
import { useScreenDetector } from '@/hooks/useScreenDetector';


function Banner() {
    const {isMobile} = useScreenDetector();
    return (
    <div style={{height:'250px', width: isMobile ? '100%' : '450px', marginBottom:'10px', lineHeight:'20px', position:'relative', overflow:'hidden', display:'flex', justifyContent:'flex-end'}}>
        <div style={{height:'100%', width:'100%', backgroundColor:'rgb(229, 227, 223)'}}>
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3753.0228068677848!2d75.2471195!3d19.8389879!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9a2db14ffce9%3A0xefcd2bf86074f86!2sCREATIVE%20ENGINEERS!5e0!3m2!1sen!2sin!4v1706277431427!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: "0" }}
        loading="lazy"
      ></iframe>
        </div>
    </div>
  )
}

export default Banner