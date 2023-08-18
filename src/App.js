import { useState } from 'react';


import './App.css';

import Logo from "./img/logo-gojo.png"
import Main from './components/main/Index'
import Footer from './components/footer/Index'
import Lore from './components/lore/Index'

function App() {

  const [pageControl, setPageControl] = useState(0);
  
  function changePage(n){
    setPageControl(n)
  }


  return (
    <div className="App">
      <div className='logo' onClick={()=>{setPageControl(0)}}>
            <img src={Logo} alt="" width='75px' height='75px' />
            <h1>Jujutsu Man</h1>
      </div>
      {pageControl === 0 && <Main changePage={changePage}/>}
      {pageControl === 1 && <Lore/>}
      <Footer/>
    </div>
  );
}

export default App;
