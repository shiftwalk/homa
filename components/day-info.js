import TextScrambler from "./text-scrambler";

export default function DayInfo({ className }) {
  let d = new Date()

  let date = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit', weekday: 'short' }).format(d);
  
  let time = new Intl.DateTimeFormat('en', { hour: 'numeric', minute: 'numeric' }).format(d);
  
  return (
    <span className={`block tabular-nums ${className ? className : null}`}>
        <TextScrambler text={`${date.replace(',', '').replace(', ', ' ')} ${time.replace(' ', '')} XX°C`} seed={16} />
    </span>
  )
}