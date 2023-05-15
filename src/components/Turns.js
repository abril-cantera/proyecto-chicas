import react, { useState } from "react";
import '../styles/turns.css'

const Turns = () => {
  const [selectedTime, setSelectedTime] = useState('10:00');
  const [defaultDate, setDefaultDate] = useState(getFormattedDate());
  /Fecha/
  function getFormattedDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  /Horario/
  const handleTimeChange = (e) => {
    const selectedHour = e.target.value.split(':')[0];

    if (selectedHour === '10' || selectedHour === '17' || selectedHour === '7') {
      setSelectedTime(e.target.value);
    } else {
      setSelectedTime('');
    }
  };

  return (
    <div className="containerPrincipal">
      <div className="infoTitle">
        <h2>Turnos y Fechas disponibles</h2>
        <p>Las horas disponibles solo son: 10 hs. y 17 hs.</p>
      </div>
      <form action="">
        <input type="date"
          value={defaultDate}
          min={getFormattedDate()}
          onChange={(e) => setDefaultDate(e.target.value)}
        />
        <input
          type="time"
          id="myTime"
          name="myTime"
          value={selectedTime}
          onChange={handleTimeChange}
        >
        </input>
      </form>
    </div>
  );
}

export default Turns;