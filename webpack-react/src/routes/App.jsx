import React from "react";
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPassword from "../containers/RecoveryPassword";
import '../styles/global.css';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

export default  App=()=>{
    return (
        <BrowserRouter>
            <Routes>
                <Layout>
                    <Route patch ="/" element={<Home/>} />
                    <Route patch ="/login" element={<Login/>} />  
                    <Route patch ="/recovery" element={<RecoveryPassword/>} />
                    <Route patch ="*" element={<NotFound/>} />
                </Layout>
            </Routes>
        </BrowserRouter>
    )
}
