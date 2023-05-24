import react, { useState } from "react";
import '../styles/lashes.css'
import '../styles/index.css'

const Lashes = () => {
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
    if (selectedHour === '17' || selectedHour === '10') {
      setSelectedTime(e.target.value);
    } else {
      setSelectedTime('');
    }
  };

  return (
    <div className="containerPrincipal">
      <div className="infoTitle">
        <p>Los turnos para cualquier servicio de pestañas es solo para el horario de las 10 hs. y las 17hs.</p>
      </div>
      <form action="">
        <input
          className="inputDate"
          type="date"
          id="date"
          name="date"
          value={defaultDate}
          min={getFormattedDate()}
          onChange={(e) => setDefaultDate(e.target.value)}
        />
        <input
          className="inputTime"
          type="time"
          id="time"
          name="time"
          value={selectedTime}
          onChange={handleTimeChange}
        >
        </input>
      </form>
    </div>
  );
}

export default Lashes;