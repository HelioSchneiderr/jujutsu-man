import { useState } from 'react';


import './App.css';

import Logo from "./img/logo-gojo.png"
import Main from './components/conteudo/Index'
import Footer from './components/foter/Index'
import Lore from './components/lore/Index'

function App() {

  const [loreControl, setLoreControl] = useState(0)
  const [pageControl, setPageControl] = useState(0);
  
  function changePage(n, m){
    setPageControl(n)
    setLoreControl(m)
  }



  return (
    <div className="App">
      <div className='logo' onClick={()=>{setPageControl(0)}}>
            <img src={Logo} alt="" width='75px' height='75px' />
            <h1>Jujutsu Man</h1>
      </div>
      {pageControl === 0 && <Main changePage={changePage}/>}
      {pageControl === 1 && <Lore changePage={changePage} loreControl={loreControl} setLoreControl={setLoreControl}/>}
      <Footer/>
    </div>
  );
}

export default App;
