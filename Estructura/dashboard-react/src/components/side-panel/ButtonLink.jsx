import React from 'react'
import './ButtonLink.css'
import {Route, Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'

function ButtonLink(){
const buttons = ['Productos', 'Categorias', 'Usuarios']

    return (
        <>
        {buttons.map(button => <Link key={[button]} to={"/"+button}><Button variant="outline-secondary button-link">{button}</Button></Link>)} 
        </>
    )
}


export default ButtonLink