import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MaterialTable from 'material-table'
import regeneratorRuntime from "regenerator-runtime";

const columns= [
  { title: 'Patch', field: 'small', render: rowData => <img src={rowData.links.patch.small} style={{width: 100, borderRadius: '50%'}}/> },
  { title: 'Flight#', field: 'flight_number', type: 'numeric' },
  { title: 'Name', field: 'name' },
  { title: 'Date', field: 'date_utc', type: 'date' },
  { title: 'Details', field: 'details' },
]
const BaseURL = 'https://api.spacexdata.com/v4/launches'


export const ListOfTen = () => {
  const [data, setdata] = useState([])

  const petitionGet = async() => {
    await axios.get(BaseURL)
    .then(response => {
      setdata(response.data);
    })
  }

  useEffect(() => {
    petitionGet();
  }, [])
  return (
    <>
      <MaterialTable 
        columns={columns}
        data={data}
        title='Vuelos de spaceX'
        options={{
        rowStyle: {
          backgroundColor: '#EEE',
        }
      }}
      />
      
    </>
  )
}
