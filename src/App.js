import React from 'react';
import Menu from './Components/Menu/';
import SectionOne from './Components/Sections/SectionOne';
import SectionTwo from './Components/Sections/SectionTwo';
import SectionThree from './Components/Sections/SectionThree';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Menu/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <Footer/>
    </div>
    );
}

export default App;
