import React, { use, useState } from 'react'


const Timer = () => {

    const [time, setTime] = useState('00:00:00');
    const [shortTime,setShortTime] = useState('00:00');
    const [startTimer, setStartTime] = useState('07:00');
    const [endTime, setEndTime] = useState('16:00');
    const [totalTime, setTotalTime] = useState('09:00');
    const [porcentage, setPorcentage] = useState(0);



    setInterval(() => {
        const currentTime = new Date().toLocaleTimeString()
        const shortCurrentTime = currentTime.slice(0, 4)
        const calcTotalTime = convertirHoraANumero(endTime) - convertirHoraANumero(startTimer)
        const calcLeftTime = convertirHoraANumero(currentTime) - convertirHoraANumero(startTimer)
        const porc = (calcLeftTime / calcTotalTime) * 100
        setTotalTime(calcTotalTime)
        setPorcentage(porc)

       setTime(currentTime)
       setShortTime(shortCurrentTime)
    }, 1000)



  return (
    <div>
        <div>{'Current: ' + time}</div>
        <div>{'Sliced: ' +shortTime}</div>
        <div>  {totalTime}</div>
        <div>{porcentage}</div>
    </div>
  )
}

function convertirHoraANumero(horaString) {
  if (!horaString) return null;
  const [horas, minutos] = horaString.split(':').map(Number);
  return horas + minutos / 60;
}

export default Timer