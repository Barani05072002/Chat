import React from 'react'
import Chart from './component/Chart'


export default function App() {
  const data = [
    { name: 'January', sales2023: 30, sales2024: 40 },
    { name: 'February', sales2023: 20, sales2024: 30 },
    { name: 'March', sales2023: 50, sales2024: 60 },
    { name: 'April', sales2023: 40, sales2024: 50 },
    { name: 'May', sales2023: 60, sales2024: 70 },
    { name: 'June', sales2023: 70, sales2024: 80 },
  ];
  return (
    <div className='text-3xl border bg-slate'>
      <h1 md-3xl>Flat Sales Chart</h1>
      <Chart/>
    </div>
  )
}
