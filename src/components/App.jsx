import React from 'react';
import './app.less'
import {useDispatch, useSelector} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./main/Main";
import Card from "./card/card";

const App = () => {
    const dispatch = useDispatch()

    return (

        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route exact path="/" component={<Main/>}/>
                    <Route path="/card" component={< Card/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );

};

export default App;