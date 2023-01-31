import React from "react";
import axios from "axios";

import {Header} from "./components";
import {Catalog, Home} from "./pages";
import { Route, Routes } from "react-router-dom";

import './styles/index.scss'

function App() {
    const [guitars, setGuitars] = React.useState([]);
    
    React.useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
            setGuitars(data.guitars)
        })        
    }, []);

    console.log(guitars);

    return(
        <div className="main">
            <Header />     
            <Routes>      
                <Route path="/" element={<Home items={guitars} /> } />
                <Route path="/catalog" element={ <Catalog items={guitars} /> } />
            </Routes>
        </div>
    )
}

export default App;