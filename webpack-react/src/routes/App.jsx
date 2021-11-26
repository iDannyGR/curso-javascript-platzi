import React from "react";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Layout from "@containers/Layout";
import PasswordReset from "@pages/PasswordReset";
import EmailSend from "@pages/EmailSend";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import "@styles/global.css";
import Login from "@pages/Login";
import MyAccount from "@pages/MyAccount";
import Checkout from "@pages/Checkout";
import CreateAccount from "@pages/CreateAccount";
import Orders from "@pages/Orders";
import AppContext from '../context/Appcontext';
import useInitialState from '../hooks/useInitialState';

 const  App = () =>{
     const initialState = useInitialState();
    return (
        <AppContext.Provider value = {initialState}>
        <BrowserRouter>
            <Layout>
                <Routes>              
                    <Route   path ="/" element={<Home />} /> 
                    <Route   path ="/login" element={<Login />} /> 
                    <Route   path ="/account" element={<MyAccount />} /> 
                    <Route   path ="/recovery" element={<PasswordReset />} />  
                    <Route   path ="/emailsend" element={<EmailSend />} />
                    <Route   path ='/newaccount' element={<CreateAccount />} />
                    <Route   path ="/checkout" element={<Checkout />} />
					<Route   path ="/orders" element={<Orders />} />
                    <Route   path ="*" element={<NotFound />} />                
                </Routes>
            </Layout>
        </BrowserRouter>
        </AppContext.Provider>
    )
}

export default App;