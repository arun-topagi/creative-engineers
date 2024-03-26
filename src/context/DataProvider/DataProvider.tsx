"use client";
import React, { useEffect, useState } from 'react'
import DataContext from './context'
import axios from 'axios'

const DataProvider = ({children}: {children: React.ReactNode;}) => {
    const [data, setData] = useState({})
    useEffect(() => {
        (async() => {
            const response = await axios.get('https://api.npoint.io/2f83c6423b02a18d70a8')
            setData(response?.data || {})
        })()
    }, [])

  return (
    <DataContext.Provider value={data}>
        {children}
    </DataContext.Provider>
  )
}

export default DataProvider