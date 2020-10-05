import React, { useEffect, useState } from 'react'
import { LastTen } from '../LastTen'
import { Item } from './styles'

export const ListOfTen = () => {
  const [data, setdata] = useState([])

  useEffect(function () {
    window.fetch('https://api.spacexdata.com/v4/launches')
      .then(res => res.json())
      .then(response => {
        setdata(response)
      })
  }, [])
  return (
    <>
      <h1>list of 10</h1>
      {
        data.map(dato => <Item key={dato.date_utc}><LastTen {...dato} /></Item>)
      }
    </>
  )
}
