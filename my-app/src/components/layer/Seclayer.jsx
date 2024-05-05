import React, { useContext } from 'react'
import { Appcontext } from '../../Appcontext'

function Seclayer() {
const {data}=useContext(Appcontext)
   
    return (
    <div>Seclayer {data}</div>
  )
}

export default Seclayer