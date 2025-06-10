import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import styles from './WorkCalendar.module.css'
import { useState } from 'react'

type Value = Date | null

export default function WorkCalendar() {
  const [selectedDate, setSelectedDate] = useState<Value>(null)
  const [hours, setHours] = useState<string>('')
  const [note, setNote] = useState<string>('')

  const onDayClick = (value: Date) => {
    setSelectedDate(value)
  }

  const handleSave = () => {
    if (!selectedDate) return
    console.log({
      date: selectedDate.toISOString().split('T')[0],
      hours,
      note,
    })
    setHours('')
    setNote('')
    setSelectedDate(null)
  }

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>Kalender</h2>
      <Calendar onClickDay={onDayClick} />
      
      {selectedDate && (
        <div className={styles.form}>
          <p>Datum: {selectedDate.toLocaleDateString()}</p>
          <input
            type="number"
            placeholder="Timmar"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            className={styles.input}
          />
          <input
            type="text"
            placeholder="Arbete"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className={styles.input}
          />
          <button onClick={handleSave} className={styles.button}>
            Spara
          </button>
        </div>
      )}
    </div>
  )
}
