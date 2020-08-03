import React from 'react';
import Menu from '../Components/Menu'
import Footer from '../Components/Footer';

const PageDefault = ({children}) => (
    <div>
    <Menu/>
        {children}
    <Footer/>
    </div>
);

export default PageDefault;