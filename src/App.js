import { useState } from 'react';


import './App.css';

import Logo from "./img/logo-gojo.png"
import Main from './components/main/Index'
import Footer from './components/footer/Index'
import Lore from './components/lore/Index'

function App() {

  const [pageControl, setControlPage] = useState(1);
  
  function changePage(n){
    setControlPage(n)
  }


  return (
    <div className="App">
      <div className='logo'>
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
