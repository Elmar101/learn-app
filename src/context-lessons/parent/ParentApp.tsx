import React from 'react'
import { ThemeProvider } from '../AppContext'
import ChildrenOne from '../children/ChildrenOne'
import ChildrenTwo from '../children/ChildrenTwo'

const ParentApp = () => {
  return (
    <ThemeProvider>
        <br/> <br/> <br/>

        <ChildrenOne/>

        <br/> <br/> <br/>
        <hr/>
        <br/> <br/> <br/>

        <ChildrenTwo/>
        
    </ThemeProvider>
  )
}

export default ParentApp