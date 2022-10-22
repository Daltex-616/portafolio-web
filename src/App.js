import React, {useState, useEffect} from 'react';
import './App.css';
import Cover from './componentes/cover/Cover';
import Navbar from './navbar/Navbar';
import Abauto from './componentes/about/Abouto';
import Slider from './componentes/slider/Slider';
import Info from './componentes/info/info';
import Footer from './componentes/footer/Footer';

function App() {
const [scrollHeight, setScrollHeight] = useState(0)

const handeleScroll = () =>{
  const position = window.pageYOffset
  setScrollHeight(position)
}
useEffect(()=>{
  window.addEventListener("scroll", handeleScroll)
},[scrollHeight])

  return (
    <div className="App">
      <Navbar isScrolling={scrollHeight}/>
      <Cover/>
      <Abauto/>
      <Slider/>   
      <Info/>
      <Footer/>
    </div>
  );
}

export default App;
