import { useEffect, useState } from 'react'
import './Timer.css'
import data from '../../data.json'


const Timer = ({userData}) => {

  const currentDay = new Date().toLocaleDateString('es-ES', { weekday: 'long' });
  const [time, setTime] = useState("00:00:00")
  const [day, setDay] = useState(currentDay.toUpperCase())
  const [rangeValue, setRangeValue] = useState(0)
  const [color, setColor] = useState({})


  const entrada = userData.semana[currentDay].entrada;
  const salida = userData.semana[currentDay].salida;

  const convertTimeToNumber = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours + (minutes / 60);
  }

  const tiempoTotal = convertTimeToNumber(salida) - convertTimeToNumber(entrada);
  const tiempoTranscurrido = convertTimeToNumber(time.slice(0, 5)) - convertTimeToNumber(entrada);
  const porcentaje = (tiempoTranscurrido / tiempoTotal) * 100;


  const showCurrentTime = () => {
    setInterval(() => {
      const currentTime = new Date().toLocaleTimeString()
      setTime(currentTime)


      if (porcentaje != rangeValue && porcentaje > 0) {
        setRangeValue(porcentaje)
        setRangeValue(Math.round(porcentaje))

        if (porcentaje <= 33) {
          setColor(data.colour[33])
        } else if (porcentaje > 33 && porcentaje <= 66) {
          setColor(data.colour[66])
        }
        else if (porcentaje > 66 && porcentaje <= 100) {
          setColor(data.colour[100])
        }

      }

    }, 1000)
  }

  showCurrentTime();

  return (
    <>
      <div className="header">
        <div className='header-container'>
          <p>Hola {data.username}</p>
          <h1> {day}  |  {time} </h1>
        </div>
      </div>
      <div className="progress-container">
        <p>{entrada}</p>
        <div className="progress-bar">
          <div className='bar' style={{ width: `${rangeValue}%`, backgroundImage: `linear-gradient(90deg,${color.initial} 0%, ${color.half} 50%, ${color.final} 100%)` }}>
            <span>{rangeValue}%</span>
          </div>
        </div>
        <p>{salida}</p>
      </div>
    </>
  )
}
export default Timer