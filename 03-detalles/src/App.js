import React from "react";
import Calculadora from "./components/Calculadora";

const App = () => {
    return (
        <div className="container text-center" >
            <h1> Calculator - PWA </h1> 
            <hr />
            <Calculadora />
        </div>
    );
};

export default App;