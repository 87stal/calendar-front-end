import './App.css';
import React, { useState } from 'react';
// import MyCalendar from './components/Calendar/Calendar';
import Calendar from 'react-calendar';
import FormEntries from './components/FormEntries/FormEntries';
// import SpendingsList from './components/SpendingsList/SpendingsList';


function App() {

function formatDate(date) {

  var dd = date.getDate();
  if (dd < 10) dd = '0' + dd;

  var mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  var yy = date.getFullYear() % 100;
  if (yy < 10) yy = '0' + yy;

  return yy + '-' + mm + '-' + dd;
}
  

    const [date, setDate] = useState(new Date());
    const [entries, setEntries] = useState('');
  
    const handleAddEntries = (amount, category) => {
      setEntries([amount, category, formatDate(date)]);
    };

  const onClickDay = (value) => setDate(value);

  return (
    <div className="App">
      <Calendar
        onChange={setDate}
        onClickDay={onClickDay}
        value={date}
        defaultActiveStartDate={new Date()}
      />
      <FormEntries onSubmit={handleAddEntries}/>
      <h2>Spendings</h2>
      {/* <SpendingsList spendings={spendings} onDeleteSpendings={onDeleteSpendings} onEditSpendings={onEditSpendings}/> */}
    </div>
  );
}
export default App;
