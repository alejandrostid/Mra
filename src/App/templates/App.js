import React from "react";
import List from "../components/lista";
import Nav from "../components/nav"
import Carrucel from "../components/carrucel";
import "../public/styles/flex.css"
import Foolter from "../components/foolter";
import "../public/styles/grid.css"
import About from "../components/about";
import Formulario from "../components/formulario";

class App extends React.Component{
    render(){
        return(
            <>
            <Nav></Nav>
            <Carrucel></Carrucel>
            <List></List>
            {/*<About></About>*/}
            <Formulario></Formulario>
            <Foolter></Foolter>
            </>
        )
    }
}
export default App