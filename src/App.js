import React from 'react';
import Modal from "./components/Modal/Modal"
import { Route,Routes} from "react-router-dom";
import "./style/style.scss"
import Home from "./components/Home/Home";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Modal" element={<Modal/>}/>
            </Routes>
        </>
    );
};

export default App;