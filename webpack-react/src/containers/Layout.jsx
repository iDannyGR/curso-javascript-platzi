import React from 'react';  //rafce para llamar freact y funcion completa
import Header from '@components/Header';

const Layout =({children})=>{
    return(
        <div className="layout">
            <Header />
            {children}
        </div>
    )
}

export default Layout;



