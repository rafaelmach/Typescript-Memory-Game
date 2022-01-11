import React from 'react'
// Setup
import { createBoard } from "./setup"
import { shuffleArray } from './utils'
// Types
import { CardType } from './setup'
// Styles
import { Grid } from './App.styles'

const App = () => {
console.log(createBoard())

  return (
    <div>
      <Grid>Start Here!</Grid>
    </div>
  )
}

export default App
