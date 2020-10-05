import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table'

export const DataTable = () => {
  const [data, setdata] = useState([])
  useEffect(function () {
    window.fetch('https://api.spacexdata.com/v4/launches/latest')
      .then(res => res.json())
      .then(response => {
        setdata(response)
      })
  }, [])

  return (
    <>
      <h1>Hola Soy la dataTable!</h1>
      <MaterialTable
        title="Data Fligths..."
        columns={[
          {
            title: 'Parche',
            field: 'patch',
            render: rowData => (
              <img
                style={{ height: 36, borderRadius: '50%' }}
                src={rowData.patch.small}
              />
            ),
          },
          { title: 'Id', field: 'id' },
          { title: 'Name Operation', field: 'name' },
          { title: 'Viaje No.', field: 'flight_number', type: 'numeric' },
        ]}
        data={data}
      />
    </>
  )
}