import React,{Component} from 'react';
import './App.css'
import Banner from './Departamento-de-componentes/Banner';
import Body from './Departamento-de-componentes/Body';
import Footer from './Departamento-de-componentes/Footer';
import Header from './Departamento-de-componentes/Header';



class App extends Component{
    render(){

        const temas=["Tipos de componentes", 
            "Contenedores", 
            "Usar mas de un componente", 
            "Funciones", 
            "Props", 
            "Prop-Types", 
            "DefaultProps"
        ]

        return ( 
            <div>
                <Banner textoban = "Desarrollo de Aplicaciones para Dispositivos Móviles" />
                
                <Header/>

                <Banner textoban = "8 de Octubre 2021"/>

                <Body
                        practica ="Práctica 1 - Unidad 2"
                        eltemas = {temas}
                />

                <Footer textofoo = {<p> Copyright &copy; Todos los derechos reservados </p>}/>
                
            </div>
        );
    
}
}

export default App;