import React from 'react'
import { Title } from './styles'

export const LastTen = ({ links, name, date_utc, flight_number }) => (
  <>
    <div>
      <img src={links.patch.small} />
      <Title> {name} </Title>
    </div>
    <div>
      <p>Numero de vuelo: {flight_number} </p>
      <p>fecha: {date_utc} </p>
    </div>
  </>
)
