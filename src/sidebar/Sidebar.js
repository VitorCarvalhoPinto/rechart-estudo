import {
    Link
} from "react-router-dom";
import React from "react";
import './style.css'

export default function Sidebar(){
    return(
        <div className='menu'>
            <div className="sideBar">
                <Link id="option" className="sobre" to="/">            Linha</Link>
                <Link id="option" className="pie" to="/pie">Pie</Link>
                <Link id="option" className="bar" to="/bar">Barra</Link>
            </div>
        </div>
    );

}