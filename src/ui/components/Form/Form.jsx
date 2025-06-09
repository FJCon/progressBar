import React from 'react'
import './Form.css'

const Form = () => {

    const clickHandler = (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const lunesIn = document.getElementById('lunes-in').value; 
        const lunesOut = document.getElementById('lunes-out').value;
        const martesIn = document.getElementById('martes-in').value;
        const martesOut = document.getElementById('martes-out').value;
        const miercolesIn = document.getElementById('miercoles-in').value;
        const miercolesOut = document.getElementById('miercoles-out').value;
        const juevesIn = document.getElementById('jueves-in').value;
        const juevesOut = document.getElementById('jueves-out').value;
        const viernesIn = document.getElementById('viernes-in').value;
        const viernesOut = document.getElementById('viernes-out').value;
        const data = {
            username: name,
            firstTime: false,
            semana: {
                lunes: { entrada: lunesIn, salida: lunesOut },
                martes: { entrada: martesIn, salida: martesOut },
                miercoles: { entrada: miercolesIn, salida: miercolesOut },
                jueves: { entrada: juevesIn, salida: juevesOut },
                viernes: { entrada: viernesIn, salida: viernesOut }
            }
        };

        console.log(data);
        localStorage.setItem('data', JSON.stringify(data));
        window.location.reload();
    }
    return (
        <form className="form">


            <label htmlFor="name">Nombre</label>
            <input type="text" id='name' placeholder='Ingrese su nombre' />
            <div className='week-container'>
                <h2>Horarios de la semana</h2>
                <p>Lunes</p>
                <div className='input-container'>
                    <input type="text" id='lunes-in' placeholder='Horario de entrada' />
                    <input type="text" id='lunes-out' placeholder='Horario de salida' />
                </div>
                <p>Martes</p>
                <div className='input-container'>
                    <input type="text" id='martes-in' placeholder='Horario de entrada' />
                    <input type="text" id='martes-out' placeholder='Horario de salida' />
                </div>
                <p>Miércoles</p>
                <div className='input-container'>
                    <input type="text" id='miercoles-in' placeholder='Horario de entrada' />
                    <input type="text" id='miercoles-out' placeholder='Horario de salida' />
                </div>
                <p>Jueves</p>
                <div className='input-container'>
                    <input type="text" id='jueves-in' placeholder='Horario de entrada' />
                    <input type="text" id='jueves-out' placeholder='Horario de salida' />
                </div>
                <p>Viernes</p>
                <div className='input-container'>
                    <input type="text" id='viernes-in' placeholder='Horario de entrada' />
                    <input type="text" id='viernes-out' placeholder='Horario de salida' />
                </div>
            </div>
            <button onClick={clickHandler}> Completar</button>
        </form>
    )
}


export default Form