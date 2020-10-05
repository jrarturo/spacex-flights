import React from 'react'
import { ListOfTen } from './components/ListOfTen'
import { GlobalStyle } from './GlobalStyle'
import { Logo } from './components/Logo'

export const App = () => (
  <>
    <Logo />
    <GlobalStyle />
    <ListOfTen />
  </>
)
