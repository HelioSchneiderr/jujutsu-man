import { useState } from 'react';


import './App.css';

import Main from './components/main/Index'
import Footer from './components/footer/Index'
import Lore from './components/lore/Index'

function App() {

  const [pageControl, setControlPage] = useState(0);
  
  function changePage(n){
    setControlPage(n)
  }


  return (
    <div className="App">
      {pageControl === 0 && <Main changePage={changePage}/>}
      {pageControl === 1 && <Lore/>}
      <Footer/>
    </div>
  );
}

export default App;
