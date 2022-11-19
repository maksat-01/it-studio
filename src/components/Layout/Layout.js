import React from 'react';
import Header from "../Header/Header";



const Layout = ({children}) => {
    return (
        <div>
            <Header/>
            <div>
                {children}
            </div>
        </div>
    );
};

export default Layout;