import './style.css'
import History from '../content/history/Index'
import Characters from '../content/characters/Index'
import Clans from '../content/clans/Index'
import Locals from '../content/locals/Index'

const Index = ({ loreControl, setLoreControl }) => {

  




  return (
    <>

        <div>
            <div className='loreButtons'>
                <button onClick={()=>{setLoreControl(1)}}>Arcos</button>
                <button onClick={()=>{setLoreControl(2)}}>Lugares</button>
                <button onClick={()=>{setLoreControl(3)}}>Clãs</button>
                <button onClick={()=>{setLoreControl(4)}}>Personagens</button>
            </div>
        </div>
        
        {loreControl === 1 && <History/>}
        {loreControl === 2 && <Locals/>}
        {loreControl === 3 && <Clans/>}
        {loreControl === 4 && <Characters/>}
        
        
       

    </>
  )
}

export default Index