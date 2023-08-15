import { useState } from 'react'

import './style.css'

import History from '../content/history/Index'
import Characters from '../content/history/Index'
import Clans from '../content/history/Index'
import Locals from '../content/locals/Index'

const Index = () => {

    const [control, setControl] = useState(1);




  return (
    <>

        <div>
            <div className='loreButtons'>
                <button onClick={()=>{setControl(0)}}>Arcos</button>
                <button onClick={()=>{setControl(1)}}>Lugares</button>
                <button onClick={()=>{setControl(2)}}>Clãs</button>
                <button onClick={()=>{setControl(3)}}>Personagens</button>
            </div>
        </div>
        
        {control === 0 && <History/>}
        {control === 1 && <Locals/>}
        {control === 2 && <Clans/>}
        {control === 3 && <Characters/>}
        
        
       

    </>
  )
}

export default Index